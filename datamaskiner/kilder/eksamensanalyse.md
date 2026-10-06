# Eksamensanalyse — TDT4160 Datamaskiner

**Godkjent av brukeren 2. oktober 2026.** Bygger på ett fullt eksamenssett (Ord. 2025, `eksamen.pdf`,
en tidligere students besvarelse, ikke løsningsforslag) og læringsutbyttebeskrivelsens egen liste over relevante eksamensoppgaver
per deltema (26. august 2026), som dekker settene Ord. 21 til Kont 26. Brukeren bekrefter at strukturen holder seg lik fra år til år.
Den maskinlesbare varianten ligger i `eksamen.json`.

## Status

- [x] Eksamenssett samlet: Ord. 2025 (fullt, med studentsvar). Øvrige sett bare som oppgavenumre i læringsutbyttebeskrivelsen.
- [x] `eksamen.json` fylt ut for alle deltema T1–T7
- [x] Gjennomgått med brukeren
- [x] Godkjent av brukeren: 2. oktober 2026 (hjelpemidler fortsatt ubekreftet)

## Eksamensform (fra Ord. 2025)

| | |
|---|---|
| Form | Digital skriftlig eksamen i Inspera, 11. desember 2025 kl. 15–19 (4 timer) |
| Poeng | 100, åtte deler |
| Hjelpemidler | Ikke oppgitt i settet. Antatt ingen hjelpemidler ut over enkel kalkulator (må bekreftes) |
| Oppgavetyper | «Fyll inn tekst/tall» (autorettet, 0,5–1 p per felt, i prosessordelene −0,25 p for feil svar, 0 for ubesvart) parvis med «Langsvar» (4–6 p, «Forklar hvordan du kom frem til …»). Figurer fra boka er gjengitt i oppgaven; studenten skal lese dem og forklare. |

Det viktigste mønsteret: **hver regnedel følges av en forklaringsdel om det samme svaret.** Å kunne tallet er halve poengsummen,
å kunne begrunne det signal for signal, bit for bit, er resten. «Don't care» (X) skal brukes der signalet ikke betyr noe, og det
telles. Sidene må derfor øve begge deler: fyll-inn-oppgaver med fasit, og en modellforklaring som kan gjengis på eksamen.

## Strukturen i Ord. 2025 (100 p)

| Del | Tittel | Deltema | Poeng | Form |
|---|---|---|---|---|
| 1 | Instruksjonssett | 2.1 (+2.2) | 16 | Maskinkode felt for felt for slt, andi (imm 0x7fb), sw (imm −16). Opcode/funct-tabell vedlagt. |
| 2 | Enkeltsykelprosessor | 3.1 | 16 | Figur 4.17 vedlagt. 2.1/2.3: seks kontrollsignaler for slt og sb (3 p hver). 2.2/2.4: forklar hvorfor (5 p hver). |
| 3 | Aritmetisk-logisk enhet | 3.3 | 7 | Figur A.5.12 + 1-bit ALU vedlagt. 3.1: Bnegate/Ainvert/Operation for a − b (3 p). 3.2: forklar (4 p). |
| 4 | Multiplikator | 3.3 | 8 | Figur 3.3 (første versjon, 8-bit produkt, 4-bit multiplikator). 4.1: Product etter hver av fire iterasjoner for 1010 × 1001 (4 p). 4.2: forklar (4 p). |
| 5 | Flyttall | 3.3 | 8 | IEEE 754 enkel presisjon, formel vedlagt. 5.1: 0x40980000 som desimaltall (2 p). 5.2: forklar (6 p). |
| 6 | Samlebånd | 5.1 | 16 | Figur 4.43 vedlagt med fire instruksjoner (sw, lw, addi, beq) plassert i stegene. 6.1: ti kontrollsignaler i ID/EX, EX/MEM, MEM/WB (5 p). 6.2: forklar alle unntatt ALUOp (6 p). 6.3: videresendingsfigur (4.60) med add-kjede, «hvordan sørger prosessoren for at I3 utføres korrekt» (5 p). |
| 7 | Hurtigbuffer og virtuelt minne | 6.1, 6.3 | 19 | 7.1: bitposisjoner for offset/indeks/tag, 2-veis, 256 KiB, 128 B blokker (3 p). 7.2: forklar (6 p). 7.3: gjennomsnittlig aksesstid, L1 3 sykler/15 % bom, L2 10/30 %, minne 75 (2 p). 7.4: forklar (4 p). 7.5: hva TLB gjør og hvorfor (4 p). |
| 8 | Prosessorer med høyere ytelse og parallelle datamaskiner | 5.3, 7.1 | 10 | 8.1: register renaming, hva og hvorfor (4 p). 8.2: SISD mot SIMD, én fordel og én utfordring (6 p). |

