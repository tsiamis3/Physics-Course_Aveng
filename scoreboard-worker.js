// Cloudflare Worker: shared scoreboard + player profiles for the course site. Free tier is enough.
//
// Setup (same as before, nothing new to configure):
//   KV namespace bound as  BOARD ,  variable ALLOWED_ORIGIN = https://tsiamis3.github.io  (no trailing slash, no path).
//   Just paste this file over the old Worker code and Deploy.
//
// API:  POST /score {nick, lesson, correct, total}   best score per nickname and lesson (a registered nickname needs its login token)
//       GET  /top?lesson=ID    top 20 of one lesson          GET /overall    top 20 over all lessons
//       POST /register {nick, pin}   create a profile (PIN = 4 to 6 digits) -> {token, nick}
//       POST /login    {nick, pin}   -> {token, nick}   (5 wrong PINs lock the nickname for 15 minutes)
//       POST /logout                 forget this device's token
//       GET  /me                     -> {nick, created, stats}
//       POST /stats {mode, n, ok, secs, per:{topic:{c,n}}, tags:{tag:count}}   add one test/practice session to the profile
// Tokens go in the header  Authorization: Bearer <token>.  Everything comes from the browser, so it can be faked: this is a game, not an exam.
// A forgotten PIN cannot be recovered: delete the keys u:<nick> and s:<nick> (lower case) in the KV dashboard and the nickname is free again.

const NICK = /^[\p{L}\p{N}_\-. ]{2,16}$/u;
const LESSON = /^[\w\-.]{1,40}$/;
const PIN = /^\d{4,6}$/;
const KEY = /^[\w\-.]{1,60}$/;
const TOKEN_DAYS = 90, ITER = 10000, MAX_TESTS = 40, MAX_DAYS = 120;

async function listAll(env, prefix) {
  const out = [];
  let cursor;
  do {
    const page = await env.BOARD.list({prefix, cursor});
    out.push(...page.keys);
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor && out.length < 5000);
  return out.filter(k => k.metadata);
}

