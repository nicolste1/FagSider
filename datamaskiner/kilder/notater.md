# Notater — TDT4160 Datamaskiner

Tekstuttrekk per deltema, skrevet for hånd (se `KILDER.md`). Nummereringen følger temaene i læringsutbyttebeskrivelsen
(T1 → 1, T1.1 → 1.1, …) og skal holdes stabil. Under hver overskrift: læringsutbyttene ordrett, hvilke kilder som dekker
temaet, og hovedinnholdet fra kompendiet og boka i kortform. Oppgavelista er de bokoppgavene læringsutbyttebeskrivelsen
lister som relevante, pluss eksempler og oppgaver fra kompendiet og bokas egne «Example», «Check Yourself» og «Self-Study».

## 1 T1 Introduksjon og ytelse

Læringsutbytter: K1, G1. Undervisning: forelesning 1 og 2, teoriøving 1. Boka kapittel 1. Kompendiet kapittel 1.

## 1.1 T1.1 Datamaskintyper og de 7 store ideene

Læringsutbytte:
- Studenten kjenner til de 7 datamaskintypene og deres viktigste egenskaper.
- Studenten kjenner til de 7 store ideene i datamaskinarkitektur.
- Studenten kan beskrive størrelser med rett prefiks (for eksempel GB og GiB).

Kilder: forelesning 1; boka 1.1 og 1.2 (s. 3–12); kompendiet «Hva er datamaskinarkitektur?», «De syv store ideene»,
«Datamaskintyper og bruksområder». Bokoppgaver: 1.1, 1.2. Boka: Check Yourself §1.1 (s. 10), Self-Study «Mapping great ideas».

Innhold: Klasser av datamaskiner i boka: personlig datamaskin (PC), server, superdatamaskin, innebygd datamaskin (embedded,
IoT), personlig mobil enhet (PMD), skytjenester / Warehouse Scale Computers (WSC), SaaS. Kompendiet lister PC, server,
superdatamaskin, innebygd system. Figur 1.1: desimale (KB = 10^3) og binære (KiB = 2^10) prefikser, avvik 2 % (kilo) til
27 % (quecca). De syv store ideene i boka: abstraksjon, gjør det vanlige tilfellet raskt, ytelse via parallellitet, ytelse via
samlebånd (pipelining), ytelse via prediksjon, minnehierarki, pålitelighet via redundans. «Designing for Moore's law» var
åttende idé i forrige utgave, tatt ut fordi Moores lov ikke lenger holder. Kompendiets liste avviker (har «den lagrede
programmetoden», mangler prediksjon).

## 1.2 T1.2 Under overflaten

Læringsutbytte:
- Studenten kjenner rollen til applikasjonsprogramvare og systemprogramvare, herunder operativsystemet og kompilatoren.
- Studenten kan beskrive de fem hovedkomponentene i en datamaskin.
- Studenten kan forklare prinsippet om lagrede program.
- Studenten kan gjengi produksjonsprosessen for integrerte kretser.

Kilder: forelesning 1; boka 1.3–1.5 (s. 13–28); kompendiet «Nøkkelkomponenter i datamaskinarkitektur» og
«Den lagrede programmetoden». Bokoppgaver: 1.3, 1.11. Boka: Check Yourself §1.4 (s. 24) og §1.5 (s. 28), Self-Study
«DRAM price versus cost».

Innhold: Figur 1.3 lag: applikasjonsprogramvare → systemprogramvare (operativsystem, kompilator) → maskinvare.
Operativsystemets oppgaver: I/O, tildele minne og lager, beskyttet deling. Kompilator: høynivåspråk → assembly;
assembler: assembly → maskinkode (figur 1.4, swap i C / RISC-V / binært). Figur 1.5: de fem klassiske komponentene inndata,
utdata, minne, datasti og kontroll (datasti + kontroll = prosessoren). Minne: DRAM (hovedminne, flyktig), SRAM (hurtigbuffer),
flash og magnetisk disk (sekundærminne, ikke-flyktig). Instruksjonssettarkitektur (ISA) og ABI som abstraksjon; implementasjon
= maskinvare som følger arkitekturen. Lagret program: instruksjoner og data er begge tall i samme minne (boka 1.3 og 2.5;
kompendiet: «programmer og data lagres i samme minne, slik at datamaskiner kan endre programmer under kjøring»).
Teknologi (1.5): transistor, integrert krets, VLSI; figur 1.10 ytelse per kostnad; figur 1.11 DRAM-kapasitet; figur 1.12
produksjonsprosessen: silisiumstav → wafere → 20–40 prosesseringssteg → testing → dicing til dies → pakking → test → sending.
Utbytte (yield) = andel gode dies. Formler s. 28: kostnad per die = kostnad per wafer / (dies per wafer × utbytte);
dies per wafer ≈ waferareal / dieareal; utbytte = 1 / (1 + defekter per areal × dieareal)^N.

