/* Felles småting for alle sider:
   1) Fyller inn hvilken versjon av notatene siden bygger på (fra kilder/versjon.js).
   2) Små SVG-plottehjelpere som widgetene på kapittelsidene bruker.
   3) Starter KaTeX auto-render hvis KaTeX er lastet. */
(function () {
  'use strict';

  /* ── 1. Notat-versjon i bunntekst ── */
  function fillVersion() {
    var v = window.NOTATER_VERSJON;
    document.querySelectorAll('[data-notater-versjon]').forEach(function (el) {
      if (!v) { el.textContent = ''; return; }
      if (v.tekst) { el.textContent = v.tekst; return; }   // fag uten PDF-kilde setter hele teksten selv
      el.textContent = 'Bygger på ' + (v.kilde_navn || 'forelesningsnotatene') + ' datert ' + v.dato_norsk +
        (v.sider ? ' (' + v.sider + ' sider)' : '') +
        (v.ekstrahert ? ' · tekst hentet ut ' + v.ekstrahert : '');
    });
  }

  /* ── 2. Plottehjelpere ── */
  var NS = 'http://www.w3.org/2000/svg';

  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  /* Lager et koordinatsystem inni et <svg>. Returnerer funksjoner for å tegne.
     opts: { x: [min,max], y: [min,max], pad: {l,r,t,b}, xLabel, yLabel, xTicks, yTicks, grid } */
  function makePlot(svg, opts) {
    var W = parseFloat(svg.getAttribute('data-w') || svg.viewBox.baseVal.width || 560);
    var H = parseFloat(svg.getAttribute('data-h') || svg.viewBox.baseVal.height || 260);
    svg.classList.add('mlplot');
    var pad = Object.assign({ l: 44, r: 16, t: 14, b: 34 }, opts.pad || {});
    var x0 = opts.x[0], x1 = opts.x[1], y0 = opts.y[0], y1 = opts.y[1];
    var sx = function (x) { return pad.l + (x - x0) / (x1 - x0) * (W - pad.l - pad.r); };
    var sy = function (y) { return H - pad.b - (y - y0) / (y1 - y0) * (H - pad.t - pad.b); };

    var layers = { grid: el('g', {}, svg), axes: el('g', {}, svg), data: el('g', {}, svg), overlay: el('g', {}, svg) };

    function ticks(range, n) {
      var out = [], step = (range[1] - range[0]) / n;
      for (var i = 0; i <= n; i++) out.push(range[0] + i * step);
      return out;
    }
    var xt = opts.xTicks || ticks(opts.x, 4);
    var yt = opts.yTicks || ticks(opts.y, 4);
    var fmt = function (v) { return (Math.round(v * 100) / 100).toString(); };

    xt.forEach(function (x) {
      if (opts.grid !== false) el('line', { x1: sx(x), x2: sx(x), y1: sy(y0), y2: sy(y1), 'class': 'grid' }, layers.grid);
      var t = el('text', { x: sx(x), y: H - pad.b + 16, 'text-anchor': 'middle' }, layers.axes);
      t.textContent = fmt(x);
    });
    yt.forEach(function (y) {
      if (opts.grid !== false) el('line', { x1: sx(x0), x2: sx(x1), y1: sy(y), y2: sy(y), 'class': 'grid' }, layers.grid);
      var t = el('text', { x: pad.l - 8, y: sy(y) + 4, 'text-anchor': 'end' }, layers.axes);
      t.textContent = fmt(y);
    });
    el('line', { x1: sx(x0), x2: sx(x1), y1: sy(y0), y2: sy(y0), 'class': 'axis' }, layers.axes);
    el('line', { x1: sx(x0), x2: sx(x0), y1: sy(y0), y2: sy(y1), 'class': 'axis' }, layers.axes);
    if (opts.xLabel) { var xl = el('text', { x: sx(x1), y: H - 4, 'text-anchor': 'end', 'class': 'lbl' }, layers.axes); xl.textContent = opts.xLabel; }
    if (opts.yLabel) { var yl = el('text', { x: pad.l + 4, y: pad.t + 10, 'class': 'lbl' }, layers.axes); yl.textContent = opts.yLabel; }

    function pathFrom(points) {
      var d = '';
      points.forEach(function (p, i) {
        if (p[1] === null || !isFinite(p[1])) { return; }
        var yy = Math.max(y0 - (y1 - y0) * 0.3, Math.min(y1 + (y1 - y0) * 0.3, p[1]));
        d += (d === '' || points[i - 1] === undefined || points[i - 1][1] === null ? 'M' : 'L') + sx(p[0]).toFixed(1) + ' ' + sy(yy).toFixed(1) + ' ';
      });
      return d;
    }

    return {
      sx: sx, sy: sy, W: W, H: H, layers: layers,
      curve: function (fn, cls, n) {
        n = n || 160;
        var pts = [];
        for (var i = 0; i <= n; i++) { var x = x0 + (x1 - x0) * i / n; pts.push([x, fn(x)]); }
        return el('path', { d: pathFrom(pts), 'class': cls || 'curve' }, layers.data);
      },
      polyline: function (pts, cls) { return el('path', { d: pathFrom(pts), 'class': cls || 'curve' }, layers.data); },
      point: function (x, y, cls, r) { return el('circle', { cx: sx(x), cy: sy(y), r: r || 5, 'class': cls || 'marker' }, layers.overlay); },
      vline: function (x, cls) { return el('line', { x1: sx(x), x2: sx(x), y1: sy(y0), y2: sy(y1), 'class': cls || 'guide' }, layers.overlay); },
      hline: function (y, cls) { return el('line', { x1: sx(x0), x2: sx(x1), y1: sy(y), y2: sy(y), 'class': cls || 'guide' }, layers.overlay); },
      label: function (x, y, text, anchor, cls) { var t = el('text', { x: sx(x), y: sy(y), 'text-anchor': anchor || 'start', 'class': cls || 'lbl' }, layers.overlay); t.textContent = text; return t; },
      clearOverlay: function () { while (layers.overlay.firstChild) layers.overlay.removeChild(layers.overlay.firstChild); },
      clearData: function () { while (layers.data.firstChild) layers.data.removeChild(layers.data.firstChild); },
      el: el
    };
  }

  window.MLPlot = { make: makePlot, el: el };
  window.fmtNum = function (v, d) { return (Math.round(v * Math.pow(10, d == null ? 3 : d)) / Math.pow(10, d == null ? 3 : d)).toString(); };

  /* ── 3. KaTeX ── */
  function renderMath() {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false,
      ignoredClasses: ['term-pop', 'nav-sr-item']
    });
  }

  function init() { fillVersion(); renderMath(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
