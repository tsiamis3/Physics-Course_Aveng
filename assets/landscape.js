/* Phones: a floating button that shows the page full screen in landscape, so the
   diagrams get the whole width of the phone. Works on Android Chrome (full screen +
   orientation lock). Where full screen is not available (iPhone) the button just
   asks the user to turn the phone. Shown only on narrow touch screens in portrait. */
(function () {
  'use strict';
  const TXT = {
    el: {go: '⟲ Οριζόντια', exit: '✕ Κλείσιμο', turn: 'Γύρισε το κινητό οριζόντια για μεγαλύτερα διαγράμματα.'},
    en: {go: '⟲ Landscape', exit: '✕ Close', turn: 'Turn your phone sideways for bigger diagrams.'}
  };
  const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'el');
  const phone = window.matchMedia('(pointer: coarse) and (max-width: 700px)');
  const portrait = window.matchMedia('(orientation: portrait)');
  const canFull = !!(document.documentElement.requestFullscreen && document.fullscreenEnabled);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.style.cssText = 'position:fixed;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:50;' +
    'padding:10px 14px;min-height:44px;border:1px solid #d9a521;background:#14120f;color:#e8e2d0;' +
    'font:700 14px "Rajdhani","Barlow Condensed",sans-serif;letter-spacing:.06em;text-transform:uppercase;' +
    'box-shadow:0 4px 18px rgba(0,0,0,.6);cursor:pointer;clip-path:none';

  const tip = document.createElement('div');
  tip.style.cssText = 'position:fixed;left:12px;right:12px;bottom:calc(64px + env(safe-area-inset-bottom,0px));z-index:50;' +
    'padding:10px 12px;background:#14120f;border:1px solid #4a3f26;color:#e8e2d0;font:14px sans-serif;display:none';

  const full = () => !!document.fullscreenElement;
  function update() {
    const t = TXT[lang()];
    btn.textContent = full() ? t.exit : t.go;
    btn.style.display = full() || (phone.matches && portrait.matches) ? 'block' : 'none';   // the close button must stay in landscape
    tip.textContent = t.turn;
  }
  btn.addEventListener('click', async () => {
    if (full()) {
      try { screen.orientation && screen.orientation.unlock && screen.orientation.unlock(); } catch (e) { /* not supported */ }
      try { await document.exitFullscreen(); } catch (e) { /* already closed */ }
      return;
    }
    if (!canFull) { tip.style.display = 'block'; setTimeout(() => { tip.style.display = 'none'; }, 4000); return; }
    try {
      await document.documentElement.requestFullscreen({navigationUI: 'hide'});
      if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape');
    } catch (e) {
      tip.style.display = 'block'; setTimeout(() => { tip.style.display = 'none'; }, 4000);
    }
  });
  document.addEventListener('fullscreenchange', update);
  phone.addEventListener && phone.addEventListener('change', update);
  portrait.addEventListener && portrait.addEventListener('change', update);
  new MutationObserver(update).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});

  function mount() { document.body.appendChild(tip); document.body.appendChild(btn); update(); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
