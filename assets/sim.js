/* Shared helpers for the simulation pages.
   SimPage  – language (EL/EN, remembered per device), number format, practice link.
   Quiz     – the "Solve it" panel: shows an exam-style question built by the page,
              checks the answer, explains it, and can load the scenario into the simulation. */
(function () {
  'use strict';

  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const UI = {
    el: {solve: 'Λύσε το', newq: 'Νέα ερώτηση', show: 'Δείξ\' το στην προσομοίωση', practice: 'Κάνε 10 τέτοιες ερωτήσεις',
         right: 'Σωστά!', wrong: 'Όχι ακριβώς.', answer: 'Σωστή απάντηση'},
    en: {solve: 'Solve it', newq: 'New question', show: 'Show it in the simulation', practice: 'Do 10 questions like these',
         right: 'Correct!', wrong: 'Not quite.', answer: 'Correct answer'}
  };

  class SimPage {
    // T: {el:{...}, en:{...}} page texts. The language choice is shared by all simulation pages.
    constructor(T) {
      this.T = T; this.lang = 'el'; this.subs = [];
      try { const g = localStorage.getItem('sim-lang'); if (g === 'el' || g === 'en') this.lang = g; } catch (e) { /* private mode */ }
    }
    get t() { return this.T[this.lang]; }
    get ui() { return UI[this.lang]; }
    onLang(fn) { this.subs.push(fn); }
    setLang(l) {
      this.lang = l;
      try { localStorage.setItem('sim-lang', l); } catch (e) { /* ignore */ }
      document.documentElement.lang = l;
      this.subs.forEach(fn => fn());
    }
    // Wire two buttons (ΕΛ / EN) to the language switch.
    bindLang(elBtn, enBtn) {
      const sync = () => { elBtn.setAttribute('aria-pressed', this.lang === 'el'); enBtn.setAttribute('aria-pressed', this.lang === 'en'); };
      elBtn.onclick = () => this.setLang('el'); enBtn.onclick = () => this.setLang('en');
      this.onLang(sync); sync();
    }
    // Numbers in the style of the question bank: thin groups of thousands, at most d decimals, no trailing zeros.
    fmt(x, d = 2) { return this.fmtIn(x, d, this.lang); }
    fmtIn(x, d, lang) {
      if (!isFinite(x)) return '—';
      const neg = x < 0; x = Math.abs(x);
      let s = (Math.round(x * 10 ** d) / 10 ** d).toFixed(d);
      if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
      let [i, f] = s.split('.');
      if (i.length > 4) i = i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      s = f ? i + (lang === 'el' ? ',' : '.') + f : i;
      return (neg ? '−' : '') + s;
    }
    // Link into the test builder with only the question types of this page.
    practiceUrl(topics, tpls, n = 10) {
      const p = new URLSearchParams({topic: topics.join(','), tpl: tpls.join(','), n: String(n), mode: 'practice', lang: this.lang, go: '1'});
      return 'test.html#' + p.toString();
    }
  }

  class Quiz {
    // page: SimPage; box: element; gens: functions returning
    //   {q:{el,en}, o:[{el,en} ×3], a: index of the right option, x:{el,en}, apply?: () => void}
    // practice: {topics:[...], tpls:[...]}
    constructor(page, box, gens, practice) {
      this.page = page; this.box = box; this.gens = gens; this.practice = practice;
      this.cur = null; this.done = -1;
      page.onLang(() => this.render());
      box.addEventListener('click', e => this.click(e));
    }
    setGens(gens) { this.gens = gens; this.next(); }
    next() {
      let q;
      for (let k = 0; k < 20; k++) {                       // never show two identical options
        q = pick(this.gens)();
        if (new Set(q.o.map(o => o.en)).size === q.o.length) break;
      }
      const order = shuffle([0, 1, 2]);                      // options in a random order
      this.cur = {q: q.q, x: q.x, apply: q.apply, o: order.map(i => q.o[i]), a: order.indexOf(q.a)};
      this.done = -1; this.render();
    }
    L(o) { return o[this.page.lang] !== undefined ? o[this.page.lang] : o.en; }
    render() {
      const u = this.page.ui, c = this.cur;
      if (!c) { this.next(); return; }
      const opts = c.o.map((o, i) => {
        let cls = 'opt';
        if (this.done >= 0) { if (i === c.a) cls += ' right'; else if (i === this.done) cls += ' wrong'; }
        return `<button class="${cls}" type="button" data-i="${i}"${this.done >= 0 ? ' disabled' : ''}>${'ABC'[i]}) ${esc(this.L(o))}</button>`;
      }).join('');
      const ans = this.done >= 0
        ? `<div class="x"><b>${this.done === c.a ? u.right : u.wrong}</b> ${esc(this.L(c.x))}</div>` : '';
      const show = this.done >= 0 && c.apply ? `<button class="btn alt" type="button" data-act="show">${u.show}</button>` : '';
      const pr = this.practice ? `<a class="btn" href="${esc(this.page.practiceUrl(this.practice.topics, this.practice.tpls))}">${u.practice}</a>` : '';
      this.box.innerHTML = `<h2>${u.solve}</h2><p class="q">${esc(this.L(c.q))}</p><div class="opts">${opts}</div>${ans}` +
        `<div class="row"><button class="btn primary" type="button" data-act="next">${u.newq}</button>${show}${pr}</div>`;
    }
    click(e) {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.i !== undefined && this.done < 0) { this.done = +b.dataset.i; this.render(); }
      else if (b.dataset.act === 'next') this.next();
      else if (b.dataset.act === 'show' && this.cur.apply) { this.cur.apply(); window.scrollTo({top: 0, behavior: 'smooth'}); }
    }
  }

  // Convert a pointer event to SVG viewBox coordinates.
  function svgPoint(svg, ev) {
    const r = svg.getBoundingClientRect(), vb = svg.viewBox.baseVal;
    return {x: vb.x + (ev.clientX - r.left) / r.width * vb.width, y: vb.y + (ev.clientY - r.top) / r.height * vb.height};
  }

  // Dragging inside an SVG whose content is redrawn on every change: the listener sits on the
  // <svg> itself (which is never replaced). Elements with data-drag="key" can be grabbed;
  // onMove(key, point) gets viewBox coordinates.
  function dragOn(svg, onMove) {
    let key = null;
    svg.addEventListener('pointerdown', ev => {
      const t = ev.target.closest('[data-drag]'); if (!t) return;
      ev.preventDefault(); key = t.dataset.drag; svg.setPointerCapture(ev.pointerId);
    });
    svg.addEventListener('pointermove', ev => { if (key !== null) onMove(key, svgPoint(svg, ev)); });
    const up = () => { key = null; };
    svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', up);
  }

  window.Sim = {SimPage, Quiz, esc, rnd, pick, shuffle, svgPoint, dragOn};
})();