Ikke med i Ord. 2025: T1 (ytelse, Amdahl), T2.3–2.4 (prosedyrer, adressering), T3.2 (porter), T4 (flersykel, sekvensiell logikk),
T5.2 (unntak), T6.2 (minneteknologi), T7.2–7.3. Flere av disse kommer i andre sett (se tabellen under).

## Analyse per deltema

Prio: 1 = kommer nesten alltid (egen del i settet), 2 = ofte (egen del i noen sett, eller del av en større oppgave), 3 = sjelden.
Forekomster er læringsutbyttebeskrivelsens liste pluss Ord. 25 lest i sin helhet. «Ord. 26» i beskrivelsen er lest som Ord. 25
(skrivefeil: oppgavenumrene stemmer med Ord. 25).

| Deltema | Prio | Type | Forekomster (sett · oppgave · poeng) | Typisk formulering |
|---|---|---|---|---|
| 1.1 Datamaskintyper og de 7 store ideene | 3 | forklar | ingen («kan dekkes av korte faktaspørsmål») | Nevn/forklar en idé |
| 1.2 Under overflaten | 3 | forklar | ingen | Fem komponenter, lagret program |
| 1.3 Ytelse | 2 | regn | Kont 26 · 5.5; Ord. 24 · 5.4 | Iron Law: sammenlikn to maskiner, finn CPI/klokke |
| 1.4 Parallelle datamaskiner (Amdahl) | 2 | regn | Kont 25 · 5.1 (under T7.1) | Speedup med parallell andel P og N kjerner |
| 2.1 Instruksjoner | 1 | regn, forklar | Ord. 25 · 1 · 16 p; Kont 26 · 1; Kont 25 · 1; Ord. 24 · 1; Kont 24 · 1; Ord. 22 · 11 | Assembly → maskinkode felt for felt (R, I, S), opcode-tabell vedlagt |
| 2.2 Heltall og logiske operasjoner | 2 | regn | Ord. 25 · 1 (immediate i tokomplement); Kont 26 · 1 | 12-bits immediate for negativt tall, hex ↔ binært |
| 2.3 Funksjonskall | 3 | kode | ingen | — |
| 2.4 Instruksjoner, diverse | 3 | forklar | ingen | — |
| 3.1 Enkeltsykelprosessor | 1 | regn, forklar, tegn | Ord. 25 · 2 · 16 p; Kont 26 · 2; Kont 25 · 2; Ord. 24 · 2; Ord. 23 · 5; Kont 23 · 3 | Kontrollord (RegWrite, ALUSrc, PCSrc, MemWrite, MemRead, MemtoReg) for en gitt instruksjon, med X; forklar hvert signal mot figur 4.17. Også omvendt: instruksjonstype fra kontrollord |
| 3.2 Kombinatorisk logikk | 2 | regn, tegn | Kont 24 · 2; Ord. 23 · 3; Kont 23 · 2; Ord. 22 · 4, 5; Kont 22 · 3 (ikke siden Kont 24) | Sannhetstabell ↔ sum-av-produkt, tegn porter, mux/dekoder |
| 3.3 ALU, multiplikasjon, flyttall | 1 | regn, forklar | Ord. 25 · 3, 4, 5 · 23 p; Kont 26 · 3; Ord. 22 · 6, 7 | ALU-signaler (Ainvert, Bnegate, Operation) for en operasjon; multiplikator-registre per iterasjon; IEEE 754 ↔ desimalt |
| 4.1 Flersykelprosessor | 2 | forklar, tegn | Kont 26 · 4; Ord. 24 · 3 | Figur e.4.5.4, tilstandsmaskin, fordeler mot enkeltsykel |
| 4.2 Sekvensiell logikk | 3 | forklar, tegn | Ord. 23 · 2; Ord. 22 · 2, 3; Kont 22 · 2 (ikke siden 2023) | Lås/vippe, register, tilstandsmaskin i maskinvare |
| 5.1 Samlebånd med 5 steg | 1 | regn, forklar | Ord. 25 · 6 · 16 p; Kont 26 · 5; Kont 25 · 3; Ord. 24 · 4; Kont 24 · 3; Ord. 23 · 4; Kont 23 · 4; Ord. 22 · 10; Kont 22 · 10 | Kontrollsignaler i samlebåndsregistrene for et gitt program i en gitt sykel; videresending/stans for en add-/lw-kjede; forklar mot figur 4.43 og 4.60 |
| 5.2 Unntak og avbrudd | 3 | forklar | Ord. 22 · 10 (litt) | Presise unntak |
| 5.3 Prosessorer med høyere ytelse | 2 | forklar | Ord. 25 · 8.1 · 4 p | Register renaming, WAW/WAR, out-of-order, spekulasjon |
| 6.1 Minnehierarki og hurtigbuffer | 1 | regn, forklar | Ord. 25 · 7.1–7.4 · 15 p; Kont 26 · 6; Kont 25 · 4; Ord. 24 · 5; Kont 24 · 4; Ord. 23 · 6; Ord. 22 · 8; Kont 22 · 4; Ord. 21 · 2, 3, 6 | Adresseformat (offset/indeks/tag) for gitt kapasitet, blokkstørrelse og assosiativitet; gjennomsnittlig aksesstid i flernivå; forklar |
| 6.2 Minneteknologier | 3 | forklar | ingen | SRAM/DRAM-celle, flyktig/ikke-flyktig |
| 6.3 Virtuelt minne | 2 | forklar | Ord. 25 · 7.5 · 4 p; Ord. 24 · 5.5; Kont 23 · 5, 6; Ord. 21 · 4 | TLB: hva og hvorfor; adresseoversettelse; sidefeil; beskyttelse |
| 7.1 Ytelse og Flynns taksonomi | 2 | forklar, regn | Ord. 25 · 8.2 · 6 p; Kont 25 · 5.1 | SISD mot SIMD med fordel/utfordring; Amdahl og skalering |
| 7.2 Multiprosessorer | 3 | forklar | Kont 25 · 5.2 | Delt mot distribuert minne, koherens |
| 7.3 Akseleratorer | 3 | forklar | Kont 25 · 5.3, 5.4; Kont 24 · 5 | GPU mot CPU, heterogen maskin |

