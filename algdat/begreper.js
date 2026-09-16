/* ═══════════════════════════════════════════════════════════════════
   Begrepsordliste for TDT4120 Algoritmer og datastrukturer.
   Kun DATA: window.GLOSSARY. Popover-UI-en ligger i /glossary.js (felles for alle fag).

   Bruk i HTML:   <span class="term" data-term="nokkel">tekst</span>

   Felt per begrep:
     term  — visningsnavn (HTML tillatt, f.eks. <sub>)
     def   — forklaring (HTML tillatt, 1–3 setninger)
     more  — (valgfritt) lenke relativt til fagets rot, f.eks. "kap1/del-a.html#seksjon"
     alias — (valgfritt) alternative navn, vises i ordlista og søk

   Bruk én variabel per side slik at `more`-lenkene er lette å vedlikeholde.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var A = 'kap1/del-a.html';

  window.GLOSSARY = {
    'eksempelbegrep': {
      term: 'Eksempelbegrep',
      alias: 'alternativt navn',
      def: '<p>Én til tre setninger som forklarer begrepet slik kilden bruker det. Bytt ut dette og legg til ett objekt per fagbegrep.</p>',
      more: A + '#intro'
    },
    'kjoretid': {
      term: 'Kjøretid',
      alias: 'tidskompleksitet',
      def: '<p>Hvordan antall operasjoner en algoritme utfører vokser med størrelsen på inndata <em>n</em>, typisk oppgitt med O-notasjon.</p>',
      more: A + '#intro'
    }
  };
})();
