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

Læringsutbytter: K1, K2, F1, G1. Undervisning: forelesning 2 og 3, praktiske øvinger (Ripes). Boka kapittel 2.
Kompendiet kapittel 2 (instruksjoner) og 3 (tallrepresentasjon).

## 2.1 T2.1 Instruksjoner

Læringsutbytte:
- Studenten kjenner til de tre designprinsippene for instruksjonssettdesign og deres motivasjon.
- Studenten kan oversette fra et høynivåspråk til assemblyinstruksjoner (og omvendt).
- Studenten kan oversette fra assemblyinstruksjoner til maskinkode (og omvendt).
- Studenten kjenner til instruksjonsformatene i RISC-V og kan forklare hvorfor de er definert slik de er.
- Studenten forstår hvordan instruksjoner lagres i minnet og hvordan dette utnyttes til å implementere kontrollflyt.

Kilder: forelesning 2 og 3; boka 2.1–2.7 (s. 68–103); kompendiet kap. 2 «Hva er et instruksjonssett?», «Designprinsipper»,
«RISC-V instruksjonsformat», «Operasjoner og operander», «Minnetilgang og adressering», «Eksempel 1–2». Bokoppgaver: 2.1,
2.2, 2.3, 2.4, 2.12, 2.13. Boka: Example s. 71, 72, 73, 75, 77, 87, 89, 91, 99, 100, 102; Check Yourself §2.2, §2.3, §2.5,
§2.7; Self-Study «Instructions as numbers», «While being faster», «The Anticompiler». Eksamen: Kont 26/Ord 25/Kont 25/Ord 24/
Kont 24 oppgave 1, Ord 22 oppgave 11.

Innhold: instruksjonssett = vokabular; RISC-V (UC Berkeley 2010, RV32). add a, b, c: tre operander (designprinsipp 1:
enkelhet favoriserer regularitet). 32 registre à 32 bit (ord); designprinsipp 2: mindre er raskere. Dataoverføring lw/sw med
basisregister + forskyvning; byteadressering (ordadresser skiller med 4), little-endian; spilling. Immediate: addi, x0 = 0.
Formater (2.5): R (funct7 rs2 rs1 funct3 rd opcode, 7-5-5-3-5-7), I (imm12 rs1 funct3 rd opcode), S (imm[11:5] rs2 rs1
funct3 imm[4:0] opcode); designprinsipp 3: god design krever gode kompromisser; hex; maskinkodeeksempel A[30] = h + A[30] + 1;
Big Picture: instruksjoner er tall, programmer lagres i minnet. Beslutninger (2.7): beq, bne, blt, bge, bltu, bgeu; if-then-else
med hopp på motsatt betingelse; while-løkke med slli/add/lw/bne/addi/beq; grunnblokk; grensesjekk med bgeu; hopptabell og jalr;
tilstandskoder i ARM.

## 2.2 T2.2 Heltall og logiske operasjoner

Læringsutbytte:
- Studenten skal kunne representere heltall som binære tall (grunntall 2) og heksadesimale tall (grunntall 16) samt kunne
  oversette mellom disse og tall i det desimale systemet (grunntall 10).
- Studenten skal kunne representere negative heltall på 2’s komplement form samt kunne oversette mellom dette formatet og
  tall i det desimale systemet.
- Studenten skal forstå hvorfor fortegnsutvidelse av et tall på 2’s komplement form beholder samme tallverdi.
- Studenten vite hva overflyt er og forstå når det oppstår.
- Studenten skal kunne utføre logiske operasjoner på binære tall, inkludert bitvis AND og OR samt logisk og aritmetisk
  bitskifting.

Kilder: forelesning 2, ekstraforelesning 1, praktiske øvinger; boka 2.4 (s. 80–87) og 2.6 (s. 95–98); kompendiet kap. 3
«Binære tall og tallsystemer», «To-komplement og negative tall», «Eksempel 1». Bokoppgaver: 2.10, 2.11. Boka: Example s. 83,
84, 85; Check Yourself §2.4, §2.6.