Poengsum i Ord. 25 per prio: prio 1 = 86 p (2.1, 3.1, 3.3, 5.1, 6.1), prio 2 = 14 p (5.3, 6.3, 7.1), prio 3 = 0 p.

## Konsekvenser for sidene

1. **Prosessorfigurene er kjernen.** Eksamen gjengir bokas figurer (4.17 enkeltsykel med kontroll, A.5.12 + 1-bit ALU, 3.3
   multiplikator, 4.43 samlebånd med kontroll, 4.60 videresending) og ber om signalverdier og forklaring. Sidene for T3 og T5
   skal tegne disse som SVG, og ha en widget der leseren velger instruksjon og ser signalverdiene og den aktive stien lyse opp.
   Det samme for ALU-en (velg operasjon → Ainvert/Bnegate/Operation) og multiplikatoren (steg for steg).
2. **Fyll inn + forklar som fast oppgaveform.** Hver prio 1-side får minst to par av typen «angi verdiene» + «forklar hvorfor»,
   med en modellforklaring (signal for signal) som svar.
3. **Kontrollord-tabellen (figur 4.22) og ALU-kontrolltabellen (figur 4.12/4.13) skal kunne utenat**, med «don't care».
4. **T6.1 får to faste regnetyper**: adresseformat (offset = log2 blokkstørrelse, indeks = log2 antall sett, tag = resten) og
   gjennomsnittlig aksesstid i flere nivåer (AMAT = treff + bomrate × bomstraff, nøstet).
5. Kapittel 1 (T1) nedprioriteres til prio 2 for ytelse/Amdahl og prio 3 for resten; sidene finnes allerede og beholdes,
   men Eksamensfokus merker dem riktig. T2.3–2.4 (prosedyrer) merkes prio 3 av samme grunn.
6. Rekkefølgen T3 → T5 → T6 bør skrives først av de gjenstående kapitlene; T4 og T7 til slutt.

## Tidligere eksamensoppgaver som skal inn som `.oppgave`-bokser

