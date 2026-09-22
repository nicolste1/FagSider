/* ═══════════════════════════════════════════════════════════════════
   Begrepsordliste for TDT4160 Datamaskiner.
   Kun DATA: window.GLOSSARY. Popover-UI-en ligger i /glossary.js (felles for alle fag).

   Bruk i HTML:   <span class="term" data-term="cpi">CPI</span>

   Felt per begrep:
     term  — visningsnavn (HTML tillatt, f.eks. <sub>)
     def   — forklaring (HTML tillatt, 1–3 setninger)
     more  — (valgfritt) lenke relativt til fagets rot, f.eks. "kap1/ytelse.html#ytelseslikningen"
     alias — (valgfritt) alternative navn (ofte det engelske ordet fra boka), vises i ordlista og søk

   Én variabel per side slik at `more`-lenkene er lette å vedlikeholde.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var A = 'kap1/intro.html';
  var B = 'kap1/ytelse.html';

  window.GLOSSARY = {
    /* ── T1.1 Datamaskintyper og de 7 store ideene ── */
    'datamaskinarkitektur': {
      term: 'Datamaskinarkitektur',
      alias: 'computer architecture',
      def: '<p>Feltet som handler om hvordan datamaskiner er bygget og organisert for å kjøre programmer effektivt: hvordan maskinvare og programvare samhandler, fra instruksjonssett til prosessor og minne.</p>',
      more: A + '#typer'
    },
    'pc': {
      term: 'Personlig datamaskin (PC)',
      alias: 'personal computer',
      def: '<p>Datamaskin for én bruker, typisk med skjerm, tastatur og mus. Legger vekt på god ytelse til lav kostnad og kjører programvare fra tredjeparter.</p>',
      more: A + '#typer'
    },
    'server': {
      term: 'Server',
      def: '<p>Datamaskin som kjører større programmer for mange brukere, ofte samtidig, og som vanligvis bare nås over nettverk. Krever mer regnekraft, lagring og I/O enn en PC, og vektlegger pålitelighet.</p>',
      more: A + '#typer'
    },
    'superdatamaskin': {
      term: 'Superdatamaskin',
      alias: 'supercomputer',
      def: '<p>Servere med høyest ytelse og kostnad: hundretusener av prosessorer, terabyte med minne, titalls til hundrevis av millioner dollar. Brukes til værvarsling, oljeleting, proteinstruktur og andre tunge vitenskapelige beregninger.</p>',
      more: A + '#typer'
    },
    'innebygd': {
      term: 'Innebygd datamaskin',
      alias: 'embedded computer, IoT',
      def: '<p>Datamaskin inne i en annen enhet (bil, TV, fly, vaskemaskin) som kjører ett bestemt program eller én samling programmer. Den største klassen i antall. Krever minimumsytelse med strenge grenser for kostnad og effekt.</p>',
      more: A + '#typer'
    },
    'pmd': {
      term: 'Personlig mobil enhet (PMD)',
      alias: 'personal mobile device',
      def: '<p>Små, batteridrevne, trådløse enheter med berøringsskjerm der programvare installeres som apper: smarttelefoner og nettbrett. Erstattet PC-en som den vanligste datamaskinen i «post-PC-æraen».</p>',
      more: A + '#typer'
    },
    'sky': {
      term: 'Skytjenester (Cloud, WSC)',
      alias: 'cloud computing, warehouse scale computer, SaaS',
      def: '<p>Store samlinger av servere (Warehouse Scale Computers, gjerne 50 000 servere) som tilbyr tjenester over internett, og som andre selskaper kan leie deler av. Programvare som tjeneste (SaaS) leverer programvare og data via nettleser i stedet for installert kode.</p>',
      more: A + '#typer'
    },
    'prefiks': {
      term: 'Desimale og binære prefikser',
      alias: 'GB vs GiB, kibibyte',
      def: '<p>Desimale prefikser er tierpotenser (kB = 10<sup>3</sup>, GB = 10<sup>9</sup>, TB = 10<sup>12</sup>); binære prefikser er toerpotenser (KiB = 2<sup>10</sup>, GiB = 2<sup>30</sup>, TiB = 2<sup>40</sup>). Avviket vokser fra 2 % for kilo til 10 % for tera. Boka bruker GiB om minnestørrelser og GB om lagring og båndbredde.</p>',
      more: A + '#prefikser'
    },
    'syv-ideer': {
      term: 'De syv store ideene',
      alias: 'seven great ideas',
      def: '<p>Boka: abstraksjon for å forenkle design, gjør det vanlige tilfellet raskt, ytelse via parallellitet, ytelse via samlebånd, ytelse via prediksjon, minnehierarki, og pålitelighet via redundans. Tidligere utgaver hadde «design for Moores lov» som åttende idé.</p>',
      more: A + '#ideer'
    },
    'abstraksjon': {
      term: 'Abstraksjon',
      alias: 'use abstraction to simplify design',
      def: '<p>Å beskrive et design på flere nivåer der detaljene på lavere nivå skjules bak en enklere modell. Både maskinvare (transistor → port → prosessor) og programvare (maskinkode → assembly → høynivåspråk) er lagdelt slik. Viktigste eksempel: instruksjonssettarkitekturen.</p>',
      more: A + '#ideer'
    },
    'vanlig-tilfelle': {
      term: 'Gjør det vanlige tilfellet raskt',
      alias: 'make the common case fast',
      def: '<p>Å forbedre det som skjer ofte gir mer ytelse enn å forbedre det sjeldne, og det vanlige er ofte også enklere å forbedre. Forutsetter at du <em>vet</em> hva som er vanlig, altså måling og testprogrammer. Amdahls lov er den kvantitative baksiden av ideen.</p>',
      more: A + '#ideer'
    },
    'parallellitet': {
      term: 'Ytelse via parallellitet',
      alias: 'performance via parallelism',
      def: '<p>Å utføre flere operasjoner samtidig, fra flere kjerner på én brikke til flere enheter inne i én prosessor. Boka bruker flere jetmotorer som ikon.</p>',
      more: A + '#ideer'
    },
    'samlebaand': {
      term: 'Samlebånd (pipelining)',
      alias: 'pipelining',
      def: '<p>Et spesielt mønster av parallellitet der utførelsen av instruksjoner overlapper: mens én instruksjon dekodes, hentes den neste. Som en bøttekjede ved brannslukking. Kapittel 5 (T5) handler om samlebåndsprosessoren.</p>',
      more: A + '#ideer'
    },
    'prediksjon': {
      term: 'Ytelse via prediksjon',
      alias: 'performance via prediction',
      def: '<p>Å gjette og begynne å jobbe i stedet for å vente til man vet sikkert, forutsatt at gjetningen er god nok og det er billig å rette opp feil. Hoppprediksjon i samlebåndsprosessorer er hovedeksempelet.</p>',
      more: A + '#ideer'
    },
    'minnehierarki': {
      term: 'Minnehierarki',
      alias: 'hierarchy of memories',
      def: '<p>Flere lag med minne: raskest, minst og dyrest per bit øverst (registre, hurtigbuffer), tregest, størst og billigst nederst (hovedminne, disk). Gir illusjonen av ett minne som er både stort og raskt. Tema T6.</p>',
      more: A + '#ideer'
    },
    'redundans': {
      term: 'Pålitelighet via redundans',
      alias: 'dependability via redundancy',
      def: '<p>Fordi enhver fysisk komponent kan svikte, legger man inn ekstra komponenter som kan ta over og oppdage feil, slik en lastebil har doble hjul på bakakselen.</p>',
      more: A + '#ideer'
    },
    'moores-lov': {
      term: 'Moores lov',
      alias: "Moore's law",
      def: '<p>Gordon Moores spådom (1965, justert 1975) om at antall transistorer per brikke dobles hvert andre år. Holdt i 50 år og formet datamaskindesign, men gjelder ikke lenger; halvlederteknologien forbedres fortsatt, bare saktere.</p>',
      more: A + '#ideer'
    },

    /* ── T1.2 Under overflaten ── */
    'applikasjonsprogramvare': {
      term: 'Applikasjonsprogramvare',
      alias: 'application software',
      def: '<p>Programmene brukeren faktisk kjører (tekstbehandler, database, nettleser). Ytterste ring i figur 1.3; kan selv bestå av flere lag.</p>',
      more: A + '#under-programmet'
    },
    'systemprogramvare': {
      term: 'Systemprogramvare',
      alias: 'systems software',
      def: '<p>Programvare som tilbyr tjenester som er nyttige for alle programmer: operativsystem, kompilator, lastere og assemblere. Ligger mellom applikasjonene og maskinvaren.</p>',
      more: A + '#under-programmet'
    },
    'operativsystem': {
      term: 'Operativsystem',
      alias: 'operating system, OS',
      def: '<p>Overvåkende program som forvalter datamaskinens ressurser for programmene som kjører: håndterer inn- og utdata, tildeler lager og minne, og gir beskyttet deling av maskinen mellom flere programmer samtidig. Eksempler: Linux, iOS, Android, Windows.</p>',
      more: A + '#under-programmet'
    },
    'kompilator': {
      term: 'Kompilator',
      alias: 'compiler',
      def: '<p>Program som oversetter setninger i et høynivåspråk (C, C++, Java) til assemblyinstruksjoner. Noen kompilatorer går rett til maskinkode.</p>',
      more: A + '#under-programmet'
    },
    'assembler': {
      term: 'Assembler',
      def: '<p>Program som oversetter den symbolske versjonen av instruksjoner (assemblyspråk, f.eks. <code>add A, B</code>) til den binære versjonen (maskinspråk, f.eks. <code>1001010100101110</code>).</p>',
      more: A + '#under-programmet'
    },
    'assemblyspraak': {
      term: 'Assemblyspråk',
      alias: 'assembly language',
      def: '<p>Symbolsk representasjon av maskininstruksjoner, én linje per instruksjon maskinen skal utføre. Krever at programmereren tenker som maskinen. Tema T2 og øvingene i Ripes handler om RISC-V-assembly.</p>',
      more: A + '#under-programmet'
    },
    'maskinspraak': {
      term: 'Maskinspråk',
      alias: 'machine language, maskinkode',
      def: '<p>Binær representasjon av maskininstruksjoner: den eneste formen maskinvaren forstår. Instruksjoner er bare samlinger av biter, altså tall.</p>',
      more: A + '#under-programmet'
    },
    'hoynivaaspraak': {
      term: 'Høynivåspråk',
      alias: 'high-level programming language',
      def: '<p>Portabelt språk som C, C++, Java eller Python, satt sammen av ord og algebraisk notasjon, som en kompilator kan oversette til assembly. Fordeler: naturlig å tenke i, høyere produktivitet, uavhengig av maskinen.</p>',
      more: A + '#under-programmet'
    },
    'bit': {
      term: 'Bit (binært siffer)',
      alias: 'binary digit',
      def: '<p>Ett av de to sifrene 0 og 1 som all informasjon i datamaskinen er bygget av. Datamaskinens alfabet har bare to bokstaver, men det begrenser ikke hva den kan gjøre.</p>',
      more: A + '#under-programmet'
    },
    'instruksjon': {
      term: 'Instruksjon',
      def: '<p>En kommando som maskinvaren forstår og adlyder, f.eks. «legg sammen to tall». Er bare en samling biter, altså et tall, og kan derfor lagres i minnet som data.</p>',
      more: A + '#under-programmet'
    },
    'fem-komponenter': {
      term: 'De fem komponentene',
      alias: 'five classic components',
      def: '<p>Inndata, utdata, minne, datasti og kontroll, der datasti og kontroll til sammen kalles prosessoren. Alle datamaskiner, gamle som nye, kan deles inn slik (figur 1.5 i boka).</p>',
      more: A + '#under-panseret'
    },
    'inndataenhet': {
      term: 'Inndataenhet',
      alias: 'input device',
      def: '<p>Mekanisme som mater datamaskinen med informasjon, som tastatur, mikrofon eller berøringsskjerm. Skriver data til minnet.</p>',
      more: A + '#under-panseret'
    },
    'utdataenhet': {
      term: 'Utdataenhet',
      alias: 'output device',
      def: '<p>Mekanisme som formidler resultatet av en beregning til brukeren eller en annen datamaskin, som skjerm eller høyttaler. Leser data fra minnet. Nettverk er både inn- og utdata.</p>',
      more: A + '#under-panseret'
    },
    'minne': {
      term: 'Minne',
      alias: 'memory',
      def: '<p>Lagringsområdet der programmer ligger mens de kjører, og som inneholder dataene de trenger. Hovedminnet er DRAM; inne i prosessoren ligger hurtigbuffer av SRAM.</p>',
      more: A + '#under-panseret'
    },
    'datasti': {
      term: 'Datasti',
      alias: 'datapath',
      def: '<p>Den delen av prosessoren som utfører de aritmetiske operasjonene: «musklene». Registre, ALU og forbindelsene mellom dem. Tema T3.</p>',
      more: A + '#under-panseret'
    },
    'kontrollenhet': {
      term: 'Kontrollenhet',
      alias: 'control',
      def: '<p>Den delen av prosessoren som styrer datastien, minnet og I/O-enhetene etter programmets instruksjoner: «hjernen». Sender signalene som bestemmer hva datastien gjør.</p>',
      more: A + '#under-panseret'
    },
    'prosessor': {
      term: 'Prosessor (CPU)',
      alias: 'central processing unit',
      def: '<p>Den aktive delen av datamaskinen: datasti + kontroll. Følger programmets instruksjoner til punkt og prikke, legger sammen tall, tester tall og signaliserer til I/O-enheter.</p>',
      more: A + '#under-panseret'
    },
    'dram': {
      term: 'DRAM',
      alias: 'dynamic random access memory',
      def: '<p>Dynamisk minne bygget som integrert krets, med tilgang til enhver adresse på omtrent samme tid (ca. 50 ns). Hovedminnet i dagens datamaskiner. Flyktig: mister innholdet uten strøm.</p>',
      more: A + '#under-panseret'
    },
    'sram': {
      term: 'SRAM',
      alias: 'static random access memory',
      def: '<p>Statisk minne bygget som integrert krets, raskere men mindre tett (og dermed dyrere) enn DRAM. Brukes til hurtigbuffer.</p>',
      more: A + '#under-panseret'
    },
    'hurtigbuffer': {
      term: 'Hurtigbuffer (cache)',
      alias: 'cache memory',
      def: '<p>Lite, raskt minne (SRAM) inne i prosessoren som fungerer som buffer for det tregere og større hovedminnet. Gir programmereren inntrykk av at hovedminnet er nesten like raskt som toppen av minnehierarkiet.</p>',
      more: A + '#under-panseret'
    },
    'isa': {
      term: 'Instruksjonssettarkitektur (ISA)',
      alias: 'instruction set architecture, arkitektur',
      def: '<p>Det abstrakte grensesnittet mellom maskinvaren og den laveste programvaren: alt en programmerer må vite for å skrive et maskinspråkprogram som kjører riktig (instruksjoner, registre, minnetilgang, I/O). Lar mange implementasjoner kjøre samme programvare.</p>',
      more: A + '#under-panseret'
    },
    'abi': {
      term: 'ABI',
      alias: 'application binary interface',
      def: '<p>Brukerdelen av instruksjonssettet pluss operativsystemgrensesnittene som applikasjonsprogrammerere bruker. Definerer en standard for binær portabilitet mellom datamaskiner.</p>',
      more: A + '#under-panseret'
    },
    'implementasjon': {
      term: 'Implementasjon',
      def: '<p>Maskinvare som følger arkitekturabstraksjonen. Én ISA kan ha mange implementasjoner med ulik kostnad og ytelse, slik et digitalt ur kan bygges med ulik elektronikk men samme funksjoner.</p>',
      more: A + '#under-panseret'
    },
    'flyktig-minne': {
      term: 'Flyktig og ikke-flyktig minne',
      alias: 'volatile, nonvolatile',
      def: '<p>Flyktig minne (DRAM) beholder data bare så lenge det får strøm. Ikke-flyktig minne (flash, magnetisk disk, DVD) beholder data uten strøm og brukes til å lagre programmer og data mellom kjøringer.</p>',
      more: A + '#under-panseret'
    },
    'hovedminne': {
      term: 'Hovedminne (primærminne)',
      alias: 'main memory, primary memory',
      def: '<p>Flyktig minne som holder programmer og data mens de kjører; DRAM i dagens datamaskiner.</p>',
      more: A + '#under-panseret'
    },
    'sekundaerminne': {
      term: 'Sekundærminne',
      alias: 'secondary memory',
      def: '<p>Ikke-flyktig minne som lagrer programmer og data mellom kjøringer: flashminne i mobile enheter, magnetiske disker i servere. Neste lag under hovedminnet i minnehierarkiet.</p>',
      more: A + '#under-panseret'
    },
    'flashminne': {
      term: 'Flashminne',
      alias: 'flash memory',
      def: '<p>Ikke-flyktig halvlederminne. Tregere og billigere enn DRAM, dyrere per bit enn disk, men mindre, mer robust og mer strømgjerrig. Bitene slites ut etter 100 000–1 000 000 skrivinger, så filsystemet må spre skrivingene.</p>',
      more: A + '#under-panseret'
    },
    'magnetisk-disk': {
      term: 'Magnetisk disk (harddisk)',
      alias: 'magnetic disk, hard disk',
      def: '<p>Ikke-flyktig sekundærminne av roterende plater med magnetisk belegg. Mekanisk, så aksesstiden er 5–20 ms, men svært billig per gigabyte (0,01–0,02 dollar i 2020).</p>',
      more: A + '#under-panseret'
    },
    'lagret-program': {
      term: 'Prinsippet om lagrede program',
      alias: 'stored-program concept',
      def: '<p>Instruksjoner og data er begge tall og ligger i samme minne. Derfor kan et program leses, skrives og endres som data, og samme maskinvare kan kjøre hvilket som helst program bare ved å laste inn nye tall. Grunnlaget for all databehandling.</p>',
      more: A + '#lagret-program'
    },
    'transistor': {
      term: 'Transistor',
      def: '<p>En av/på-bryter styrt av et elektrisk signal. Byggesteinen i integrerte kretser; Moores lov handlet om antall transistorer per brikke.</p>',
      more: A + '#produksjon'
    },
    'integrert-krets': {
      term: 'Integrert krets (brikke, chip)',
      alias: 'integrated circuit, chip, VLSI',
      def: '<p>Titalls til milliarder transistorer på én brikke. VLSI (very large-scale integrated circuit) er betegnelsen for hundretusener til millioner transistorer.</p>',
      more: A + '#produksjon'
    },
    'silisium': {
      term: 'Silisium og halvleder',
      alias: 'silicon, semiconductor',
      def: '<p>Silisium er et grunnstoff (finnes i sand) som leder strøm dårlig, en halvleder. Med kjemiske prosesser kan små områder gjøres til ledere, isolatorer eller brytere (transistorer). En VLSI-krets er milliarder slike kombinert i én liten pakke.</p>',
      more: A + '#produksjon'
    },
    'wafer': {
      term: 'Wafer',
      def: '<p>Tynn skive (under 2,5 mm) skåret fra en silisiumstav (8–12 tommer i diameter). Går gjennom 20–40 prosesseringssteg som legger på mønstrene som blir transistorer, ledere og isolatorer.</p>',
      more: A + '#produksjon'
    },
    'die': {
      term: 'Die',
      alias: 'chip',
      def: '<p>De rektangulære bitene en wafer kuttes opp i («dicing»), uformelt kalt brikker. Ved å kutte opp waferen kan man kaste bare de diene som har defekter, ikke hele waferen.</p>',
      more: A + '#produksjon'
    },
    'defekt': {
      term: 'Defekt',
      def: '<p>Mikroskopisk feil i waferen eller i et av mønstringsstegene som gjør dien den ligger i ubrukelig. Det er praktisk umulig å lage en feilfri wafer, derfor mange uavhengige dies per wafer.</p>',
      more: A + '#produksjon'
    },
    'utbytte': {
      term: 'Utbytte (yield)',
      def: '<p>Andelen gode dies av det totale antallet dies på waferen. Faller når dien blir større (større sjanse for å inneholde en defekt), så kostnaden per die vokser raskere enn diearealet.</p>',
      more: A + '#produksjon'
    },

    /* ── T1.3 Ytelse ── */
    'ytelse': {
      term: 'Ytelse',
      alias: 'performance',
      def: '<p>For én bruker: 1 / kjøretid. «X er <em>n</em> ganger så rask som Y» betyr ytelse<sub>X</sub> / ytelse<sub>Y</sub> = kjøretid<sub>Y</sub> / kjøretid<sub>X</sub> = <em>n</em>. Tid er det eneste fullstendige og pålitelige ytelsesmålet.</p>',
      more: B + '#definere'
    },
    'kjoretid': {
      term: 'Kjøretid (responstid)',
      alias: 'execution time, response time, elapsed time, veggklokketid',
      def: '<p>Den totale tiden fra en oppgave starter til den er ferdig, inkludert disk- og minnetilgang, I/O og operativsystem. Det en enkeltbruker bryr seg om. Ytelse = 1 / kjøretid.</p>',
      more: B + '#definere'
    },
    'gjennomstromning': {
      term: 'Gjennomstrømning',
      alias: 'throughput, båndbredde, bandwidth',
      def: '<p>Total mengde arbeid utført per tidsenhet, f.eks. jobber per dag. Det et datasenter bryr seg om. Kortere kjøretid øker nesten alltid gjennomstrømningen, men flere prosessorer øker gjennomstrømningen uten å gjøre én jobb raskere.</p>',
      more: B + '#definere'
    },
    'cpu-tid': {
      term: 'CPU-tid',
      alias: 'CPU execution time',
      def: '<p>Tiden prosessoren faktisk bruker på å regne for én oppgave, uten ventetid på I/O eller andre programmer. Deles i bruker-CPU-tid (i programmet) og system-CPU-tid (i operativsystemet på vegne av programmet). Boka bruker «CPU-ytelse» om bruker-CPU-tid.</p>',
      more: B + '#maale'
    },
    'klokkesyklus': {
      term: 'Klokkesyklus',
      alias: 'clock cycle, tick, klokkeperiode, clock period',
      def: '<p>Nesten alle datamaskiner har en klokke som bestemmer når ting skjer i maskinvaren. Ett diskret tidsintervall er én klokkesyklus. Lengden er klokkeperioden (f.eks. 250 ps); den inverse er klokkefrekvensen (4 GHz).</p>',
      more: B + '#maale'
    },
    'klokkefrekvens': {
      term: 'Klokkefrekvens',
      alias: 'clock rate',
      def: '<p>Antall klokkesykler per sekund, 1 / klokkeperioden. 2 GHz = 2 · 10<sup>9</sup> sykler per sekund = 0,5 ns per syklus. Alene sier den lite om ytelse: P3 i selvstudiet har høyest klokke og er tregest.</p>',
      more: B + '#maale'
    },
    'cpi': {
      term: 'CPI',
      alias: 'clock cycles per instruction, klokkesykler per instruksjon',
      def: '<p>Gjennomsnittlig antall klokkesykler per instruksjon for et program. Avhenger av instruksjonsmiksen og av implementasjonen (prosessor- og minnedesign), ikke av ISA-en alene. IPC = 1 / CPI.</p>',
      more: B + '#ytelseslikningen'
    },
    'instruksjonsantall': {
      term: 'Instruksjonsantall',
      alias: 'instruction count, dynamisk instruksjonsantall',
      def: '<p>Antall instruksjoner programmet <em>utfører</em> (ikke antall linjer i kildekoden). Bestemmes av algoritmen, språket, kompilatoren og ISA-en, men ikke av hvordan prosessoren er bygget.</p>',
      more: B + '#ytelseslikningen'
    },
    'ytelseslikningen': {
      term: 'Ytelseslikningen (The Iron Law)',
      alias: 'CPU performance equation, iron law of performance',
      def: '<p>CPU-tid = instruksjonsantall × CPI × klokkeperiode = instruksjonsantall × CPI / klokkefrekvens. Skiller de tre faktorene som bestemmer kjøretiden; bare produktet er et pålitelig ytelsesmål.</p>',
      more: B + '#ytelseslikningen'
    },
    'instruksjonsmiks': {
      term: 'Instruksjonsmiks',
      alias: 'instruction mix',
      def: '<p>Den dynamiske hyppigheten av ulike instruksjonstyper i ett eller flere programmer. Fordi klassene har ulik CPI, er programmets CPI et vektet gjennomsnitt: klokkesykler = Σ CPI<sub>i</sub> · C<sub>i</sub>.</p>',
      more: B + '#ytelseslikningen'
    },
    'mips': {
      term: 'MIPS',
      alias: 'million instructions per second',
      def: '<p>Instruksjonsantall / (kjøretid × 10<sup>6</sup>) = klokkefrekvens / (CPI × 10<sup>6</sup>). Lett å forstå, men ubrukelig til å sammenlikne: ulike ISA-er har ulikt instruksjonsantall, MIPS varierer mellom programmer, og et program med flere, raskere instruksjoner kan få høyere MIPS og lengre kjøretid.</p>',
      more: B + '#fallgruver'
    },
    'effektmur': {
      term: 'Effektmuren',
      alias: 'power wall',
      def: '<p>Klokkefrekvens og effekt vokste sammen i 30 år til de traff den praktiske grensen for hva som kan kjøles i vanlige brikker (ca. 100 W). Spenningen kunne ikke senkes mer uten at transistorene lekker for mye. Løsningen ble flere kjerner i stedet for høyere klokke.</p>',
      more: B + '#effekt'
    },
    'dynamisk-energi': {
      term: 'Dynamisk energi og effekt',
      alias: 'dynamic energy, dynamic power',
      def: '<p>Energien som brukes når transistorer skifter tilstand: energi ∝ kapasitiv last × spenning². Effekt (energi per tid) ∝ ½ × kapasitiv last × spenning² × svitsjefrekvens. Spenningen inngår kvadratisk, så 15 % lavere spenning gir ca. 28 % lavere effekt alene.</p>',
      more: B + '#effekt'
    },
    'cmos': {
      term: 'CMOS',
      alias: 'complementary metal oxide semiconductor',
      def: '<p>Den dominerende teknologien for integrerte kretser. Hovedkilden til energiforbruk er dynamisk energi ved svitsjing; i tillegg kommer statisk energi fra lekkasjestrøm som flyter selv når transistoren er av (ca. 40 % i servere).</p>',
      more: B + '#effekt'
    },
    'lekkasje': {
      term: 'Lekkasje (statisk effekt)',
      alias: 'leakage, static power',
      def: '<p>Strøm som flyter gjennom transistorer selv når de er av, som kraner som ikke kan stenges helt. Øker med antall transistorer og når spenningen senkes, og er grunnen til at spenningen ikke kan senkes videre.</p>',
      more: B + '#effekt'
    },
    'flerkjerne': {
      term: 'Flerkjerneprosessor',
      alias: 'multicore microprocessor, kjerne, core',
      def: '<p>En mikroprosessor med flere prosessorer («kjerner») på én integrert krets. Siden 2006 er alle desktop- og serverprosessorer flerkjernede; gevinsten er ofte større i gjennomstrømning enn i responstid, og programmene må skrives parallelt for å utnytte dem.</p>',
      more: B + '#flerkjerne'
    },
    'amdahls-lov': {
      term: 'Amdahls lov',
      alias: "Amdahl's law",
      def: '<p>Kjøretid etter forbedring = (kjøretid påvirket av forbedringen / forbedringsfaktor) + kjøretid upåvirket. Forbedringen du kan oppnå er begrenset av hvor stor del av tiden det forbedrede brukes. Kvantitativ versjon av loven om avtagende utbytte; setter praktiske grenser for antall parallelle prosessorer.</p>',
      more: B + '#amdahl'
    },
    'speedup': {
      term: 'Speedup (hastighetsøkning)',
      def: '<p>Kjøretid før / kjøretid etter en forbedring. Kompendiets form av Amdahls lov: speedup = 1 / ((1 − P) + P/N) der P er den parallelliserbare andelen og N antall kjerner. Når N → ∞ går speedup mot 1 / (1 − P).</p>',
      more: B + '#amdahl'
    },
    'arbeidslast': {
      term: 'Arbeidslast',
      alias: 'workload',
      def: '<p>Settet av programmer en bruker faktisk kjører, med sine relative hyppigheter. Den perfekte måten å vurdere en ny maskin på er å kjøre sin egen arbeidslast på den; testprogramsamlinger prøver å etterlikne det.</p>',
      more: B + '#benchmarks'
    },
    'benchmark': {
      term: 'Testprogram (benchmark)',
      alias: 'testprogramsamling, benchmark suite',
      def: '<p>Program valgt spesielt for å sammenlikne datamaskiners ytelse. En samling testprogrammer utgjør en arbeidslast som forhåpentligvis forutsier ytelsen på brukerens egne programmer. Nødvendig for å vite hva «det vanlige tilfellet» er.</p>',
      more: B + '#benchmarks'
    },
    'spec': {
      term: 'SPEC',
      alias: 'System Performance Evaluation Cooperative, SPEC CPU2017, SPECratio',
      def: '<p>Samarbeid mellom datamaskinprodusenter (fra 1989) om standard testprogramsamlinger. SPEC CPU2017 har 10 heltalls- og 13 flyttallsprogrammer. SPECratio = referansetid / målt kjøretid (større er bedre); samlemålet er det geometriske middelet av SPECratio-ene. SPECpower måler ssj_ops per watt.</p>',
      more: B + '#benchmarks'
    },
    'geometrisk-middel': {
      term: 'Geometrisk middel',
      alias: 'geometric mean',
      def: '<p><em>n</em>-te rot av produktet av <em>n</em> tall. Brukes om normaliserte kjøretider (SPECratio) fordi det gir samme relative svar uansett hvilken maskin man normaliserer mot, noe aritmetisk middel ikke gjør.</p>',
      more: B + '#benchmarks'
    },
    'energiproporsjonal': {
      term: 'Energiproporsjonal databehandling',
      alias: 'energy-proportional computing',
      def: '<p>Idealet (Barroso og Hölzle, 2007) om at en server ved 10 % last bør bruke 10 % av maksimal effekt. Dagens servere bruker gjerne 33 % av toppeffekten ved 10 % last, og datasentre kjører for det meste på 10–50 % last.</p>',
      more: B + '#fallgruver'
    }
  };
})();