Innhold: siffer i har verdi d·grunntall^i; bit 0 = LSB, bit 31 = MSB; usignert 0…2^32−1; hex-tabellen figur 2.4; desimalt →
binært ved gjentatt divisjon (kompendiet). Fortegn og størrelse forkastet; tokomplement: ledende 0 positivt, ledende 1
negativt, verdi −x31·2^31 + Σ; −2^31 … 2^31−1; fortegnsbit; negering = inverter + 1; fortegnsutvidelse = kopier fortegnsbiten;
lb/lbu; overflyt = feil fortegnsbit. Logiske operasjoner figur 2.8: slli/srli/srai, sll/srl/sra, and/or/xor (+i), NOT = xor
111…1; maske; skift venstre = ×2^i; aritmetisk skift fyller med fortegnsbit.

## 2.3 T2.3 Funksjonskall

Læringsutbytte:
- Studenten vet hvilke oppgaver som skal utføres ved et funksjonskall og kan forklare konseptet kallkonvensjon.
- Studenten kjenner RISC-V minnekartet (kan gjengi og forklare figur 2.13).
- Studenten forstår forskjellen på statiske og dynamiske data.

Kilder: forelesning 3, praktiske øvinger; boka 2.8 (s. 104–114). Bokoppgaver: 2.30, 2.31, 2.32. Boka: Example leaf_example
s. 106, fact s. 108; Check Yourself §2.8.

Innhold: seks steg ved kall; x10–x17 argumenter, x1 returadresse; jal (lagrer PC+4), jalr x0, 0(x1); PC. Stakk (sp = x2,
vokser nedover, push/pop). Temporære x5–x7, x28–x31 (bevares ikke), lagrede x8–x9, x18–x27 (bevares); figur 2.11 og 2.14
(registerkonvensjonen). Løvprosedyrer; nøstede og rekursive kall: kalleren pusher a/t-registre den trenger, den kalte pusher
x1 og s-registre. Prosedyreramme, fp = x8. Figur 2.13 minnekart: reservert, tekst 0x0040 0000, statisk data 0x1000 0000,
heap oppover, stakk fra 0x3fff fff0 nedover; automatiske vs statiske variabler, gp = x3; malloc/free, minnelekkasje, dinglende
pekere; tail call.

## 2.4 T2.4 Instruksjoner, diverse

Læringsutbytte:
- Studenten kjenner til hvordan tekst representeres i en datamaskin.
- Studenten skal vite hvordan vi håndterer store konstanter og (unngår) lange hopp (PC-relativ adressering).
- Studenten skal kunne forklare RISC-Vs fire adressemodi.
- Studenten skal kunne forklare skrittene involvert i oversettelse og oppstart av programmer (kunne gjengi og forklare
  figur 2.20).

Kilder: forelesning 3, praktiske øvinger; boka 2.9 (s. 114–120), 2.10 (s. 120–128), 2.12 (s. 131–140). Bokoppgaver: 2.22,
2.34. Boka: Example s. 115, 116, 120, 123, 124, 127, 135; Check Yourself §2.9, §2.10, §2.12; Self-Study «Instructions as
numbers and Insecurity».

Innhold: ASCII (figur 2.15), lbu/sb, lhu/sh, C-strenger null-terminert, Java Unicode/UTF-16 og lengde; strcpy; Big Picture:
typen ligger i programmet. lui (U-type) + addi for 32-bits konstanter, bit 11-korreksjon. Hoppadressering: SB (12 bit) og
UJ (20 bit), PC-relativ, i halvord: ±4 KiB og ±1 MiB; lange hopp lui + jalr eller bne + jal; while-løkka på adresse 80000.
Fire adressemodi (figur 2.17): immediate, register, basis/forskyvning, PC-relativ. Dekoding av 00578833. Figur 2.20:
kompilator → assembler (pseudoinstruksjoner li/mv/j/la, symboltabell, objektfil med seks deler) → lenker (tre steg,
relokering, kjørbar fil; eksempel med prosedyre A og B) → laster (seks steg). DLL med lat lenking. Java: bytekode, JVM
(tolk), JIT.

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
