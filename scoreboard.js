// Scoreboard shared by index.html and test.html.
//
// BOARD_URL: the address of the scoreboard Worker (see scoreboard-worker.js). Leave it '' to use
// "local mode": scores are kept only in each student's own browser. With a URL, everyone shares one scoreboard.
// Scores are reported by the browser, so a determined student can fake one. Use it for fun, not for grades.
const BOARD_URL = 'https://physq-board.tsiamis-angelos.workers.dev';

// One object holds the nickname, the saved scores and the calls to the Worker.
class Board {
  constructor(url) { this.url = url.replace(/\/$/, ''); }

  static valid(n) { return /^[\p{L}\p{N}_\-. ]{2,16}$/u.test(n); }
  static esc(s) { return String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c])); }

  get nick() { try { return localStorage.getItem('physq-nick') || ''; } catch (e) { return ''; } }
  set nick(v) { try { localStorage.setItem('physq-nick', v.trim()); } catch (e) {} }

  // Login token of a registered profile (null for guests). A logged-in player's nickname is fixed.
  get token() { try { return localStorage.getItem('physq-token') || ''; } catch (e) { return ''; } }
  set token(v) { try { v ? localStorage.setItem('physq-token', v) : localStorage.removeItem('physq-token'); } catch (e) {} }
  get loggedIn() { return !!(this.url && this.token && Board.valid(this.nick)); }

  // Call the Worker. Returns {ok, status, data}. A 401 on a call with a token means the token expired: forget it.
  async api(path, body) {
    const h = {'Content-Type': 'application/json'};
    if (this.token) h.Authorization = 'Bearer ' + this.token;
    try {
      const r = await fetch(this.url + path, {method: body ? 'POST' : 'GET', headers: h, body: body ? JSON.stringify(body) : undefined});
      let data = {}; try { data = await r.json(); } catch (e) {}
      if (r.status === 401 && this.token && path !== '/login') this.token = '';
      return {ok: r.ok, status: r.status, data};
    } catch (e) { return {ok: false, status: 0, data: {error: 'Cannot reach the server'}}; }
  }

  async _auth(path, nick, pin) {
    const r = await this.api(path, {nick: nick.trim(), pin});
    if (r.ok) { this.nick = r.data.nick; this.token = r.data.token; }
    return r.ok ? '' : (r.data.error || 'Failed');
  }
  register(nick, pin) { return this._auth('/register', nick, pin); }   // returns '' on success, else an error text
  login(nick, pin) { return this._auth('/login', nick, pin); }
  async logout() { if (this.token) await this.api('/logout', {}); this.token = ''; }
  async me() { return this.api('/me'); }

  // Add one finished session to the profile: {mode:'test'|'practice', n, ok, secs, per:{topic:{c,n}}, tags:{tag:count}}.
  // If the server cannot be reached the session waits in this browser and goes out with the next one.
  async sendStats(d) {
    if (!this.loggedIn) return false;
    let q = []; try { q = JSON.parse(localStorage.getItem('physq-pending') || '[]'); } catch (e) {}
    q.push(d); q = q.slice(-20);
    const left = [];
    for (const x of q) { const r = await this.api('/stats', x); if (!r.ok && (r.status === 0 || r.status >= 500)) left.push(x); }
    try { localStorage.setItem('physq-pending', JSON.stringify(left)); } catch (e) {}
    return left.length === 0;
  }

  // Best score per lesson on this device: {lessonId: {correct, total}}
  local() { try { return JSON.parse(localStorage.getItem('physq-board') || '{}'); } catch (e) { return {}; } }

  // Save a result (always on this device, and on the shared board when BOARD_URL is set and a nickname exists).
  async submit(lesson, correct, total) {
    const all = this.local(), old = all[lesson];
    if (!old || correct > old.correct) {
      all[lesson] = {correct, total};
      try { localStorage.setItem('physq-board', JSON.stringify(all)); } catch (e) {}
    }
    if (!this.url || !Board.valid(this.nick)) return false;
    try {
      const h = {'Content-Type': 'application/json'}; if (this.token) h.Authorization = 'Bearer ' + this.token;
      const r = await fetch(this.url + '/score', {method: 'POST', headers: h, body: JSON.stringify({nick: this.nick, lesson, correct, total})});
      try { Object.keys(sessionStorage).filter(k => k.startsWith('physq-top:')).forEach(k => sessionStorage.removeItem(k)); } catch (e) {}
      return r.ok;
    } catch (e) { return false; }
  }

  // Rows for one lesson (lesson = id) or for the overall board (lesson = '').
  // Returns {shared: bool, rows: [{nick, correct, total}]}, best first.
  async top(lesson) {
    if (this.url) {
      const ck = 'physq-top:' + lesson;                         // 60 s cache per browser tab: saves the Worker's free quota
      try { const c = JSON.parse(sessionStorage.getItem(ck)); if (c && Date.now() - c.t < 60000) return c.v; } catch (e) {}
      try {
        const r = await fetch(this.url + (lesson ? '/top?lesson=' + encodeURIComponent(lesson) : '/overall'));
        if (r.ok) {
          const v = {shared: true, rows: (await r.json()).rows || []};
          try { sessionStorage.setItem(ck, JSON.stringify({t: Date.now(), v})); } catch (e) {}
          return v;
        }
        let why = ''; try { why = (await r.json()).error || ''; } catch (e) {}
        this.error = 'HTTP ' + r.status + (why ? ': ' + why : '');
      } catch (e) { this.error = 'Cannot reach the Worker (' + e.message + ')'; }
    }
    const all = this.local(), me = this.nick || 'You';
    let rows = [];
    if (lesson) { if (all[lesson]) rows = [{nick: me, ...all[lesson]}]; }
    else {
      const ids = Object.keys(all);
      if (ids.length) rows = [{nick: me, correct: ids.reduce((a, k) => a + all[k].correct, 0), total: ids.reduce((a, k) => a + all[k].total, 0)}];
    }
    return {shared: false, rows, error: this.error || ''};
  }

  // HTML table for the rows. The row of the current nickname is highlighted.
  table(res) {
    const me = this.nick.toLowerCase();
    // No description on the shared board. Only local mode explains itself (and shows the error if the shared board is down).
    const note = res.shared ? '' : `<p class="note">Local mode: only your own scores on this device.${res.error ? ' Shared board unavailable: ' + Board.esc(res.error) : ''}</p>`;
    if (!res.rows.length) return '<p class="note">No scores yet. Take a timed test in the Test builder to be the first.</p>' + note;
    return '<ol class="board">' + res.rows.slice(0, 15).map((r, i) =>
      `<li${r.nick.toLowerCase() === me ? ' class="me"' : ''}><span class="rk">${i + 1}</span><span class="nm">${Board.esc(r.nick)}</span>` +
      `<span class="pt">${r.correct * 10} pts <small>${r.correct}/${r.total}</small></span></li>`).join('') + '</ol>' + note;
  }
}
const board = new Board(BOARD_URL);
