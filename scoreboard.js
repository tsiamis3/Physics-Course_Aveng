// Scoreboard shared by index.html and lesson.html.
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
      const r = await fetch(this.url + '/score', {method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nick: this.nick, lesson, correct, total})});
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
      } catch (e) { /* fall through to local mode */ }
    }
    const all = this.local(), me = this.nick || 'You';
    let rows = [];
    if (lesson) { if (all[lesson]) rows = [{nick: me, ...all[lesson]}]; }
    else {
      const ids = Object.keys(all);
      if (ids.length) rows = [{nick: me, correct: ids.reduce((a, k) => a + all[k].correct, 0), total: ids.reduce((a, k) => a + all[k].total, 0)}];
    }
    return {shared: false, rows};
  }

  // HTML table for the rows. The row of the current nickname is highlighted.
  table(res) {
    const me = this.nick.toLowerCase();
    const note = `<p class="note">${res.shared ? 'Shared scoreboard. Scores come from the students\u2019 browsers, so treat it as a game.'
                                                 : 'Local mode: only your own scores on this device.'}</p>`;
    if (!res.rows.length) return '<p class="note">No scores yet. Take a lesson quiz to be the first.</p>' + note;
    return '<ol class="board">' + res.rows.slice(0, 15).map((r, i) =>
      `<li${r.nick.toLowerCase() === me ? ' class="me"' : ''}><span class="rk">${i + 1}</span><span class="nm">${Board.esc(r.nick)}</span>` +
      `<span class="pt">${r.correct * 10} pts <small>${r.correct}/${r.total}</small></span></li>`).join('') + '</ol>' + note;
  }
}
const board = new Board(BOARD_URL);
