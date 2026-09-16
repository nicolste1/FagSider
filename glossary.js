/* ═══════════════════════════════════════════════════════════════════
   Popover-UI for klikkbare fagbegreper. FELLES for alle fag.

   Forventer at faget har lastet sin egen ordliste først:
     <script src="../fag.js"></script>        (eller "fag.js" fra fagets rot)
     <script src="../begreper.js"></script>   -> window.GLOSSARY = { nokkel: { term, def, more, alias } }
     <script src="../../glossary.js"></script> (denne fila)

   Markup:  <span class="term" data-term="nokkel">tekst</span>
   Klikk (eller Enter/mellomrom) åpner en popover med forklaring og
   «Les mer»-lenke. `more` er relativ til fagets rot; prefikset regnes ut
   fra om siden ligger i en kapittelmappe (/kapN/) eller i fagets rot.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var PREFIX = /\/(kap\d+)\//i.test(window.location.pathname) ? '../' : '';
  var pop = null;
  var current = null;

  function ensurePop() {
    if (pop) return pop;
    pop = document.createElement('div');
    pop.className = 'term-pop';
    pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-live', 'polite');
    document.body.appendChild(pop);
    return pop;
  }

  function closePop() {
    if (!pop) return;
    pop.classList.remove('open');
    if (current) { current.classList.remove('open'); current.setAttribute('aria-expanded', 'false'); }
    current = null;
  }

  function openPop(el) {
    var key = el.dataset.term;
    var entry = (window.GLOSSARY || {})[key];
    var p = ensurePop();
    if (!entry) {
      p.innerHTML = '<div class="tp-kicker">Begrep</div><div class="tp-title">' + el.textContent + '</div><div class="tp-body"><p><em>Mangler forklaring for «' + key + '» i begreper.js.</em></p></div>';
    } else {
      var more = entry.more
        ? '<a class="tp-more" href="' + PREFIX + entry.more + '">Les mer på siden →</a>'
        : '<a class="tp-more" href="' + PREFIX + 'begreper.html#begrep-' + key + '">I begrepslista →</a>';
      p.innerHTML =
        '<div class="tp-kicker">Begrep</div>' +
        '<div class="tp-title">' + entry.term + '</div>' +
        '<div class="tp-body">' + entry.def + '</div>' +
        '<div class="tp-foot">' + more + '<button class="tp-close" type="button">Lukk</button></div>';
      p.querySelector('.tp-close').addEventListener('click', closePop);
    }

    if (current && current !== el) { current.classList.remove('open'); current.setAttribute('aria-expanded', 'false'); }
    current = el;
    el.classList.add('open');
    el.setAttribute('aria-expanded', 'true');

    p.classList.add('open');
    position(el, p);
  }

  function position(el, p) {
    if (window.innerWidth <= 720) return; // CSS håndterer bunn-ark på mobil
    var r = el.getBoundingClientRect();
    var pw = p.offsetWidth, ph = p.offsetHeight;
    var left = r.left + window.scrollX;
    var maxLeft = window.scrollX + document.documentElement.clientWidth - pw - 12;
    if (left > maxLeft) left = maxLeft;
    if (left < window.scrollX + 12) left = window.scrollX + 12;
    var top = r.bottom + window.scrollY + 8;
    var spaceBelow = window.innerHeight - r.bottom;
    if (spaceBelow < ph + 16 && r.top > ph + 16) top = r.top + window.scrollY - ph - 8;
    p.style.left = left + 'px';
    p.style.top = top + 'px';
  }

  function init() {
    var G = window.GLOSSARY || {};
    document.querySelectorAll('.term[data-term]').forEach(function (el) {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-haspopup', 'dialog');
      el.setAttribute('aria-expanded', 'false');
      var entry = G[el.dataset.term];
      if (entry) el.setAttribute('title', 'Klikk for forklaring: ' + entry.term.replace(/<[^>]+>/g, ''));
      el.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (current === el) closePop(); else openPop(el);
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (current === el) closePop(); else openPop(el); }
      });
    });

    document.addEventListener('click', function (e) {
      if (!pop || !pop.classList.contains('open')) return;
      if (pop.contains(e.target)) return;
      closePop();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePop(); });
    window.addEventListener('resize', function () { if (current && pop) position(current, pop); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
