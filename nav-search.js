/* Søk i alle kapitler (Fuse.js). Indekserer <section id> på hver side i PAGES,
   pluss alle begreper i glossary.js. Krever at siden serveres over http
   (fetch fungerer ikke fra file://). */
(function () {
  'use strict';

  var PAGES = [
    'kap1/index.html',
    'kap1/logistisk-regresjon.html',
    'kap1/beslutningstraer.html'
  ];

  var PREFIX = /\/(kap\d+)\//i.test(window.location.pathname) ? '../' : '';
  var FUSE_SRC = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';

  var input = document.getElementById('nav-search');
  var results = document.getElementById('nav-search-results');
  if (!input || !results) return;

  var fuse = null, index = [], activeIdx = -1, debounceTimer = null;

  function loadFuse() {
    return new Promise(function (resolve, reject) {
      if (window.Fuse) return resolve(window.Fuse);
      var s = document.createElement('script');
      s.src = FUSE_SRC;
      s.onload = function () { resolve(window.Fuse); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function glossaryEntries() {
    var g = window.GLOSSARY || {};
    var out = [];
    Object.keys(g).forEach(function (key) {
      var e = g[key];
      var tmp = document.createElement('div');
      tmp.innerHTML = e.def;
      out.push({
        title: e.term.replace(/<[^>]+>/g, '') + (e.alias ? ' (' + e.alias + ')' : ''),
        chapter: 'Begrep',
        url: PREFIX + 'begreper.html#begrep-' + key,
        body: tmp.textContent.replace(/\s+/g, ' ').trim()
      });
    });
    return out;
  }

  function buildIndex() {
    return Promise.all(PAGES.map(function (page) {
      return fetch(PREFIX + page)
        .then(function (r) { return r.text(); })
        .then(function (html) {
          var doc = new DOMParser().parseFromString(html, 'text/html');
          var main = doc.querySelector('main');
          var chapter = (main && main.dataset && main.dataset.chapter) || '';
          var h1 = doc.querySelector('h1');
          var pageTitle = h1 ? h1.textContent.trim() : page;
          var entries = [];
          doc.querySelectorAll('section[id]').forEach(function (sec) {
            var h2 = sec.querySelector('h2');
            entries.push({
              title: (h2 && h2.textContent.trim()) || pageTitle,
              chapter: chapter,
              url: PREFIX + page + '#' + sec.id,
              body: sec.textContent.replace(/\s+/g, ' ').trim()
            });
          });
          return entries;
        })
        .catch(function () { return []; });
    })).then(function (lists) {
      lists.forEach(function (l) { index = index.concat(l); });
      index = index.concat(glossaryEntries());
      return index;
    });
  }

  function snippet(body, query) {
    var lower = body.toLowerCase(), q = query.toLowerCase();
    var pos = lower.indexOf(q);
    var start = pos < 0 ? 0 : Math.max(0, pos - 60);
    var end = Math.min(body.length, start + 160);
    var out = body.slice(start, end);
    if (start > 0) out = '…' + out;
    if (end < body.length) out = out + '…';
    return out;
  }

  function highlight(text, query) {
    var words = query.split(/\s+/).filter(function (w) { return w.length >= 2; });
    if (!words.length) return text;
    var escaped = words.map(function (w) { return w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|');
    return text.replace(new RegExp('(' + escaped + ')', 'gi'), '<mark>$1</mark>');
  }

  function render(hits, query) {
    if (!hits.length) {
      results.innerHTML = '<div class="nav-sr-empty">Ingen treff for «' + query + '»</div>';
      results.classList.add('open');
      return;
    }
    results.innerHTML = hits.slice(0, 8).map(function (h, i) {
      var item = h.item;
      return '<a class="nav-sr-item' + (i === activeIdx ? ' nav-sr-active' : '') + '" href="' + item.url + '" data-idx="' + i + '">' +
        '<div class="nav-sr-chapter">' + (item.chapter || '') + '</div>' +
        '<div class="nav-sr-title">' + highlight(item.title, query) + '</div>' +
        '<div class="nav-sr-body">' + highlight(snippet(item.body, query), query) + '</div>' +
        '</a>';
    }).join('');
    results.classList.add('open');
  }

  function search(q) {
    if (!fuse || q.length < 2) { results.classList.remove('open'); return; }
    activeIdx = -1;
    render(fuse.search(q), q);
  }

  function init() {
    input.placeholder = 'Laster…';
    input.disabled = true;
    loadFuse()
      .then(buildIndex)
      .then(function () {
        fuse = new window.Fuse(index, {
          keys: [
            { name: 'title', weight: 0.45 },
            { name: 'body', weight: 0.45 },
            { name: 'chapter', weight: 0.10 }
          ],
          threshold: 0.3, ignoreLocation: true, includeMatches: true, minMatchCharLength: 2
        });
        input.placeholder = 'Søk i notatene og begrepene…';
        input.disabled = false;
      })
      .catch(function () { input.placeholder = 'Søk utilgjengelig (krever http)'; });

    input.addEventListener('input', function (e) {
      clearTimeout(debounceTimer);
      var q = e.target.value.trim();
      debounceTimer = setTimeout(function () { search(q); }, 150);
    });

    input.addEventListener('keydown', function (e) {
      var items = results.querySelectorAll('.nav-sr-item');
      if (!items.length) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = (activeIdx + 1) % items.length; }
      else if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = (activeIdx - 1 + items.length) % items.length; }
      else if (e.key === 'Enter') { if (activeIdx >= 0) { e.preventDefault(); items[activeIdx].click(); } return; }
      else if (e.key === 'Escape') { results.classList.remove('open'); input.blur(); return; }
      else return;
      items.forEach(function (it, i) { it.classList.toggle('nav-sr-active', i === activeIdx); });
    });

    document.addEventListener('click', function (e) {
      if (!results.contains(e.target) && e.target !== input) results.classList.remove('open');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