## 1.3 T1.3 Ytelse

Læringsutbytte:
- Studenten kjenner til de viktigste ytelsesmetrikkene i datamaskinarkitektur.
- Studenten forklare forskjellen på kjøretid og gjennomstrømning og velge den mest hensiktsmessige for gitte arkitekturoppgaver.
- Studenten kan forklare «The Iron Law» og kan bruke den til å forutsi hvordan endringer i arkitekturen påvirker kjøretid.
- Studenten kjenner til hvordan spenning og klokkefrekvens påvirker effektforbruk og strømforbruk.
- Studenten vet hva en testprogramsamling er og hvorfor de brukes.

Kilder: forelesning 2, teoriøving 1; boka 1.6–1.9 (s. 29–49); kompendiet «Ytelse: metrikker og faktorer», «The Iron Law of
Performance», «Eksempel: bruk av Iron Law», «Eksempel 1: kjøretid og The Iron Law». Bokoppgaver: 1.6, 1.7, 1.9. Eksamen:
Kont 26 oppgave 5.5, Ord. 24 oppgave 5.4. Boka: Example «Throughput and response time», «Relative performance», «Improving
performance», «Using the performance equation», «Comparing code segments», «Relative power»; Check Yourself §1.6 s. 33 og
s. 40, Self-Study «How do you measure fastest?».

Innhold: Responstid/kjøretid mot gjennomstrømning/båndbredde (figur 1.14 fly). Ytelse = 1/kjøretid; «X er n ganger så rask
som Y». Veggklokketid mot CPU-tid (bruker-CPU-tid, system-CPU-tid). Klokkesyklus, klokkeperiode, klokkefrekvens.
CPU-tid = CPU-klokkesykler × klokkeperiode = klokkesykler / klokkefrekvens. Klokkesykler = instruksjoner × CPI.
Den klassiske ytelseslikningen (Iron Law): CPU-tid = instruksjonsantall × CPI × klokkeperiode = instruksjonsantall × CPI /
klokkefrekvens; sekunder/program = instruksjoner/program × klokkesykler/instruksjon × sekunder/klokkesyklus. Klokkesykler =
Σ CPI_i × C_i over instruksjonsklasser. Figur 1.15 hva som måles; tabell over hva algoritme, språk, kompilator og ISA påvirker.
IPC = 1/CPI. Effektmuren (1.7): dynamisk energi ∝ kapasitiv last × spenning², effekt ∝ ½ × kapasitiv last × spenning² ×
frekvens; spenning ned 15 % per generasjon, 5 V → 1 V; lekkasje (statisk effekt) ca 40 % i servere; figur 1.16 klokke og effekt
for Intel-prosessorer. Testprogramsamlinger (1.9): arbeidslast, benchmark, SPEC CPU2017 (10 heltall, 13 flyttall), SPECratio =
referansetid / målt tid, geometrisk middel; SPECpower (ssj_ops per watt). Fallgruve (1.11): MIPS = instruksjonsantall /
(kjøretid × 10^6) = klokkefrekvens / (CPI × 10^6) er ikke et ytelsesmål.

## 1.4 T1.4 Parallelle datamaskiner

Læringsutbytte:
- Studenten vet hvorfor stort sett alle datamaskiner i dag har mer enn én prosessorkjerne.
- Studenten kan bruke Amdahl's lov til å analysere ytelsesforbedring i datamaskiner.

Kilder: forelesning 2; boka 1.8 og 1.11 (s. 43–46, 50–53); kompendiet «Introduksjon til parallelle systemer», «Amdahl's lov»,
«Eksempel 2: Amdahl's lov». Bokoppgaver: 1.10, 1.16. Boka: Self-Study «Amdahl's law and brotherhood»; Check Yourself §1.11
(MIPS, s. 53); Pitfall-eksempelet med multiplikasjon (s. 51).

