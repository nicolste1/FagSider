# Kilder for TDT4160 Datamaskiner

Sidene bygger på tre kilder, i denne prioriteringen:

1. **Læringsutbyttebeskrivelsene** (`laeringsutbyttebeskrivelser-tdt4160.pdf`, «Sist oppdatert 26/8-26», fra emnesiden).
   Rettesnoren for hva som skal dekkes. Den deler faget i temaene T1–T7, og sier for hvert deltema hvilke forelesninger,
   bokkapitler og **bokoppgaver** som er relevante. Kapitlene på siden følger T1–T7 (kap 1 = T1, kap 2 = T2, …).
   Alle bokoppgavene som beskrivelsen lister som relevante er tatt med som «Se svar»-bokser.

2. **Kompendiet** (`Kompendium.md`), Markus Selander, *Kompendium for TDT4160: Datamaskiner*,
   <https://github.com/MarkusSelander/TDT4160-Datamaskiner-Kompendium> (commit `ac001b1f`, 21. juli 2025).
   Norsk sammendrag med eksempler. Alle eksemplene og oppgavene i kompendiet er tatt med som «Se svar»-bokser.
   Kompendiets nummerering (kapittel 1–6 + Appendix A) er en annen enn temaene T1–T7; `notater.md` sier hvilke
   kompendium-avsnitt hvert tema bruker.

3. **Boka** (COMPUT1 / «TDT4160 pensum.pdf»): Patterson & Hennessy, *Computer Organization and Design, RISC-V Edition:
   The Hardware/Software Interface*, 2. utgave, Morgan Kaufmann 2020. Boka ligger **ikke** i repoet (opphavsrett);
   brukeren har den lokalt. Sidetall på sidene («Boka · kap. 1.6 · s. 29–39») er bokas trykte sidetall.
   PDF-side = trykt side + 22 for kapittel 1.

## Hva som er oversatt hvordan

Boka er på engelsk. Sidene bruker norske fagord der læringsutbyttebeskrivelsen eller kompendiet har dem
(kjøretid, gjennomstrømning, hurtigbuffer, samlebånd, datasti, kontrollenhet, utbytte …) og oppgir det engelske
ordet i parentes eller i begrepslista første gang. Formler er gjengitt i KaTeX. Bokas figurer er tegnet på nytt som SVG
eller beskrevet i tekst, ikke kopiert.

## Oppdatering

Kildene har ikke nummererte avsnitt som `tools/sjekk_oppdatering.py` kan diffe, så `notater.md` er skrevet for hånd med
én `## <nummer>`-overskrift per deltema i læringsutbyttebeskrivelsen. Kommer det en ny versjon av
læringsutbyttebeskrivelsen: sammenlikn den mot `notater.md` tema for tema, og oppdater sidene som `dekning.json` peker på.
Kommer det en ny versjon av kompendiet: `git pull` i klonen og diff `Kompendium.md`.
