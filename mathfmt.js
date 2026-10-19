// Turns the plain-text maths of the questions into readable maths (no library, works offline).
//   ^48_22 Ti -> nuclide with stacked mass and atomic number     v^2, 10^-3, x^{n+1} -> superscripts
//   v_0, H_2O, F_net, m_{total} -> subscripts                     sqrt(x) -> √(x)      <=  >=  !=  ->  +-  -> ≤ ≥ ≠ → ±
//   mu, theta, omega, Delta, pi ... -> μ θ ω Δ π ...              30 deg -> 30°
// mfmt(text) escapes the text first, so it is safe to put its result into innerHTML.
const GREEK = {mu: 'μ', theta: 'θ', omega: 'ω', alpha: 'α', beta: 'β', gamma: 'γ', lambda: 'λ', rho: 'ρ', tau: 'τ', sigma: 'σ', eta: 'η', pi: 'π',
               Delta: 'Δ', Omega: 'Ω', Sigma: 'Σ', phi: 'φ', epsilon: 'ε'};
function mfmt(text) {
  let s = String(text == null ? '' : text).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  s = s.replace(/\^\{?(\d{1,3})\}?_\{?(\d{1,3})\}?[ ]?([A-Z][a-z]?)(?![a-z])/g,
                (m, a, z, x) => `<span class="nuc"><span>${a}</span><span>${z}</span></span>${x}`);          // ^A_Z X
  s = s.replace(/\b(mu|theta|omega|alpha|beta|gamma|lambda|rho|tau|sigma|eta|pi|phi|epsilon|Delta|Omega|Sigma)(?=_|\^|\b)(?![a-z])/g, (m, g) => GREEK[g]);
  s = s.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>').replace(/\^(-?\d+(?:\.\d+)?|[A-Za-z]\b)/g, '<sup>$1</sup>');
  s = s.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>').replace(/([A-Za-z0-9Ͱ-Ͽ)])_(\d+|[A-Za-z]+)/g, '$1<sub>$2</sub>');
  s = s.replace(/sqrt\(/g, '√(').replace(/&lt;=/g, '≤').replace(/&gt;=/g, '≥').replace(/!=/g, '≠').replace(/-&gt;/g, '→').replace(/\+-/g, '±')
       .replace(/(\d)[ ]?deg\b/g, '$1°');
  return s;
}
try {
  const st = document.createElement('style');
  st.textContent = '.nuc{display:inline-flex;flex-direction:column;vertical-align:middle;font-size:.68em;line-height:1.05;margin-right:1px;text-align:right}' +
                   'sup,sub{font-size:.75em;line-height:0}';
  document.head.appendChild(st);
} catch (e) { /* not in a browser (tests) */ }
if (typeof module !== 'undefined') module.exports = mfmt;