Innhold: Siden 2002 har ytelsen per prosessor økt 1,03×/år mot 1,5×/år før (figur 1.17); effektmuren tvang bransjen over
til flerkjerneprosessorer fra 2006. Programmerere må skrive parallelle programmer for å få mer ytelse; utfordringer:
oppdeling, lastbalanse, synkronisering, kommunikasjon (avis-analogien med åtte journalister). Amdahls lov (boka): kjøretid
etter forbedring = kjøretid påvirket av forbedringen / forbedringsfaktor + kjøretid upåvirket. Kompendiets form:
speedup = 1 / ((1 − P) + P/N), P = parallell andel, N = antall kjerner. Eksempel: 100 s program, 80 s multiplikasjon, kan
ikke bli 5× raskere uansett. Eksempel kompendiet: P = 0,7, N = 4 → 2,1×.

## 2 T2 Instruksjonssett

Læringsutbytter: K1, K2, F1, G1. Boka kapittel 2, kompendiet kapittel 2 og 3 (tall). Deltemaer T2.1 Instruksjoner (boka
2.1–2.7; oppgaver 2.1–2.4, 2.12, 2.13), T2.2 Heltall og logiske operasjoner (boka 2.4, 2.6; oppgaver 2.10, 2.11), T2.3
Funksjonskall (boka 2.8; oppgaver 2.30–2.32), T2.4 Instruksjoner, diverse (boka 2.9, 2.10, 2.12; oppgaver 2.22, 2.34).
Ikke dekket på siden ennå.

## 3 T3 Enkeltsykelprosessor (inkl. kombinatorisk logikk og ALU)

Læringsutbytter: K1–K4, F2, F3, G1. T3.1 Enkeltsykelprosessor (boka 4.1–4.4; oppgaver 4.1, 4.3, 4.5, 4.7), T3.2 Kombinatorisk
logikk (boka A.1–A.3; oppgaver A.5, A.7, A.8, A.10, A.11), T3.3 ALU (boka 3.1–3.6, A.5; oppgaver 3.3, 3.6–3.8, 3.12, 3.18,
3.20–3.23). Kompendiet kapittel 3, 4 og Appendix A. Ikke dekket på siden ennå.

## 4 T4 Flersykelprosessor (og sekvensiell logikk)

Læringsutbytter: K1–K3, F2, F3, G1. T4.1 Flersykelprosessor (boka 4.5, nettseksjon e.4.5), T4.2 Sekvensiell logikk (boka
A.8, A.10, A.11; oppgaver A.36–A.39). Kompendiet kapittel 4 og Appendix A. Ikke dekket på siden ennå.

## 5 T5 Samlebåndsprosessorer

Læringsutbytter: K1–K3, F2, F3, G1. T5.1 Samlebåndsprosessor med 5 steg (boka 4.6–4.9; oppgaver 4.16–4.18, 4.22–4.25,
4.27, 4.28.1–2), T5.2 Unntak og avbrudd (boka 4.10–4.11; oppgave 4.30), T5.3 Prosessorer med høyere ytelse (boka 4.11;
oppgave 4.31). Kompendiet kapittel 4 og 6. Ikke dekket på siden ennå.

## 6 T6 Minnesystemet

Læringsutbytter: K1, K2, K5, F2, F3, G1. T6.1 Minnehierarki og hurtigbuffer (boka 5.1, 5.3, 5.4; oppgaver 5.1–5.3, 5.5, 5.7,
5.10, 5.11), T6.2 Minneteknologier (boka 5.2, A.9), T6.3 Virtuelt minne (boka 5.6, 5.7; oppgaver 5.16, 5.19). Kompendiet
kapittel 5. Ikke dekket på siden ennå.

## 7 T7 Parallelle datamaskiner

Læringsutbytter: K1, K6, G1. T7.1 Ytelse og Flynns taksonomi (boka 6.1–6.3, 6.11; oppgaver 6.2, 6.3, 6.11), T7.2
Multiprosessorer (boka 6.4, 6.5, 6.8, 5.10, 2.11; oppgaver 6.6, 6.7, 6.19), T7.3 Akseleratorer (boka 6.6, 6.7).
Kompendiet kapittel 6. Ikke dekket på siden ennå.
