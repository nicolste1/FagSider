/* Hvilken versjon av fagstoffet siden bygger på. Vises i bunnteksten på alle sider.
   Genereres av tools/pdf_til_tekst.py hvis kilden er én PDF med innholdsfortegnelse;
   ellers fylles den inn for hånd. */
window.NOTATER_VERSJON = {
  "tekst": "",                       // valgfritt: hele bunntekst-linja, f.eks. "Bygger på slides fra forelesning 1–6 (høst 2026)". Overstyrer feltene under.
  "kilde_navn": "forelesningsnotatene", // brukes i "Bygger på <kilde_navn> datert <dato_norsk>"
  "pdf": "Beskriv kilden (f.eks. Slides forelesning 1–6)",
  "dato_i_pdf": "",
  "dato_norsk": "dd. måned åååå",
  "sider": 0,
  "ekstrahert": "åååå-mm-dd",
  "antall_oppgaver": 0
};