const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
async function hashPin(pin, salt) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(pin), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({name: 'PBKDF2', hash: 'SHA-256', salt: new TextEncoder().encode(salt), iterations: ITER}, key, 256);
  return hex(bits);
}
const newToken = () => crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '');

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };
    const reply = (obj, status = 200) =>
      new Response(JSON.stringify(obj), { status, headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (origin !== env.ALLOWED_ORIGIN) return reply({ error: 'Origin not allowed' }, 403);
    const url = new URL(req.url);
    const body = async () => { try { return await req.json(); } catch { return null; } };
    const bearer = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
    // Lower-case nickname the token belongs to, or ''.
    const who = async () => (bearer && /^[0-9a-f]{64}$/.test(bearer)) ? (await env.BOARD.get('t:' + bearer)) || '' : '';
    const issue = async (nickLow) => { const t = newToken(); await env.BOARD.put('t:' + t, nickLow, { expirationTtl: TOKEN_DAYS * 86400 }); return t; };

    if (req.method === 'POST' && url.pathname === '/register') {
      const p = await body(); if (!p) return reply({ error: 'Bad JSON' }, 400);
      const nick = String(p.nick || '').trim(), pin = String(p.pin || '');
      if (!NICK.test(nick)) return reply({ error: 'Nickname: 2 to 16 letters, digits, spaces, - _ .' }, 400);
      if (!PIN.test(pin)) return reply({ error: 'PIN: 4 to 6 digits' }, 400);
      const low = nick.toLowerCase();
      if (await env.BOARD.get('u:' + low)) return reply({ error: 'This nickname is taken. Log in if it is yours.' }, 409);
      const salt = crypto.randomUUID();
      await env.BOARD.put('u:' + low, JSON.stringify({ nick, salt, hash: await hashPin(pin, salt), created: Date.now() }));
      return reply({ ok: true, nick, token: await issue(low) });
    }

    if (req.method === 'POST' && url.pathname === '/login') {
      const p = await body(); if (!p) return reply({ error: 'Bad JSON' }, 400);
      const low = String(p.nick || '').trim().toLowerCase(), pin = String(p.pin || '');
      if (!NICK.test(low) || !PIN.test(pin)) return reply({ error: 'Wrong nickname or PIN' }, 401);
      const fails = parseInt(await env.BOARD.get('f:' + low) || '0', 10);
      if (fails >= 5) return reply({ error: 'Too many wrong PINs. Try again in 15 minutes.' }, 429);
      const u = JSON.parse(await env.BOARD.get('u:' + low) || 'null');
      if (!u || (await hashPin(pin, u.salt)) !== u.hash) {
        if (u) await env.BOARD.put('f:' + low, String(fails + 1), { expirationTtl: 900 });
        return reply({ error: 'Wrong nickname or PIN' }, 401);
      }
      if (fails) await env.BOARD.delete('f:' + low);
      return reply({ ok: true, nick: u.nick, token: await issue(low) });
    }

    if (req.method === 'POST' && url.pathname === '/logout') {
      if (bearer && /^[0-9a-f]{64}$/.test(bearer)) await env.BOARD.delete('t:' + bearer);
      return reply({ ok: true });
    }

    if (req.method === 'GET' && url.pathname === '/me') {
      const low = await who(); if (!low) return reply({ error: 'Not logged in' }, 401);
      const u = JSON.parse(await env.BOARD.get('u:' + low) || 'null'); if (!u) return reply({ error: 'Not logged in' }, 401);
      const stats = JSON.parse(await env.BOARD.get('s:' + low) || 'null') || { total: { n: 0, c: 0 }, topics: {}, tags: {}, tests: [], days: [] };
      return reply({ nick: u.nick, created: u.created, stats });
    }

    if (req.method === 'POST' && url.pathname === '/stats') {
      const low = await who(); if (!low) return reply({ error: 'Not logged in' }, 401);
      const p = await body(); if (!p) return reply({ error: 'Bad JSON' }, 400);
      const n = p.n, ok = p.ok, secs = p.secs;
      if (!['test', 'practice'].includes(p.mode) || !Number.isInteger(n) || !Number.isInteger(ok) || n < 1 || n > 200 || ok < 0 || ok > n ||
          !Number.isInteger(secs) || secs < 0 || secs > 86400 || typeof p.per !== 'object' || !p.per) return reply({ error: 'Invalid stats' }, 400);
      const per = {}; let sn = 0, sc = 0;
      for (const [t, v] of Object.entries(p.per)) {
        if (!KEY.test(t) || !v || !Number.isInteger(v.n) || !Number.isInteger(v.c) || v.n < 1 || v.n > 200 || v.c < 0 || v.c > v.n) return reply({ error: 'Invalid stats' }, 400);
        per[t] = v; sn += v.n; sc += v.c;
      }
      if (sn !== n || sc !== ok) return reply({ error: 'Invalid stats' }, 400);
      const tags = {};
      for (const [t, k] of Object.entries(p.tags || {})) if (KEY.test(t) && Number.isInteger(k) && k > 0 && k <= 200) tags[t] = k;

      const s = JSON.parse(await env.BOARD.get('s:' + low) || 'null') || { total: { n: 0, c: 0 }, topics: {}, tags: {}, tests: [], days: [] };
      s.total.n += n; s.total.c += ok;
      for (const [t, v] of Object.entries(per)) { const a = s.topics[t] || (s.topics[t] = { n: 0, c: 0 }); a.n += v.n; a.c += v.c; }
      for (const [t, k] of Object.entries(tags)) if (s.tags[t] || Object.keys(s.tags).length < 300) s.tags[t] = (s.tags[t] || 0) + k;
      s.tests.push({ t: Date.now(), m: p.mode, n, ok, s: secs });
      s.tests = s.tests.slice(-MAX_TESTS);
      const day = new Date().toISOString().slice(0, 10);
      if (s.days[s.days.length - 1] !== day) s.days.push(day);
      s.days = s.days.slice(-MAX_DAYS);
      await env.BOARD.put('s:' + low, JSON.stringify(s));
      return reply({ ok: true });
    }

    if (req.method === 'POST' && url.pathname === '/score') {
      const p = await body(); if (!p) return reply({ error: 'Bad JSON' }, 400);
      const nick = String(p.nick || '').trim(), lesson = String(p.lesson || '');
      const correct = p.correct, total = p.total;
      if (!NICK.test(nick) || !LESSON.test(lesson) || !Number.isInteger(correct) || !Number.isInteger(total) ||
          total < 1 || total > 50 || correct < 0 || correct > total) return reply({ error: 'Invalid score' }, 400);
      const low = nick.toLowerCase();
      // A registered nickname only accepts scores from its own login.
      if (await env.BOARD.get('u:' + low)) { if ((await who()) !== low) return reply({ error: 'This nickname has a profile. Log in first.' }, 401); }
      const key = `b:${lesson}:${low}`;
      const old = await env.BOARD.getWithMetadata(key);
      if (old && old.metadata && old.metadata.correct >= correct) return reply({ ok: true, kept: true });
      await env.BOARD.put(key, '1', { metadata: { nick, correct, total } });
      return reply({ ok: true });
    }

    if (req.method === 'GET' && url.pathname === '/top') {
      const lesson = url.searchParams.get('lesson') || '';
      if (!LESSON.test(lesson)) return reply({ error: 'Bad lesson' }, 400);
      const rows = (await listAll(env, `b:${lesson}:`)).map(k => k.metadata)
        .sort((a, b) => b.correct - a.correct || a.total - b.total || a.nick.localeCompare(b.nick)).slice(0, 20);
      return reply({ rows });
    }

    if (req.method === 'GET' && url.pathname === '/overall') {
      const sums = {};
      for (const k of await listAll(env, 'b:')) {
        const w = k.name.split(':').slice(2).join(':');
        const s = sums[w] || (sums[w] = { nick: k.metadata.nick, correct: 0, total: 0 });
        s.correct += k.metadata.correct; s.total += k.metadata.total;
      }
      const rows = Object.values(sums).sort((a, b) => b.correct - a.correct || a.total - b.total || a.nick.localeCompare(b.nick)).slice(0, 20);
      return reply({ rows });
    }

    return reply({ error: 'Not found' }, 404);
  },
};
