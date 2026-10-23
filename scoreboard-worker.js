// Cloudflare Worker: shared scoreboard for the course site. Free tier is enough.
//
// Setup (once):
//   1. Cloudflare dashboard -> Storage & Databases -> KV -> Create a namespace (e.g. "physq-board").
//   2. Workers & Pages -> Create -> Worker -> paste this file -> Deploy.
//   3. Worker -> Settings -> Bindings -> Add -> KV namespace: variable name  BOARD  , pick the namespace.
//   4. Worker -> Settings -> Variables: ALLOWED_ORIGIN (Text) = https://tsiamis3.github.io   (no trailing slash, no path)
//   5. Copy the Worker URL (https://something.workers.dev) into BOARD_URL in scoreboard.js and upload that file.
//
// API:  POST /score {nick, lesson, correct, total}   keeps the best score per nickname and lesson
//       GET  /top?lesson=ID                           top 20 of one lesson
//       GET  /overall                                 top 20 over all lessons (sum of best scores)
// Scores come from the browser, so they can be faked. This is a game, not an exam.

const NICK = /^[\p{L}\p{N}_\-. ]{2,16}$/u;
const LESSON = /^[\w\-.]{1,40}$/;

// All keys with a given prefix. The scores are stored as KV metadata, so no extra reads are needed.
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

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    const reply = (obj, status = 200) =>
      new Response(JSON.stringify(obj), { status, headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (origin !== env.ALLOWED_ORIGIN) return reply({ error: 'Origin not allowed' }, 403);
    const url = new URL(req.url);

    if (req.method === 'POST' && url.pathname === '/score') {
      let p;
      try { p = await req.json(); } catch { return reply({ error: 'Bad JSON' }, 400); }
      const nick = String(p.nick || '').trim(), lesson = String(p.lesson || '');
      const correct = p.correct, total = p.total;
      if (!NICK.test(nick) || !LESSON.test(lesson) || !Number.isInteger(correct) || !Number.isInteger(total) ||
          total < 1 || total > 50 || correct < 0 || correct > total) return reply({ error: 'Invalid score' }, 400);
      const key = `b:${lesson}:${nick.toLowerCase()}`;
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
        const who = k.name.split(':').slice(2).join(':');
        const s = sums[who] || (sums[who] = { nick: k.metadata.nick, correct: 0, total: 0 });
        s.correct += k.metadata.correct; s.total += k.metadata.total;
      }
      const rows = Object.values(sums).sort((a, b) => b.correct - a.correct || a.total - b.total || a.nick.localeCompare(b.nick)).slice(0, 20);
      return reply({ rows });
    }

    return reply({ error: 'Not found' }, 404);
  },
};
