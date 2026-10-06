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
  var C = 'kap2/instruksjoner.html';
  var D = 'kap2/tall.html';
  var E = 'kap2/prosedyrer.html';
  var F = 'kap3/logikk.html';
  var G = 'kap3/enkeltsykel.html';
  var H = 'kap3/alu.html';
  var K = 'kap5/samleband.html';
  var L = 'kap5/unntak-ytelse.html';

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
    },

    /* ── T2.1 Instruksjoner ── */
    'instruksjonssett': {
      term: 'Instruksjonssett',
      alias: 'instruction set',
      def: '<p>Vokabularet av kommandoer en gitt arkitektur forstår. Ordene er instruksjonene. Datamaskinspråk likner hverandre mer enn menneskespråk, mer som dialekter, så har du lært ett, er de andre lette å plukke opp.</p>',
      more: C + '#prinsipper'
    },
    'risc-v': {
      term: 'RISC-V',
      def: '<p>Instruksjonssettet boka og faget bruker, utviklet ved UC Berkeley fra 2010. Åpen arkitektur styrt av RISC-V International, ikke eid av ett selskap. Faget bruker 32-bitsvarianten RV32; RV64 har 64-bits registre.</p>',
      more: C + '#prinsipper'
    },
    'designprinsipp-1': {
      term: 'Designprinsipp 1: Enkelhet favoriserer regularitet',
      alias: 'simplicity favors regularity',
      def: '<p>Maskinvare for et fast antall operander er enklere enn for et variabelt antall. Derfor har alle aritmetiske RISC-V-instruksjoner nøyaktig tre operander, og alle instruksjoner er 32 bit lange.</p>',
      more: C + '#prinsipper'
    },
    'designprinsipp-2': {
      term: 'Designprinsipp 2: Mindre er raskere',
      alias: 'smaller is faster',
      def: '<p>Svært mange registre kan øke klokkeperioden fordi signaler må reise lenger. Derfor har RISC-V 32 registre, ikke flere; det ville også kostet bit i instruksjonsformatet.</p>',
      more: C + '#operander'
    },
    'designprinsipp-3': {
      term: 'Designprinsipp 3: God design krever gode kompromisser',
      alias: 'good design demands good compromises',
      def: '<p>Ønsket om at alle instruksjoner skal være like lange kolliderer med ønsket om ett format. Kompromisset: alle instruksjoner er 32 bit, men det finnes flere formater (R, I, S, SB, U, UJ) som holder feltene på samme plass så langt det går.</p>',
      more: C + '#formater'
    },
    'register': {
      term: 'Register',
      def: '<p>Et av 32 spesielle lagre bygget direkte i maskinvaren, 32 bit hver i RV32, som aritmetiske instruksjoner må hente operandene fra. «Mursteinene» i datamaskinkonstruksjon. Navngis x0–x31, med ABI-navn som sp, ra, a0 og t0.</p>',
      more: C + '#operander'
    },
    'ord': {
      term: 'Ord (word)',
      alias: 'word, doubleword, halvord',
      def: '<p>En naturlig enhet for tilgang i datamaskinen; i RISC-V en gruppe på 32 bit, samme størrelse som et register. Et dobbeltord er 64 bit, et halvord 16 bit, en byte 8 bit.</p>',
      more: C + '#operander'
    },
    'dataoverforing': {
      term: 'Dataoverføringsinstruksjon',
      alias: 'data transfer instruction, load, store',
      def: '<p>Instruksjon som flytter data mellom minne og registre. Load (lw) kopierer fra minne til register, store (sw) fra register til minne. RISC-V regner bare på registre, så alt fra minnet må lastes først.</p>',
      more: C + '#operander'
    },
    'adresse': {
      term: 'Adresse',
      def: '<p>Verdien som angir plassen til et bestemt dataelement i minnet. Minnet er én stor endimensjonal tabell, og adressen er indeksen, fra 0. RISC-V adresserer hver byte, så ord ligger på adresser som er multipler av 4.</p>',
      more: C + '#operander'
    },
    'byteadressering': {
      term: 'Byteadressering',
      alias: 'byte addressing, little-endian',
      def: '<p>Nesten alle arkitekturer adresserer enkeltbyte. Adressen til et ord er adressen til en av dets 4 byte, og ordadresser skiller med 4. Derfor må en tabellindeks ganges med 4 for å bli en byteforskyvning. RISC-V er little-endian: byten med lavest adresse er den «minste enden» av ordet.</p>',
      more: C + '#operander'
    },
    'basisregister': {
      term: 'Basisregister og forskyvning',
      alias: 'base register, offset',
      def: '<p>I <code>lw x9, 32(x22)</code> er x22 basisregisteret og 32 forskyvningen (offset). Minneadressen er summen. Passer både tabeller (basis = start, offset = element) og strukturer.</p>',
      more: C + '#operander'
    },
    'immediate': {
      term: 'Immediate (konstant i instruksjonen)',
      alias: 'umiddelbar operand',
      def: '<p>En konstant som ligger inne i selve instruksjonen, som 4 i <code>addi x22, x22, 4</code>. Over halvparten av aritmetiske instruksjoner bruker en konstant, så addi er den mest populære RISC-V-instruksjonen. Raskere og mer energieffektivt enn å laste konstanten fra minnet.</p>',
      more: C + '#operander'
    },
    'x0': {
      term: 'Register x0 (zero)',
      def: '<p>Registeret som er hardkoblet til verdien 0. Skriving til det forkastes. Brukes til å lage nyttige varianter: <code>sub x5, x0, x6</code> negerer, <code>addi x9, x0, 123</code> laster en konstant, <code>beq x0, x0, L</code> er et ubetinget hopp.</p>',
      more: C + '#operander'
    },
    'spilling': {
      term: 'Registerspilling',
      alias: 'spilling registers',
      def: '<p>Å legge mindre brukte variabler (eller verdier som trengs senere) i minnet fordi det finnes flere variabler enn registre. Kompilatoren holder de mest brukte i registre og flytter resten med load og store. Stakken er den ideelle datastrukturen for spilling.</p>',
      more: C + '#operander'
    },
    'instruksjonsformat': {
      term: 'Instruksjonsformat',
      alias: 'instruction format',
      def: '<p>Måten en instruksjon er delt opp i felt av binære tall. Alle RISC-V-instruksjoner er 32 bit. R-type: funct7, rs2, rs1, funct3, rd, opcode (7-5-5-3-5-7 bit). I-type: 12-bits immediate, rs1, funct3, rd, opcode. S-type deler immediate i to felt for å holde rs1 og rs2 på plass.</p>',
      more: C + '#formater'
    },
    'opcode': {
      term: 'Opcode',
      def: '<p>Feltet (de 7 laveste bitene) som angir grunnoperasjonen og formatet til en instruksjon. funct3 og funct7 er tilleggsopcoder: 51 (0110011) med funct3 = 0 og funct7 = 0 er add, med funct7 = 32 er sub.</p>',
      more: C + '#formater'
    },
    'registerfelt': {
      term: 'rd, rs1, rs2',
      alias: 'register destination, register source',
      def: '<p>Registerfeltene i formatene: rd er destinasjonsregisteret som får resultatet, rs1 og rs2 er første og andre kilderegister. 5 bit hver, siden 2<sup>5</sup> = 32 registre. Flere registre ville krevd flere bit i hvert felt.</p>',
      more: C + '#formater'
    },
    'heksadesimal': {
      term: 'Heksadesimalt (grunntall 16)',
      alias: 'hexadecimal, hex',
      def: '<p>Tallsystem med sifrene 0–9 og a–f. Siden 16 = 2<sup>4</sup> tilsvarer hvert heksadesimale siffer nøyaktig fire binære, så omregning er ren tabelloppslag. C skriver 0x1234. Brukes fordi bitstrenger på 32 bit er uleselige.</p>',
      more: D + '#grunntall'
    },
    'maskinkode': {
      term: 'Maskinkode',
      alias: 'machine code',
      def: '<p>En sekvens av instruksjoner i den numeriske (binære) formen, maskinspråk, i motsetning til den symbolske assemblyformen. add x9, x20, x21 er 0000000 10101 10100 000 01001 0110011.</p>',
      more: C + '#formater'
    },
    'betinget-hopp': {
      term: 'Betinget hopp',
      alias: 'conditional branch, beq, bne, blt, bge, bltu, bgeu',
      def: '<p>Instruksjon som tester en verdi og overfører kontrollen til en ny adresse hvis testen slår til. beq (branch if equal) og bne (not equal) sammenlikner to registre; blt/bge er signed mindre enn / større eller lik, bltu/bgeu usignert. Grunnsteinen for if og løkker.</p>',
      more: C + '#beslutninger'
    },
    'ubetinget-hopp': {
      term: 'Ubetinget hopp',
      alias: 'unconditional branch, jump, j',
      def: '<p>Et hopp prosessoren alltid tar. Kan skrives som <code>beq x0, x0, L</code> eller <code>jal x0, L</code> (assembleren godtar <code>j L</code>). Brukes til å hoppe over else-grenen og tilbake til toppen av en løkke.</p>',
      more: C + '#beslutninger'
    },
    'grunnblokk': {
      term: 'Grunnblokk',
      alias: 'basic block',
      def: '<p>En sekvens av instruksjoner uten hopp (unntatt eventuelt på slutten) og uten hoppmål eller etiketter (unntatt eventuelt i starten). Kompilatorer deler programmet i grunnblokker tidlig i oversettelsen.</p>',
      more: C + '#beslutninger'
    },
    'tilstandskoder': {
      term: 'Tilstandskoder (flagg)',
      alias: 'condition codes, flags',
      def: '<p>Ekstra bit som registrerer hva som skjedde i en instruksjon (negativt resultat, null, overflyt), brukt av ARM til betingede hopp. RISC-V har dem ikke: hoppene sammenlikner registre direkte. Ulempen med flagg er avhengigheter som vanskeliggjør samlebånd.</p>',
      more: C + '#beslutninger'
    },
    'hopptabell': {
      term: 'Hopptabell',
      alias: 'branch address table, jump table',
      def: '<p>En tabell av adresser til alternative instruksjonssekvenser, brukt til case/switch: programmet indekserer tabellen og hopper til adressen i et register med det indirekte hoppet jalr.</p>',
      more: C + '#beslutninger'
    },
    'jalr': {
      term: 'jalr (jump-and-link register)',
      alias: 'indirekte hopp, indirect jump',
      def: '<p>Ubetinget hopp til adressen i et register pluss en 12-bits konstant, med retur­adressen lagret i rd. <code>jalr x0, 0(x1)</code> er returen fra en prosedyre; med lui foran når den hvilken som helst 32-bits adresse; brukes også til hopptabeller.</p>',
      more: E + '#kall'
    },

    /* ── T2.2 Heltall og logiske operasjoner ── */
    'binaertall': {
      term: 'Binærtall (grunntall 2)',
      alias: 'binary number',
      def: '<p>Tall skrevet med sifrene 0 og 1, der siffer nummer <em>i</em> (fra høyre, fra 0) har verdien d · 2<sup>i</sup>. 1011<sub>to</sub> = 8 + 0 + 2 + 1 = 11. Maskinvaren lagrer tall som høye og lave signaler, derfor grunntall 2.</p>',
      more: D + '#grunntall'
    },
    'lsb-msb': {
      term: 'Minst og mest signifikante bit',
      alias: 'least significant bit, most significant bit, LSB, MSB',
      def: '<p>Bit 0, helt til høyre, er det minst signifikante; bit 31, helt til venstre i et RISC-V-ord, er det mest signifikante. I tokomplement er bit 31 fortegnsbiten.</p>',
      more: D + '#grunntall'
    },
    'usignert': {
      term: 'Usignerte tall',
      alias: 'unsigned',
      def: '<p>De 2<sup>32</sup> bitmønstrene tolket som tallene 0 til 2<sup>32</sup> − 1 = 4 294 967 295. Minneadresser er usignerte: negative adresser gir ikke mening. C skiller int og unsigned int.</p>',
      more: D + '#grunntall'
    },
    'fortegn-storrelse': {
      term: 'Fortegn og størrelse',
      alias: 'sign and magnitude',
      def: '<p>Den opplagte, forkastede representasjonen: én bit for fortegnet, resten for størrelsen. Uklart hvor fortegnsbiten skal stå, adderere trenger et ekstra steg, og det finnes både +0 og −0.</p>',
      more: D + '#tokomplement'
    },
    'tokomplement': {
      term: 'Tokomplement',
      alias: "two's complement, 2’s komplement",
      def: '<p>Representasjonen alle datamaskiner bruker for signerte heltall: ledende 0 betyr positivt, ledende 1 negativt. Verdien er −x<sub>31</sub>·2<sup>31</sup> + Σ x<sub>i</sub>·2<sup>i</sup>. Spenner −2<sup>31</sup> til 2<sup>31</sup> − 1; ett negativt tall uten positiv motpart. Navnet: usignert sum av et tall og dets negative er 2<sup>n</sup>.</p>',
      more: D + '#tokomplement'
    },
    'fortegnsbit': {
      term: 'Fortegnsbit',
      alias: 'sign bit',
      def: '<p>Det mest signifikante bitet i et tokomplementtall. Alle negative tall har 1 der, så maskinvaren trenger bare teste det ene bitet for å se om et tall er negativt (0 regnes som positivt). Vekten er −2<sup>31</sup>.</p>',
      more: D + '#tokomplement'
    },
    'negering': {
      term: 'Negering (snarvei)',
      alias: 'negation shortcut, inverter og legg til 1',
      def: '<p>Inverter hvert bit og legg til 1. Virker fordi x + x̄ = 111…111 = −1, så x̄ + 1 = −x. 2 = 0…0010 → 1…1101 + 1 = 1…1110 = −2.</p>',
      more: D + '#tokomplement'
    },
    'fortegnsutvidelse': {
      term: 'Fortegnsutvidelse',
      alias: 'sign extension',
      def: '<p>Å gjøre et n-bits tall til et bredere tall ved å kopiere fortegnsbiten inn i alle de nye bitene. Beholder verdien fordi positive tokomplementtall egentlig har uendelig mange 0-ere foran, negative uendelig mange 1-ere. Brukes av lb og lh og på 12-bits immediates.</p>',
      more: D + '#tokomplement'
    },
    'lb-lbu': {
      term: 'lb, lbu, lh, lhu',
      alias: 'load byte, load byte unsigned, load half',
      def: '<p>Lastinstruksjoner for byte og halvord. lb og lh fortegnsutvider til 32 bit (signert tall), lbu og lhu fyller med nuller (usignert). Tegn i C er byte, så lbu brukes nesten alltid til tekst. sb og sh lagrer de laveste 8 og 16 bitene.</p>',
      more: D + '#tokomplement'
    },
    'overflyt': {
      term: 'Overflyt',
      alias: 'overflow',
      def: '<p>Når resultatet av en operasjon ikke kan representeres med bitene maskinvaren har. For tokomplement: fortegnsbiten blir feil, en 0 der tallet skulle vært negativt eller en 1 der det skulle vært positivt. Summen av to positive tall blir negativ, eller to negative blir positivt. Programmeringsspråket og operativsystemet avgjør hva som skjer.</p>',
      more: D + '#overflyt'
    },
    'logiske-operasjoner': {
      term: 'Logiske operasjoner',
      alias: 'logical operations, and, or, xor, andi, ori, xori',
      def: '<p>Bitvise operasjoner på felt av bit i et ord: AND gir 1 bare der begge er 1, OR der minst én er 1, XOR der de er ulike. RISC-V har and/or/xor med registre og andi/ori/xori med konstant. NOT finnes ikke; bruk xor med 111…111.</p>',
      more: D + '#logikk'
    },
    'maske': {
      term: 'Maske',
      alias: 'mask',
      def: '<p>Et bitmønster som med AND «skjuler» bitene der mønsteret har 0 og slipper gjennom bitene der det har 1. Brukes til å isolere et felt i et ord. Alternativet er et venstreskift fulgt av et høyreskift.</p>',
      more: D + '#logikk'
    },
    'skift': {
      term: 'Skift',
      alias: 'shift, slli, srli, srai, sll, srl, sra',
      def: '<p>Flytter alle bitene i et ord til venstre eller høyre. Logisk skift fyller de tomme bitene med 0; aritmetisk høyreskift (srai) fyller med kopier av fortegnsbiten. Venstreskift med i bit er det samme som å gange med 2<sup>i</sup>: 9 &lt;&lt; 4 = 144. Immediatevariantene bruker I-format med funct6/funct7.</p>',
      more: D + '#skift'
    },

    /* ── T2.3 Funksjonskall ── */
    'prosedyre': {
      term: 'Prosedyre (funksjon)',
      alias: 'procedure, function, subroutine',
      def: '<p>Lagret subrutine som utfører en bestemt oppgave ut fra parametrene den får. Som en spion: drar av sted med en hemmelig plan, skaffer ressurser, gjør jobben, dekker sporene og vender tilbake med resultatet uten å ha forstyrret noe annet. Abstraksjon i programvare.</p>',
      more: E + '#kall'
    },
    'jal': {
      term: 'jal (jump-and-link)',
      def: '<p>Instruksjonen for prosedyrekall: hopper til en adresse og lagrer samtidig adressen til neste instruksjon (PC + 4) i rd, vanligvis x1. <code>jal x1, ProsedyreAdresse</code>. Med rd = x0 forkastes returadressen og jal blir et ubetinget hopp.</p>',
      more: E + '#kall'
    },
    'returadresse': {
      term: 'Returadresse',
      alias: 'return address, ra, x1',
      def: '<p>Lenken til kallstedet som lar prosedyren returnere til riktig adresse; i RISC-V lagret i x1 (ra). Nødvendig fordi samme prosedyre kan kalles fra mange steder. Returen er <code>jalr x0, 0(x1)</code>.</p>',
      more: E + '#kall'
    },
    'kaller-kallet': {
      term: 'Kaller og kallet (caller, callee)',
      alias: 'caller, callee',
      def: '<p>Kalleren er programmet som setter i gang prosedyren og leverer parameterverdiene (i x10–x17) og bruker jal. Den kalte utfører beregningene, legger resultatet i samme registre og returnerer med jalr.</p>',
      more: E + '#kall'
    },
    'pc': {
      term: 'Programteller (PC)',
      alias: 'program counter',
      def: '<p>Registeret som holder adressen til instruksjonen som utføres. Et bedre navn hadde vært instruksjonsadresseregister. jal lagrer PC + 4 som returadresse; hopp regnes relativt til PC.</p>',
      more: E + '#kall'
    },
    'stakk': {
      term: 'Stakk',
      alias: 'stack, LIFO',
      def: '<p>Datastruktur for spilling av registre, organisert sist-inn-først-ut. Vokser fra høye til lave adresser: push trekker fra stakkpekeren, pop legger til. Holder lagrede registre og lokale variabler som ikke får plass i registre.</p>',
      more: E + '#stakk'
    },
    'stakkpeker': {
      term: 'Stakkpeker (sp, x2)',
      alias: 'stack pointer',
      def: '<p>Registeret som peker på den sist tildelte adressen på stakken, altså hvor neste prosedyre skal legge registre den spiller, eller hvor gamle verdier finnes. Justeres ett ord (4 byte) per register som lagres. Programvaren skal holde sp justert til 16 byte.</p>',
      more: E + '#stakk'
    },
    'push-pop': {
      term: 'Push og pop',
      def: '<p>Push legger et element på stakken (<code>addi sp, sp, -4</code> og <code>sw</code>), pop tar det av (<code>lw</code> og <code>addi sp, sp, 4</code>). Kompilatoren gjør gjerne én justering av sp for alle registrene på en gang.</p>',
      more: E + '#stakk'
    },
    'temporaere': {
      term: 'Temporære registre (t0–t6)',
      alias: 'temporary registers, x5–x7, x28–x31',
      def: '<p>Sju registre som den kalte <em>ikke</em> trenger å bevare. Kalleren må selv lagre dem hvis den trenger verdiene etter kallet. En løvprosedyre bør bruke opp de temporære før den rører lagrede registre.</p>',
      more: E + '#stakk'
    },
    'lagrede-registre': {
      term: 'Lagrede registre (s0–s11)',
      alias: 'saved registers, x8–x9, x18–x27',
      def: '<p>Tolv registre som må bevares over et prosedyrekall: bruker den kalte dem, må den lagre dem på stakken først og gjenopprette dem før retur. Konvensjonen reduserer spilling: gjør det vanlige tilfellet raskt.</p>',
      more: E + '#stakk'
    },
    'kallkonvensjon': {
      term: 'Kallkonvensjon',
      alias: 'calling convention, registerkonvensjon, figur 2.14',
      def: '<p>Avtalen om hvordan registrene brukes ved kall: x10–x17 (a0–a7) argumenter og returverdier, x1 (ra) returadresse, x2 (sp) stakkpeker, x5–x7 og x28–x31 (t0–t6) temporære som ikke bevares, x8–x9 og x18–x27 (s0–s11) bevares av den kalte, x3 (gp) globalpeker, x8 også rammepeker (fp).</p>',
      more: E + '#stakk'
    },
    'lovprosedyre': {
      term: 'Løvprosedyre',
      alias: 'leaf procedure',
      def: '<p>Prosedyre som ikke kaller andre prosedyrer. Slipper å lagre returadressen og argumentregistrene, og kan bruke temporære registre fritt. Prosedyrer som kaller andre (ikke-løv) må legge x1 og eventuelle argumenter på stakken før kallet.</p>',
      more: E + '#nostede'
    },
    'rekursjon': {
      term: 'Rekursiv prosedyre',
      alias: 'recursion, fact, tail call',
      def: '<p>Prosedyre som kaller en «klone» av seg selv, som fact(n) = n · fact(n − 1). Hvert kall får sin egen ramme på stakken med returadresse og argument. Et halekall (tail call) kan skrives om til en løkke uten stakk.</p>',
      more: E + '#nostede'
    },
    'aktiveringspost': {
      term: 'Prosedyreramme (aktiveringspost)',
      alias: 'procedure frame, activation record, stack frame',
      def: '<p>Segmentet av stakken som inneholder en prosedyres lagrede registre og lokale variabler (tabeller og strukturer som ikke får plass i registre). Rammepekeren fp (x8) peker på første ord i rammen og gir et stabilt basisregister selv om sp endres.</p>',
      more: E + '#nostede'
    },
    'minnekart': {
      term: 'RISC-V-minnekartet (figur 2.13)',
      alias: 'memory allocation, tekstsegment, statisk data, heap, stakk',
      def: '<p>Programvarekonvensjonen for minnet: reservert område nederst, så tekstsegmentet med maskinkoden fra 0x0040 0000, statisk data fra 0x1000 0000, dynamisk data (heap, malloc/new) som vokser oppover, og stakken fra 0x3fff fff0 som vokser nedover. Heap og stakk vokser mot hverandre.</p>',
      more: E + '#nostede'
    },
    'statisk-dynamisk': {
      term: 'Statiske og dynamiske data',
      alias: 'static, automatic, heap, malloc',
      def: '<p>Automatiske variabler er lokale for en prosedyre og forsvinner når den avslutter (ligger i registre eller på stakken). Statiske variabler lever gjennom hele programmet (globale og <code>static</code>) i det statiske datasegmentet, som gp (x3) peker på. Dynamiske data (lenkede lister) vokser og krymper og ligger på heapen, tildelt med malloc() og frigitt med free().</p>',
      more: E + '#nostede'
    },

    /* ── T2.4 Instruksjoner, diverse ── */
    'ascii': {
      term: 'ASCII',
      alias: 'American Standard Code for Information Interchange, tegn, Unicode',
      def: '<p>Standarden nesten alle bruker for tegn i 8-bits byte: «A» er 65, «a» er 97, store og små bokstaver skiller med nøyaktig 32, «0»–«9» er 48–57, 0 er null (slutt på streng i C). Java bruker Unicode med 16 bit per tegn (UTF-16); nettet bruker mest UTF-8.</p>',
      more: E + '#tekst'
    },
    'streng': {
      term: 'Streng',
      alias: 'string, null-terminert',
      def: '<p>Variabelt antall tegn. Tre måter å angi lengden på: første posisjon holder lengden, en egen variabel holder den, eller et sluttegn. C bruker sluttegnet 0: «Cal» er 67, 97, 108, 0. Java lagrer lengden i et eget ord.</p>',
      more: E + '#tekst'
    },
    'lui': {
      term: 'lui (load upper immediate)',
      alias: 'U-type, 32-bits konstant',
      def: '<p>Laster en 20-bits konstant inn i bit 12–31 av et register og fyller de 12 laveste med 0. Sammen med addi bygger den en vilkårlig 32-bits konstant på to instruksjoner. Er bit 11 i konstanten 1, fortegnsutvides addi-delen negativt, og lui-konstanten må økes med 1.</p>',
      more: E + '#adressering'
    },
    'pc-relativ': {
      term: 'PC-relativ adressering',
      alias: 'PC-relative addressing',
      def: '<p>Hoppadressen er PC pluss en konstant i instruksjonen, regnet i halvord. Betingede hopp når ±4 KiB (12-bits felt, 13-bits byteadresse), jal når ±1 MiB (20-bits felt). Valgt fordi løkker og if-setninger hopper til instruksjoner i nærheten: halvparten av alle betingede hopp går under 16 instruksjoner av gårde.</p>',
      more: E + '#adressering'
    },
    'adressemodus': {
      term: 'Adressemodi i RISC-V',
      alias: 'addressing modes, immediate, register, base, PC-relative',
      def: '<p>De fire måtene en operand identifiseres på: 1) immediate, konstanten ligger i instruksjonen; 2) register, operanden er et register; 3) basis- eller forskyvningsadressering, operanden ligger i minnet på adressen register + konstant; 4) PC-relativ, hoppadressen er PC + konstant.</p>',
      more: E + '#adressering'
    },
    'sb-uj': {
      term: 'SB- og UJ-formatene',
      alias: 'branch format, jump format',
      def: '<p>Formatene for betingede hopp (SB, 12-bits immediate delt i to felt som S-type) og jal (UJ, 20-bits immediate som U-type), men med bitene i immediate-feltet «virvlet rundt» for å forenkle maskinvaren. Kapittel 2 later som de er S og U; kapittel 4 viser de ekte.</p>',
      more: E + '#adressering'
    },
    'pseudoinstruksjon': {
      term: 'Pseudoinstruksjon',
      alias: 'pseudoinstruction, li, mv, j, la, not',
      def: '<p>Vanlig variant av en maskininstruksjon som assembleren godtar som om den var en ekte instruksjon: <code>li x9, 123</code> blir <code>addi x9, x0, 123</code>, <code>mv x10, x11</code> blir <code>addi x10, x11, 0</code>, <code>j L</code> blir <code>jal x0, L</code>. Gir rikere assembly uten mer maskinvare.</p>',
      more: E + '#oversettelse'
    },
    'symboltabell': {
      term: 'Symboltabell',
      alias: 'symbol table',
      def: '<p>Tabell som kobler navn på etiketter til adressene til minneordene instruksjonene opptar. Assembleren bygger den for å oversette hopp og dataadresser; etiketter som ikke er definert i modulen (eksterne referanser) blir igjen til lenkeren.</p>',
      more: E + '#oversettelse'
    },
    'objektfil': {
      term: 'Objektfil',
      alias: 'object file, .o',
      def: '<p>Assemblerens resultat: maskininstruksjoner, data og informasjon for å plassere dem i minnet. Seks deler i UNIX: filhode, tekstsegment, statisk datasegment, relokeringsinformasjon, symboltabell og feilsøkingsinformasjon.</p>',
      more: E + '#oversettelse'
    },
    'lenker': {
      term: 'Lenker',
      alias: 'linker, link editor',
      def: '<p>Systemprogram som syr sammen uavhengig assemblerte maskinspråkprogrammer og løser opp alle udefinerte etiketter til en kjørbar fil. Tre steg: plasser kode og data symbolsk i minnet, bestem adressene til etikettene, lapp interne og eksterne referanser. Mye raskere enn å rekompilere alt.</p>',
      more: E + '#oversettelse'
    },
    'laster': {
      term: 'Laster',
      alias: 'loader',
      def: '<p>Systemprogram som legger et objektprogram i hovedminnet klart til kjøring: leser filhodet, lager adresserom, kopierer instruksjoner og data, legger parametre på stakken, initialiserer registre og sp, og hopper til en oppstartsrutine som kaller main.</p>',
      more: E + '#oversettelse'
    },
    'dll': {
      term: 'Dynamisk lenkede biblioteker (DLL)',
      alias: 'dynamically linked libraries, lazy procedure linkage',
      def: '<p>Biblioteksrutiner som lenkes til programmet først under kjøring, ikke før. Unngår at hele biblioteket (1,5 MiB for C-biblioteket) kopieres inn, og at gamle versjoner sitter fast. «Lat» lenking: første kall går via en dummy-rutine og den dynamiske lenkeren, senere kall via ett indirekte hopp.</p>',
      more: E + '#oversettelse'
    },
    'jit': {
      term: 'Java bytekode, JVM og JIT',
      alias: 'Java Virtual Machine, Just In Time compiler, tolk',
      def: '<p>Java kompileres til bytekode, et instruksjonssett laget for å tolkes. JVM er tolken (en tolk er et program som simulerer en ISA, som RISC-V-simulatoren i faget). For ytelse kompilerer en JIT-kompilator de «varme» metodene til maskinens eget instruksjonssett under kjøring. Fordelen med tolking er maskinuavhengighet.</p>',
      more: E + '#oversettelse'
    },
    /* ── T3.2 Kombinatorisk logikk (3A) ── */
    'kombinatorisk-element': {
      term: 'Kombinatorisk element',
      alias: 'combinational element, kombinatorisk logikk',
      def: '<p>Logikk uten minne: utgangen avhenger bare av inngangene akkurat nå. ALU, addere, muxer og dekodere er kombinatoriske. Motsatsen er tilstandselementer, som husker.</p>',
      more: F + '#porter'
    },
    'sannhetstabell': {
      term: 'Sannhetstabell',
      alias: 'truth table',
      def: '<p>Tabell over alle 2<sup>n</sup> kombinasjoner av n innganger med utgangsverdien for hver. Beskriver en kombinatorisk funksjon fullstendig, og er utgangspunktet for sum-av-produkt-formen.</p>',
      more: F + '#porter'
    },
    'logisk-likning': {
      term: 'Logisk likning',
      alias: 'logic equation, boolsk algebra',
      def: '<p>Funksjon skrevet med AND (·), OR (+) og NOT (strek over). Følger lovene i boolsk algebra: identitet, invers, kommutativ, assosiativ, distributiv og De Morgan.</p>',
      more: F + '#porter'
    },
    'de-morgan': {
      term: 'De Morgans lover',
      alias: "DeMorgan's theorems",
      def: '<p>¬(A · B) = Ā + B̄ og ¬(A + B) = Ā · B̄. Lar deg bytte AND og OR ved å invertere inngangene og utgangen, og er grunnen til at NAND og NOR hver for seg kan bygge alt.</p>',
      more: F + '#porter'
    },
    'universell-port': {
      term: 'Universell port',
      alias: 'NAND, NOR, universal gate',
      def: '<p>En port som alene kan bygge AND, OR og NOT, og dermed enhver logisk funksjon. NAND og NOR er universelle (oppgave A.5, A.6); også en toinngangs mux er det (A.10).</p>',
      more: F + '#porter'
    },
    'sum-av-produkt': {
      term: 'Sum av produkter',
      alias: 'sum of products, SOP, to-nivå-logikk',
      def: '<p>Logisk funksjon skrevet som OR av AND-ledd, der hvert ledd inneholder hver inngang rett eller invertert. Lages mekanisk fra sannhetstabellen: ett produktledd per rad med utgang 1. Gir en krets med to lag porter.</p>',
      more: F + '#sop'
    },
    'tonivaa-logikk': {
      term: 'To-nivå-logikk',
      alias: 'two-level logic',
      def: '<p>Krets med ett lag AND-porter og ett lag OR-porter (eller omvendt), med invertere bare på inngangene. Enhver funksjon kan skrives slik (sum av produkter eller produkt av summer).</p>',
      more: F + '#sop'
    },
    'pla': {
      term: 'PLA',
      alias: 'programmable logic array, programmerbar logikkmatrise',
      def: '<p>Sum av produkter i maskinvare: en AND-matrise som lager produktleddene og en OR-matrise som summerer dem til hver utgang. Tar bare med leddene som trengs, og lar utganger dele ledd.</p>',
      more: F + '#sop'
    },
    'rom': {
      term: 'ROM',
      alias: 'read-only memory',
      def: '<p>Lesbart minne brukt som logikk: inngangen er adressen, utgangen er lagret innhold, så hele sannhetstabellen ligger i ROM-en. Enkelt, men størrelsen er 2<sup>n</sup> ord uansett hvor få 1-ere funksjonen har.</p>',
      more: F + '#sop'
    },
    'mux': {
      term: 'Multiplekser (mux)',
      alias: 'multiplexor, selector, velger',
      def: '<p>Velger én av n datainnganger etter log<sub>2</sub> n velgerbit og sender den til utgangen. Toinngangsmux: C = A·S̄ + B·S. Står overalt i datastien der to kilder vil inn på samme inngang (ALUSrc, MemtoReg, PCSrc).</p>',
      more: F + '#mux'
    },
    'dekoder': {
      term: 'Dekoder',
      alias: 'decoder',
      def: '<p>n bit inn, 2<sup>n</sup> utganger, og nøyaktig én utgang er 1: den med nummer lik inngangsverdien. Peker ut ett register av 32 i registerfilen eller én rad i et minne. En stor mux er en dekoder pluss AND-porter og én OR-port.</p>',
      more: F + '#mux'
    },
    'buss': {
      term: 'Buss',
      alias: 'bus, A[31:0]',
      def: '<p>Samling signaler som hører sammen, tegnet som én strek med bredden skrevet på. A[31:0] er alle 32 linjene, A[7:4] linjene 7 til 4, A[0] én linje. Slik plukkes feltene (rs1 = Instruction[19:15]) ut av instruksjonsordet, uten logikk.</p>',
      more: F + '#mux'
    },
    'dont-care': {
      term: 'Don\'t care (X)',
      alias: 'don\'t-care term',
      def: '<p>Et signal eller en tabellrad som ikke påvirker resultatet, markert X. I kontrollordet: MemtoReg er X når RegWrite = 0; funct-feltene er X når ALUOp ikke er 10. Riktig bruk av X teller på eksamen, og X der det må være en verdi er feil.</p>',
      more: G + '#kontroll'
    },

    /* ── T3.3 ALU og aritmetikk (3B) ── */
    'mente': {
      term: 'Mente',
      alias: 'carry, CarryIn, CarryOut',
      def: '<p>Det som bæres videre fra én bitposisjon til den neste i addisjon: 1 + 1 = 10 gir sum 0 og mente 1. CarryIn kommer fra posisjonen under, CarryOut går til posisjonen over.</p>',
      more: H + '#addisjon'
    },
    'fulladder': {
      term: '1-bits adder (fulladder)',
      alias: 'full adder',
      def: '<p>Krets som legger sammen tre bit, a, b og CarryIn, og gir Sum og CarryOut. Sum = a ⊕ b ⊕ CarryIn; CarryOut = 1 når minst to av inngangene er 1. Byggesteinen i hver 1-bits ALU.</p>',
      more: H + '#alu'
    },
    'ripple-carry': {
      term: 'Ripple-carry-adder',
      alias: 'ripple carry',
      def: '<p>32 1-bits addere der CarryOut fra bit i er CarryIn til bit i + 1. Enkel, men menten må vandre gjennom alle 32 trinnene i verste fall. Carry lookahead (A.6) er raskere.</p>',
      more: H + '#alu'
    },
    '1-bit-alu': {
      term: '1-bits ALU',
      alias: '1-bit ALU, figur A.5.10',
      def: '<p>Én celle av ALU-en: AND-port, OR-port og adder på a og b, pluss Less-inngangen, inn i en 4:1-mux styrt av Operation. Ainvert og Binvert velger a/¬a og b/¬b på inngangene. 32 slike i kjede er hele ALU-en.</p>',
      more: H + '#alu'
    },
    'alu': {
      term: 'ALU',
      alias: 'arithmetic logic unit, aritmetisk-logisk enhet',
      def: '<p>Enheten som regner: AND, OR, add, sub og slt på to 32-bits operander, med utgangene Result, Zero og Overflow. Bygget av 32 1-bits ALU-er i ripple-carry-kjede, styrt av Ainvert, Bnegate og Operation (sammen de 4 ALU-kontrollbitene).</p>',
      more: H + '#alu'
    },
    'bnegate': {
      term: 'Bnegate',
      alias: 'Binvert, Ainvert, Operation',
      def: '<p>Kontrollsignalet som gjør subtraksjon: inverterer b i alle 32 cellene (Binvert) og setter CarryIn i bit 0 til 1, slik at adderen regner a + ¬b + 1 = a − b. Sammen med Ainvert (inverter a) og Operation (2 bit, velger AND/OR/adder/Less) utgjør det ALU-ens kontroll.</p>',
      more: H + '#alu'
    },
    'overflytdeteksjon': {
      term: 'Overflytdeteksjon',
      alias: 'overflow detection, Set, Zero',
      def: '<p>Logikk i ALU31 som melder overflyt når CarryIn og CarryOut i fortegnsbiten er ulike. ALU31 gir også Set, adderens fortegnsbit, som sendes til Less i bit 0 for slt. Zero = NOR av alle resultatbitene.</p>',
      more: H + '#alu'
    },
    'multiplikand': {
      term: 'Multiplikand',
      alias: 'multiplicand',
      def: '<p>Det første tallet i en multiplikasjon, det som adderes til produktet når multiplikatorbiten er 1. I bokas første maskinvare ligger den i et 64-bits register som skiftes ett steg til venstre per iterasjon.</p>',
      more: H + '#multiplikasjon'
    },
    'multiplikator': {
      term: 'Multiplikator',
      alias: 'multiplier',
      def: '<p>Det andre tallet i en multiplikasjon; bitene testes ett om gangen fra høyre. Registeret skiftes ett steg til høyre per iterasjon så neste bit havner i posisjon 0 (Multiplier0).</p>',
      more: H + '#multiplikasjon'
    },
    'produkt': {
      term: 'Produkt',
      alias: 'product',
      def: '<p>Resultatet av multiplikasjonen, n + m bit langt for n-bits multiplikand og m-bits multiplikator. Starter på 0 og akkumulerer delproduktene: Product = Product + Multiplicand når Multiplier0 = 1.</p>',
      more: H + '#multiplikasjon'
    },
    'dividend': {
      term: 'Dividend',
      alias: 'dividend',
      def: '<p>Tallet som deles: dividend = kvotient × divisor + rest. Legges i Remainder-registeret ved start.</p>',
      more: H + '#divisjon'
    },
    'divisor': {
      term: 'Divisor',
      alias: 'divisor',
      def: '<p>Tallet det deles med. Starter i venstre halvdel av et dobbelt så bredt register og skiftes ett steg til høyre per iterasjon.</p>',
      more: H + '#divisjon'
    },
    'kvotient': {
      term: 'Kvotient',
      alias: 'quotient',
      def: '<p>Resultatet av heltallsdivisjonen. Bygges bit for bit: skiftes venstre hver iterasjon, og bit 0 settes til 1 hvis subtraksjonen av divisoren ga rest ≥ 0, ellers 0.</p>',
      more: H + '#divisjon'
    },
    'rest': {
      term: 'Rest',
      alias: 'remainder',
      def: '<p>Det som blir igjen: dividend − kvotient × divisor. Har samme fortegn som dividenden ved signert divisjon. RISC-V: rem/remu.</p>',
      more: H + '#divisjon'
    },
    'flyttall': {
      term: 'Flyttall',
      alias: 'floating point, IEEE 754',
      def: '<p>Tall i vitenskapelig notasjon i base 2: (−1)<sup>s</sup> × (1 + brøk) × 2<sup>eksponent − bias</sup>. Enkel presisjon: 1 fortegnsbit, 8 bits eksponent (bias 127), 23 bits brøk. Dekker både 3,14 og 10<sup>−38</sup>, i motsetning til heltall.</p>',
      more: H + '#flyttall'
    },
    'normalisert': {
      term: 'Normalisert tall',
      alias: 'normalized, signifikand, implisitt 1',
      def: '<p>Flyttall skrevet med nøyaktig ett ikke-null siffer foran kommaet: 1,xxx × 2<sup>y</sup>. Siden sifferet alltid er 1 i base 2, lagres det ikke; signifikanden er 1 + brøk, og brøkfeltet får ett bit ekstra presisjon.</p>',
      more: H + '#flyttall'
    },
    'bias': {
      term: 'Bias (127)',
      alias: 'exponent bias',
      def: '<p>Tallet som legges til eksponenten før lagring: 2<sup>2</sup> lagres som 129, 2<sup>−1</sup> som 126. Enkel presisjon bruker 127, dobbel 1023. Gjør eksponentfeltet usignert, så flyttall kan sammenliknes som heltall.</p>',
      more: H + '#flyttall'
    },
    'biased-notasjon': {
      term: 'Biased notasjon',
      alias: 'biased notation',
      def: '<p>Representasjon der den lagrede verdien er den faktiske pluss en konstant (bias), så det minste tallet lagres som 000…0 og det største som 111…1. Brukes for eksponenten i IEEE 754.</p>',
      more: H + '#flyttall'
    },
    'dobbel-presisjon': {
      term: 'Dobbel presisjon',
      alias: 'double precision, single precision, enkel presisjon',
      def: '<p>64-bits flyttall: 1 fortegnsbit, 11 bits eksponent (bias 1023), 52 bits brøk. Enkel presisjon er 32 bit (8 + 23, bias 127). C: double og float. Halv presisjon (16 bit) finnes også.</p>',
      more: H + '#flyttall'
    },
    'nan': {
      term: 'NaN og uendelig',
      alias: 'Not a Number, infinity',
      def: '<p>Spesialverdier med eksponentfelt 255: brøk 0 betyr ±∞ (resultat av overflyt eller 1/0), brøk ≠ 0 betyr NaN, «ikke et tall» (0/0, √−1). Eksponent 0 og brøk 0 er tallet 0.</p>',
      more: H + '#flyttall'
    },
    'flyttallsoverflyt': {
      term: 'Flyttallsoverflyt',
      alias: 'overflow (floating point)',
      def: '<p>Resultatets eksponent er for stor til å få plass i eksponentfeltet (over 2<sup>127</sup> i enkel presisjon). Gir uendelig etter IEEE 754.</p>',
      more: H + '#flyttall'
    },
    'underflyt': {
      term: 'Underflyt',
      alias: 'underflow',
      def: '<p>Resultatets eksponent er for liten (tallet er for nær 0) til å representeres normalisert. IEEE 754 har denormaliserte tall som mykner overgangen til 0.</p>',
      more: H + '#flyttall'
    },
    'subord-parallellitet': {
      term: 'Subord-parallellitet',
      alias: 'subword parallelism',
      def: '<p>Å dele et bredt register (128 bit) i flere smale felt (16 × 8, 8 × 16 eller 4 × 32 bit) og regne på alle feltene med én instruksjon. Maskinvaren er en bred adder med mentekjeden kuttet ved feltgrensene. Grunnlaget for SIMD-utvidelser.</p>',
      more: H + '#simd'
    },
    'simd': {
      term: 'SIMD',
      alias: 'single instruction, multiple data',
      def: '<p>Én instruksjon som utfører samme operasjon på mange dataelementer samtidig, for eksempel fire flyttallsaddisjoner i ett 128-bits register. Brukes i grafikk, lyd og maskinlæring (x86 SSE/AVX, RISC-V-vektorutvidelsen). Én av klassene i Flynns taksonomi.</p>',
      more: H + '#simd'
    },
    'fastpunkt': {
      term: 'Fastpunkt',
      alias: 'fixed point',
      def: '<p>Heltall der et fast antall bit regnes som desimaler (verdien er heltallet delt på 2<sup>k</sup>). Rask og billig aritmetikk med jevn presisjon, men lite og fast tallområde; programmereren må holde styr på kommaet. Flyttall løser det med eksponenten.</p>',
      more: H + '#simd'
    },

    /* ── T3.1 Enkeltsykelprosessor (3C) ── */
    'enkeltsykelprosessor': {
      term: 'Enkeltsykelprosessor',
      alias: 'single-cycle implementation',
      def: '<p>Prosessor der hver instruksjon utføres fullstendig i én klokkesykel: hent, les registre, ALU, minne, skriv tilbake. CPI = 1, men klokkeperioden må være lang nok for den tregeste instruksjonen (lw), så ytelsen er dårlig.</p>',
      more: G + '#overblikk'
    },
    'tilstandselement': {
      term: 'Tilstandselement',
      alias: 'state element',
      def: '<p>Enhet som husker: PC, registerfil, minner. Har data- og klokkeinngang og oppdateres bare på klokkeflanken. Alt som er lagret i tilstandselementene er prosessorens tilstand.</p>',
      more: G + '#overblikk'
    },
    'kantstyrt-klokking': {
      term: 'Kantstyrt klokking',
      alias: 'edge-triggered clocking',
      def: '<p>Klokkemetode der tilstandselementer bare oppdateres på klokkeflanken. Mellom to flanker leser kombinatorisk logikk fra tilstandselementene og legger resultatet klart på inngangene. Gjør at samme register kan leses og skrives i én sykel.</p>',
      more: G + '#overblikk'
    },
    'instruksjonsminne': {
      term: 'Instruksjonsminne',
      alias: 'instruction memory, dataminne, data memory',
      def: '<p>Minnet datastien henter instruksjoner fra, adressert av PC; bare lest. Dataminnet er det lw/sw bruker, med MemRead og MemWrite. I enkeltsykeldatastien er de to separate enheter fordi begge brukes i samme sykel.</p>',
      more: G + '#datasti'
    },
    'registerfil': {
      term: 'Registerfil',
      alias: 'register file',
      def: '<p>De 32 registrene som én enhet: to leseporter (Les register 1/2 → Les data 1/2), én skriveport (Skriv register, Skriv data) og skrivesignalet RegWrite. Leser alltid; skriver bare på flanken når RegWrite = 1.</p>',
      more: G + '#datasti'
    },
    'imm-gen': {
      term: 'Imm Gen',
      alias: 'immediate generation, sign extension unit, fortegnsutvider',
      def: '<p>Enheten som plukker den 12-bits immediaten ut av instruksjonsordet (ulik plassering for I-, S- og SB-format, valgt etter opcoden) og fortegnsutvider den til 32 bit for ALU-en eller hoppadderen.</p>',
      more: G + '#datasti'
    },
    'hoppmaal': {
      term: 'Hoppmål',
      alias: 'branch target address',
      def: '<p>Adressen et betinget hopp går til: PC + (fortegnsutvidet immediate × 2). Skiftet med ett steg fordi immediaten teller halvord. Regnes av en egen adder parallelt med ALU-ens sammenlikning.</p>',
      more: G + '#datasti'
    },
    'hovedkontroll': {
      term: 'Hovedkontroll',
      alias: 'main control unit, kontrollenhet',
      def: '<p>Kontrollenheten som ser bare på opcoden (bit 6:0) og setter ALUSrc, MemtoReg, RegWrite, MemRead, MemWrite, Branch og det 2-bits ALUOp. Kan implementeres som en PLA fra sannhetstabellen i figur 4.26.</p>',
      more: G + '#kontroll'
    },
    'aluop': {
      term: 'ALUOp',
      alias: 'ALUOp',
      def: '<p>2-bits signal fra hovedkontrollen til ALU-kontrollen: 00 = add (lw/sw), 01 = subtract (beq), 10 = la funct-feltene bestemme (R-type).</p>',
      more: G + '#kontroll'
    },
    'alu-kontroll': {
      term: 'ALU-kontroll',
      alias: 'ALU control',
      def: '<p>Lite kontrollnivå som tar ALUOp og funct-bitene (30, 14:12) og lager de fire ALU-kontrollbitene: 0010 add, 0110 sub, 0000 AND, 0001 OR, 0111 slt. To nivåer gjør hovedkontrollen mindre og raskere.</p>',
      more: G + '#kontroll'
    },
    'regwrite': {
      term: 'RegWrite',
      alias: 'RegWrite',
      def: '<p>Kontrollsignal: 1 betyr at registeret i Skriv register (rd) får verdien på Skriv data på klokkeflanken. 1 for R-type og lw, 0 for sw og beq. Når det er 0, er MemtoReg don\'t care.</p>',
      more: G + '#kontroll'
    },
    'alusrc': {
      term: 'ALUSrc',
      alias: 'ALUSrc',
      def: '<p>Kontrollsignal til muxen foran ALU-ens andre inngang: 0 = Les data 2 (rs2), 1 = den fortegnsutvidede immediaten. 0 for R-type og beq, 1 for lw, sw og I-type aritmetikk.</p>',
      more: G + '#kontroll'
    },
    'pcsrc': {
      term: 'PCSrc',
      alias: 'PCSrc',
      def: '<p>Kontrollsignal til muxen som velger neste PC: 0 = PC + 4, 1 = hoppmålet. Lages som Branch AND Zero: kontrollen vet om instruksjonen er et hopp, ALU-en om operandene var like. 0 for alt som ikke er hopp.</p>',
      more: G + '#kontroll'
    },
    'branch-signal': {
      term: 'Branch',
      alias: 'Branch',
      def: '<p>Hovedkontrollens signal som sier at instruksjonen er et betinget hopp (beq). AND-es med ALU-ens Zero for å gi PCSrc. 1 bare for beq.</p>',
      more: G + '#kontroll'
    },
    'memread': {
      term: 'MemRead',
      alias: 'MemRead',
      def: '<p>Kontrollsignal: 1 får dataminnet til å lese adressen (ALU-resultatet) og legge innholdet på Les data. 1 bare for lw.</p>',
      more: G + '#kontroll'
    },
    'memwrite': {
      term: 'MemWrite',
      alias: 'MemWrite',
      def: '<p>Kontrollsignal: 1 får dataminnet til å skrive Skriv data (Les data 2, rs2) til adressen på klokkeflanken. 1 bare for sw/sb/sh.</p>',
      more: G + '#kontroll'
    },
    'memtoreg': {
      term: 'MemtoReg',
      alias: 'MemtoReg',
      def: '<p>Kontrollsignal til muxen foran registerfilens Skriv data: 0 = ALU-resultatet, 1 = dataminnets Les data. 0 for R-type, 1 for lw, X for sw og beq (ingenting skrives).</p>',
      more: G + '#kontroll'
    },
    /* ── T5.1 Samlebåndsprosessor med 5 steg (5A) ── */
    'samlebaandssteg': {
      term: 'Samlebåndssteg',
      alias: 'pipeline stage, IF, ID, EX, MEM, WB',
      def: '<p>Ett av de fem trinnene en instruksjon går gjennom: IF (hent), ID (dekod og les registre), EX (ALU), MEM (dataminne) og WB (skriv tilbake). Én instruksjon i hvert steg samtidig; klokkeperioden er det tregeste steget.</p>',
      more: K + '#ide'
    },
    'balanserte-steg': {
      term: 'Balanserte steg',
      alias: 'balanced stages',
      def: '<p>Samlebåndssteg som tar like lang tid. Bare da gir k steg en speedup på k; er ett steg tregere enn de andre, bestemmer det klokka, og de raske stegene står og venter.</p>',
      more: K + '#ide'
    },
    'oppstartskostnad': {
      term: 'Oppstartskostnad',
      alias: 'pipeline fill, n + k − 1',
      def: '<p>Tiden det tar å fylle samlebåndet: den første instruksjonen trenger k sykler, de neste kommer ut én per sykel. n instruksjoner tar n + k − 1 sykler, så gevinsten nærmer seg k først når programmet er langt.</p>',
      more: K + '#ide'
    },
    'samlebaandsregister': {
      term: 'Samlebåndsregister',
      alias: 'pipeline register, IF/ID, ID/EX, EX/MEM, MEM/WB',
      def: '<p>Register mellom to steg som fanger alt steget til venstre regnet ut og holder det stabilt for steget til høyre i neste sykel. Bærer data, rd-nummeret og kontrollsignalene instruksjonen trenger senere. Navngitt etter stegene det skiller.</p>',
      more: K + '#datasti'
    },
    'samlebaandsdiagram': {
      term: 'Samlebåndsdiagram',
      alias: 'multiple-clock-cycle pipeline diagram',
      def: '<p>Tabell med instruksjonene nedover og klokkesyklene bortover, og steget (IF, ID, EX, MEM, WB) i hver rute. Hver instruksjon er forskjøvet én sykel fra den forrige; bobler vises som hull. En kolonne er et tverrsnitt: hvilken instruksjon som er i hvert steg i den sykelen.</p>',
      more: K + '#datasti'
    },
    'avhengighet': {
      term: 'Avhengighet',
      alias: 'dependence',
      def: '<p>Egenskap ved programmet: én instruksjon trenger noe en annen lager (data), eller må vite utfallet av et hopp (kontroll). En avhengighet blir bare en fare hvis samlebåndet er slik at den senere instruksjonen ikke kan utføres i sin planlagte sykel.</p>',
      more: K + '#farer'
    },
    'fare': {
      term: 'Fare',
      alias: 'hazard, pipeline hazard',
      def: '<p>Situasjon der neste instruksjon ikke kan utføres i neste klokkesykel. Tre grupper: strukturfarer, datafarer og kontrollfarer. Fire strategier: unngåelse, videresending, stans og prediksjon.</p>',
      more: K + '#farer'
    },
    'strukturfare': {
      term: 'Strukturfare',
      alias: 'structural hazard',
      def: '<p>Maskinvaren støtter ikke kombinasjonen av instruksjoner som skal utføres i samme sykel, for eksempel ett felles minne som både IF og MEM vil bruke. Unngått i RISC-V-samlebåndet med separate instruksjons- og dataminner.</p>',
      more: K + '#farer'
    },
    'datafare': {
      term: 'Datafare',
      alias: 'data hazard, pipeline data hazard',
      def: '<p>En instruksjon trenger data fra en tidligere instruksjon som fortsatt er i samlebåndet og ikke har skrevet resultatet til registerfilen. Løses med videresending, og med én stans ved load-use.</p>',
      more: K + '#farer'
    },
    'kontrollfare': {
      term: 'Kontrollfare',
      alias: 'control hazard, branch hazard',
      def: '<p>Instruksjonen som ble hentet er ikke den som trengs, fordi et hopp ikke var avgjort da den ble hentet. Løses med stans eller prediksjon; feilgjettede instruksjoner tømmes.</p>',
      more: K + '#farer'
    },
    'videresending': {
      term: 'Videresending',
      alias: 'forwarding, bypassing',
      def: '<p>Å hente en verdi fra et samlebåndsregister (EX/MEM eller MEM/WB) rett inn på ALU-inngangen, i stedet for å vente til den er skrevet i registerfilen. Løser datafarer uten stans når verdien allerede er regnet ut.</p>',
      more: K + '#videresending'
    },
    'videresendingsenhet': {
      term: 'Videresendingsenhet',
      alias: 'forwarding unit, ForwardA, ForwardB',
      def: '<p>Logikk som sammenlikner rs1 og rs2 til instruksjonen i EX med rd i EX/MEM og MEM/WB og styrer muxene foran ALU-en. 00 = registerfilen, 10 = EX/MEM (instruksjonen rett foran), 01 = MEM/WB. Krever RegWrite = 1 og rd ≠ x0; EX/MEM har forrang.</p>',
      more: K + '#videresending'
    },
    'load-use': {
      term: 'Load-use-fare',
      alias: 'load-use data hazard',
      def: '<p>Datafaren videresending ikke klarer: en load fulgt rett av en instruksjon som bruker det som lastes. Dataene finnes først etter MEM, én sykel for sent for EX. Krever én stans; deretter videresendes de fra MEM/WB.</p>',
      more: K + '#videresending'
    },
    'faredeteksjonsenhet': {
      term: 'Faredeteksjonsenhet',
      alias: 'hazard detection unit',
      def: '<p>Logikk i ID som oppdager load-use: ID/EX.MemRead = 1 og ID/EX.Rd lik rs1 eller rs2 i IF/ID. Stanser ved å holde PC og IF/ID (PCWrite = 0, IF/IDWrite = 0) og nulle kontrollsignalene inn i ID/EX.</p>',
      more: K + '#videresending'
    },
    'stans': {
      term: 'Stans',
      alias: 'stall, pipeline stall',
      def: '<p>Å holde en instruksjon igjen i steget sitt én sykel til, mens instruksjonene foran går videre. Hullet som oppstår fylles med en boble. Koster én sykel per stans.</p>',
      more: K + '#farer'
    },
    'boble': {
      term: 'Boble',
      alias: 'bubble, nop',
      def: '<p>En «ikke-instruksjon» som vandrer gjennom samlebåndet etter en stans eller tømming: alle kontrollsignalene er 0, så den skriver verken register eller minne. Tilsvarer en nop.</p>',
      more: K + '#farer'
    },
    'toemming': {
      term: 'Tømming',
      alias: 'flush',
      def: '<p>Å kaste instruksjoner som er hentet feil (etter et feilpredikert hopp eller et unntak) ved å nulle kontrollsignalene deres, så de blir bobler før de har endret register eller minne.</p>',
      more: K + '#kontrollfarer'
    },
    'dynamisk-prediksjon': {
      term: 'Dynamisk hopprediksjon',
      alias: 'dynamic branch prediction, 1-bit, 2-bit predictor',
      def: '<p>Å gjette utfallet av et hopp ut fra hva det gjorde tidligere under kjøringen. 1 bit: samme som sist. 2 bit: gjetningen må være feil to ganger før den snus, så en løkke bommer én gang per runde i stedet for to.</p>',
      more: K + '#kontrollfarer'
    },
    'hopphistorietabell': {
      term: 'Hopphistorietabell',
      alias: 'branch prediction buffer, branch history table',
      def: '<p>Lite minne indeksert med de laveste bitene av hoppinstruksjonens adresse, som inneholder 1 eller 2 bit om hva hoppet gjorde sist. Flere hopp kan dele en plass; det gir bare en dårligere gjetning, aldri feil resultat.</p>',
      more: K + '#kontrollfarer'
    },
    'hoppmaalbuffer': {
      term: 'Hoppmålbuffer',
      alias: 'branch target buffer',
      def: '<p>Hurtigbuffer som husker måladressen til hopp, slik at et hopp som predikeres tatt kan hente fra målet uten å vente på at adressen regnes ut.</p>',
      more: K + '#kontrollfarer'
    },

    /* ── T5.2 Unntak og avbrudd, T5.3 Prosessorer med høyere ytelse (5B) ── */
    'unntak': {
      term: 'Unntak',
      alias: 'exception',
      def: '<p>Uplanlagt hendelse som forstyrrer programutføringen: udefinert instruksjon, ugyldig adresse, systemkall, maskinvarefeil. Prosessoren lagrer adressen til instruksjonen i SEPC og årsaken i SCAUSE, og hopper til operativsystemets handler.</p>',
      more: L + '#unntak'
    },
    'avbrudd': {
      term: 'Avbrudd',
      alias: 'interrupt',
      def: '<p>Et unntak som kommer utenfra prosessoren, typisk fra en I/O-enhet eller et tidsur. Håndteres som andre unntak, men er ikke knyttet til en bestemt instruksjon i programmet.</p>',
      more: L + '#unntak'
    },
    'sepc': {
      term: 'SEPC og SCAUSE',
      alias: 'supervisor exception program counter, supervisor exception cause',
      def: '<p>To registre for unntak i RISC-V: SEPC holder adressen til instruksjonen som ble rammet, SCAUSE holder årsaken. Operativsystemet leser SCAUSE for å velge handling og bruker SEPC for å fortsette programmet.</p>',
      more: L + '#unntak'
    },
    'presist-unntak': {
      term: 'Presist unntak',
      alias: 'precise exception, precise interrupt',
      def: '<p>Unntak som alltid knyttes til riktig instruksjon: alt før den er fullført, og verken den eller noe etter har endret tilstanden. I samlebåndet oppnås det ved å tømme instruksjonene bak; ute av rekkefølge ved å fullføre i programrekkefølge.</p>',
      more: L + '#unntak'
    },
    'ilp': {
      term: 'Parallellitet på instruksjonsnivå',
      alias: 'instruction-level parallelism, ILP',
      def: '<p>Parallellitet mellom instruksjoner i ett program. Utnyttes i tid (dypere samlebånd, flere instruksjoner overlapper) og i rom (multiple issue, flere instruksjoner startes per sykel).</p>',
      more: L + '#ilp'
    },
    'multiple-issue': {
      term: 'Multiple issue',
      alias: 'multiple issue, IPC',
      def: '<p>Å starte flere instruksjoner i samme klokkesykel ved å duplisere maskinvaren. CPI kan da bli under 1; man bruker heller IPC, instruksjoner per sykel. Statisk (kompilatoren bestemmer) eller dynamisk (prosessoren bestemmer).</p>',
      more: L + '#ilp'
    },
    'statisk-multiple-issue': {
      term: 'Statisk multiple issue',
      alias: 'static multiple issue',
      def: '<p>Multiple issue der kompilatoren avgjør før kjøring hvilke instruksjoner som startes sammen, og unngår farene. Enkel maskinvare, men koden må kompileres for den bestemte prosessoren, og kompilatoren kjenner ikke hopputfall og bom.</p>',
      more: L + '#ilp'
    },
    'dynamisk-multiple-issue': {
      term: 'Dynamisk multiple issue',
      alias: 'dynamic multiple issue, superscalar, superskalar',
      def: '<p>Multiple issue der prosessoren under kjøring velger hvor mange instruksjoner som kan startes hver sykel. Samme binærkode går riktig på alle modeller. Kalles superskalar; oftest kombinert med utføring ut av rekkefølge.</p>',
      more: L + '#ilp'
    },
    'issue-pakke': {
      term: 'Issue-pakke',
      alias: 'issue packet, issue slots',
      def: '<p>Settet av instruksjoner som startes i én klokkesykel. I statisk multiple issue fyller kompilatoren pakkene og sørger for at instruksjonene i en pakke ikke avhenger av hverandre.</p>',
      more: L + '#ilp'
    },
    'spekulasjon': {
      term: 'Spekulasjon',
      alias: 'speculation',
      def: '<p>Å gjette på en egenskap ved en instruksjon (hopputfall, at en store ikke treffer en senere load) og begynne å utføre det som avhenger av gjetningen. Krever en sjekk og en måte å angre: resultatene bufres til gjetningen er bekreftet, og kastes om den var feil.</p>',
      more: L + '#ilp'
    },
    'lokkeutrulling': {
      term: 'Løkkeutrulling',
      alias: 'loop unrolling',
      def: '<p>Kompilatorteknikk som lager flere kopier av løkkekroppen etter hverandre. Gir flere uavhengige instruksjoner å planlegge parallelt og færre hopp; kopiene må bruke ulike registre (renaming i kompilatoren).</p>',
      more: L + '#ilp'
    },
    'raw': {
      term: 'RAW-fare',
      alias: 'read after write, ekte dataavhengighet',
      def: '<p>En senere instruksjon leser et register en tidligere skriver. Ekte dataflyt: leseren må vente på skriveren eller få verdien videresendt. Kan ikke fjernes med renaming.</p>',
      more: L + '#renaming'
    },
    'waw': {
      term: 'WAW-fare',
      alias: 'write after write, utgangsavhengighet, output dependence',
      def: '<p>To instruksjoner skriver samme register. Utføres de i feil rekkefølge, ender registeret med den tidligste instruksjonens verdi. En navneavhengighet; fjernes med register renaming.</p>',
      more: L + '#renaming'
    },
    'war': {
      term: 'WAR-fare',
      alias: 'write after read',
      def: '<p>En senere instruksjon skriver et register en tidligere skal lese. Skriver den først, får den tidligere instruksjonen feil verdi. Skyldes en antiavhengighet; fjernes med register renaming.</p>',
      more: L + '#renaming'
    },
    'antiavhengighet': {
      term: 'Antiavhengighet',
      alias: 'antidependence',
      def: '<p>Rekkefølgekrav som skyldes gjenbruk av et registernavn, ikke at en verdi flyter mellom instruksjonene: en senere instruksjon overskriver et register en tidligere leser. Gir WAR-fare.</p>',
      more: L + '#renaming'
    },
    'navneavhengighet': {
      term: 'Navneavhengighet',
      alias: 'name dependence',
      def: '<p>Fellesnavn på antiavhengighet (WAR) og utgangsavhengighet (WAW): to instruksjoner bruker samme registernavn uten at data flyter mellom dem. Forsvinner når hver verdi får sitt eget register.</p>',
      more: L + '#renaming'
    },
    'register-renaming': {
      term: 'Register renaming',
      alias: 'register renaming, omdøping av registre',
      def: '<p>Å avbilde arkitekturregistrene på et større sett fysiske registre, slik at hver skriving får et nytt fysisk register og en tabell peker på det nyeste. Fjerner WAW- og WAR-farer, så bare ekte dataflyt (RAW) begrenser rekkefølgen. Gjør utføring ut av rekkefølge og spekulasjon mulig.</p>',
      more: L + '#renaming'
    },
    'dynamisk-planlegging': {
      term: 'Dynamisk planlegging',
      alias: 'dynamic pipeline scheduling, out-of-order execution',
      def: '<p>Maskinvaren velger hvilke instruksjoner som utføres i hver sykel og går forbi instruksjoner som venter: utføring ut av rekkefølge. Instruksjoner hentes og fullføres i programrekkefølge, men utføres når operandene er klare.</p>',
      more: L + '#ooo'
    },
    'reservasjonsstasjon': {
      term: 'Reservasjonsstasjon',
      alias: 'reservation station',
      def: '<p>Buffer foran en funksjonsenhet som holder en instruksjons operasjon og operander. Operander som mangler, fanges opp når enheten som lager dem er ferdig. Instruksjonen utføres når alt er på plass.</p>',
      more: L + '#ooo'
    },
    'reorder-buffer': {
      term: 'Reorder buffer',
      alias: 'commit unit, fullføringsenhet',
      def: '<p>Bufferen i fullføringsenheten som holder ferdige resultater til de kan skrives til registre og minne i programrekkefølge. Gir presise unntak og gjør det mulig å kaste spekulative instruksjoner. Fungerer sammen med reservasjonsstasjonene som register renaming.</p>',
      more: L + '#ooo'
    },
    'in-order-commit': {
      term: 'In-order commit',
      alias: 'in-order commit, fullføring i rekkefølge',
      def: '<p>Resultater skrives til den programmerer-synlige tilstanden (registre og minne) i samme rekkefølge som instruksjonene ble hentet, selv om de ble utført i en annen. Utenfra ser utføringen sekvensiell ut.</p>',
      more: L + '#ooo'
    }
  };
})();