Svarene i Ord. 25 er en students, ikke fasit. De er kontrollert mot boka under, og brukes med `answer forslag` og kilde
«Svar kontrollert mot boka · ikke offisielt løsningsforslag».

| Sett · oppgave | Deltema | Side · anker | Kontroll av studentsvaret | Status |
|---|---|---|---|---|
| Ord. 25 · 1 (slt, andi, sw) | 2.1 | kap2/instruksjoner.html#formater | Alle felt riktige (slt 0110011/01111/10100/01010/010/0000000; andi imm 0111 1111 1011; sw imm 1111 1111 0000) | lagt inn |
| Ord. 25 · 2.1–2.4 (slt, sb) | 3.1 | kap3/enkeltsykel.html#kontroll | Riktig (slt: 1,0,0,0,0,0; sb: 0,1,0,1,0,X), stemmer med figur 4.22 | lagt inn |
| Ord. 25 · 3.1–3.2 (a − b) | 3.3 | kap3/alu.html | Riktig (Bnegate 1, Ainvert 0, Operation 10), figur A.5.13 | lagt inn |
| Ord. 25 · 4.1–4.2 (1010 × 1001) | 3.3 | kap3/alu.html | Riktig (0000 1010, 0000 1010, 0000 1010, 0101 1010 = 90) | lagt inn |
| Ord. 25 · 5.1–5.2 (0x40980000) | 3.3 | kap3/alu.html | Riktig (4,75) | lagt inn |
| Ord. 25 · 6.1–6.2 (sw/lw/addi/beq) | 5.1 | kap5/samleband.html#kontroll | Riktig (ID/EX 1,0,0,1; EX/MEM 0,1,1,1; MEM/WB 0,X) | lagt inn |
| Ord. 25 · 6.3 (add-kjede, videresending) | 5.1 | kap5/samleband.html#videresending | Riktig prinsipp; studenten bytter om kodene (boka: ForwardB = 10 fra EX/MEM, ForwardA = 01 fra MEM/WB) | lagt inn |
| Ord. 25 · 7.1–7.2 (adresseformat) | 6.1 | kap6/hurtigbuffer.html | Riktig (offset 0–6, indeks 7–16, tag 17–31) | side mangler |
| Ord. 25 · 7.3–7.4 (aksesstid) | 6.1 | kap6/hurtigbuffer.html | Riktig (3 + 0,15 × (10 + 0,3 × 75) = 7,875) | side mangler |
| Ord. 25 · 7.5 (TLB) | 6.3 | kap6/virtuelt-minne.html | Rimelig, men lang; modellsvar skrives fra boka 5.7 | side mangler |
| Ord. 25 · 8.1 (register renaming) | 5.3 | kap5/unntak-ytelse.html#renaming | Rimelig; modellsvar fra boka 4.11 | lagt inn |
| Ord. 25 · 8.2 (SISD/SIMD) | 7.1 | kap7/flynn.html | Rimelig; modellsvar fra boka 6.3 | side mangler |
| Ord. 24 · 5.4, Kont 26 · 5.5 (ytelse) | 1.3 | kap1/ytelse.html#ytelseslikningen | tekst ikke i repoet | mangler tekst |

Kapittel 3 (2. oktober 2026) og kapittel 5 (5. oktober 2026) er laget. Sidenavnene for kap4, kap6 og kap7 er forslag.

## Hva som bevisst nedprioriteres

Fra kapittel 1 (kuttet 22. september 2026): Intel-historikk og figur 1.16-tabellen, fly-tabellen, SPEC-tabellen og SPECpower,
iPhone-eksempler, LCD og nettverk, figur 1.10 (ytelse per kostnad), DRAM-prisutvikling, «kostnad er ikke pris»,
selvstudiene om DRAM-pris og «Amdahl og brorskap», Check Yourself om prosessorer hjemme og om volum.

For T3–T7 (forslag): bokas Verilog-seksjoner (4.13, A.4), flyttallsaritmetikk i detalj ut over konvertering (3.5 addisjon og
multiplikasjon forklares i prinsipp, ikke regnes), divisjonsalgoritmen (nevnes, ikke regnes), x86-sammenlikninger (3.7, 4.12),
Intel Core i7-eksemplene, RAID, Roofline i detalj (prinsippet med én figur holder), nettverkstopologier (6.9), virtuelle maskiner
ut over definisjonen.
