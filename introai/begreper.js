/* ═══════════════════════════════════════════════════════════════════
   Begrepsordliste for TDT4136 Introduksjon til kunstig intelligens.
   Kun DATA: window.GLOSSARY. Popover-UI-en ligger i /glossary.js (felles for alle fag).
   Bruk i HTML:   <span class="term" data-term="nokkel">tekst</span>
   Felt: term (HTML), def (HTML, 1–3 setninger), more (relativ til fagets rot), alias (valgfritt).
   Oppføringene er gruppert per kapittel. Slått sammen av merge.py fra agentenes fragmenter.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  window.GLOSSARY = {

    /* ── kap1 ── */
    'agent': {
      term: 'Agent',
      def: '<p>Alt som kan sees på som noe som oppfatter miljøet sitt gjennom <em>sensorer</em> og virker på miljøet gjennom <em>aktuatorer</em>. agent = arkitektur + program.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'miljo': {
      term: 'Miljø',
      alias: 'environment',
      def: '<p>Den delen av verden som påvirker hva agenten oppfatter, og som påvirkes av agentens handlinger. Miljøet definerer problemet; agenten er løsningen.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'sensor': {
      term: 'Sensor',
      def: '<p>Det agenten oppfatter miljøet med: øyne, kameraer, radar, tastaturinput, nettverkspakker. Er S-en i PEAS.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'aktuator': {
      term: 'Aktuator',
      alias: 'actuator',
      def: '<p>Det agenten virker på miljøet med: hender, motorer, ratt, skjerm, skriving av filer. Er A-en i PEAS.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'persept': {
      term: 'Persept',
      alias: 'percept',
      def: '<p>Det agentens sensorer oppfatter i ett gitt øyeblikk, f.eks. <code>[A, Dirty]</code> i støvsugerverdenen.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'perseptsekvens': {
      term: 'Perseptsekvens',
      alias: 'percept sequence',
      def: '<p>Hele historien av alt agenten noen gang har oppfattet. Agentens valg kan avhenge av innebygd kunnskap og perseptsekvensen så langt, men ikke av noe den ikke har oppfattet.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'agentfunksjon': {
      term: 'Agentfunksjon',
      alias: 'agent function',
      def: '<p>Den abstrakte, matematiske avbildningen fra perseptsekvenser til handlinger. En ekstern beskrivelse av atferden, ikke av hvordan agenten er bygget.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'agentprogram': {
      term: 'Agentprogram',
      alias: 'agent program',
      def: '<p>Den konkrete implementasjonen av agentfunksjonen, som kjører på agentens fysiske arkitektur. agent = arkitektur + program.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'stovsugerverden': {
      term: 'Støvsugerverdenen',
      alias: 'vacuum-cleaner world',
      def: '<p>Løpende eksempel: to ruter A og B som er rene eller skitne. Persept <code>[rute, status]</code>, handlinger Right, Left, Suck og å gjøre ingenting.</p>',
      more: 'kap1/agenter.html#agent'
    },
    'ytelsesmal': {
      term: 'Ytelsesmål',
      alias: 'performance measure',
      def: '<p>En objektiv funksjon som evaluerer en sekvens av <em>miljøtilstander</em>. Ligger hos designeren, ikke nødvendigvis i agenten. Mål det du vil ha, ikke hvordan agenten skal oppføre seg.</p>',
      more: 'kap1/agenter.html#rasjonalitet'
    },
    'rasjonell-agent': {
      term: 'Rasjonell agent',
      alias: 'rational agent',
      def: '<p>For hver mulig perseptsekvens velger den en handling som <em>forventes</em> å maksimere ytelsesmålet, gitt evidensen i perseptsekvensen og den innebygde kunnskapen.</p>',
      more: 'kap1/agenter.html#rasjonalitet'
    },
    'allvitende': {
      term: 'Allvitende agent',
      alias: 'omniscient agent',
      def: '<p>En agent som kjenner det faktiske utfallet av handlingene sine på forhånd. Umulig i praksis. Rasjonalitet maksimerer forventet ytelse, perfeksjon faktisk ytelse.</p>',
      more: 'kap1/agenter.html#rasjonalitet'
    },
    'autonomi': {
      term: 'Autonomi',
      def: '<p>Å stole på egne persepter og læring i stedet for bare designerens innebygde kunnskap. Møkkbillen som plugger reiret uten møkkball er eksempelet på manglende autonomi.</p>',
      more: 'kap1/agenter.html#rasjonalitet'
    },
    'oppgavemiljo': {
      term: 'Oppgavemiljø',
      alias: 'task environment',
      def: '<p>«Problemet» en rasjonell agent er løsningen på. Spesifiseres med PEAS og klassifiseres langs sju dimensjoner.</p>',
      more: 'kap1/agenter.html#peas'
    },
    'peas': {
      term: 'PEAS',
      def: '<p>Performance measure, Environment, Actuators, Sensors: de fire tingene som spesifiserer et oppgavemiljø. Standard eksamensoppgave: gi PEAS og begrunn ytelsesmålet.</p>',
      more: 'kap1/agenter.html#peas'
    },
    'fullt-observerbart': {
      term: 'Fullt observerbart',
      alias: 'fully observable',
      def: '<p>Sensorene gir tilgang til hele den (relevante) tilstanden i miljøet til enhver tid. Agenten trenger ingen intern tilstand. Eksempel: sjakk.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'delvis-observerbart': {
      term: 'Delvis observerbart',
      alias: 'partially observable',
      def: '<p>Deler av tilstanden er skjult, pga. støyende sensorer eller fordi informasjonen ikke er i perseptet. Eksempel: poker, taxikjøring. Uten sensorer: uobserverbart.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'enkeltagent': {
      term: 'Enkeltagent',
      alias: 'single-agent',
      def: '<p>Bare én agent i miljøet, f.eks. kryssord. Andre enheter regnes som del av miljøet om atferden deres ikke best beskrives som å maksimere et mål som avhenger av vår agent.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'fleragent': {
      term: 'Fleragent',
      alias: 'multiagent',
      def: '<p>Flere agenter der B best beskrives som å maksimere et ytelsesmål som avhenger av As atferd. Konkurrerende (sjakk) eller blandet samarbeid/konkurranse (taxi).</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'deterministisk': {
      term: 'Deterministisk',
      def: '<p>Neste tilstand er helt bestemt av nåværende tilstand og agentens handling. Eksempel: sjakk.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'ikke-deterministisk': {
      term: 'Ikke-deterministisk',
      alias: 'nondeterministic',
      def: '<p>Utfallet av en handling er usikkert; de mulige utfallene er kjent, men ikke kvantifisert med sannsynligheter. Et delvis observerbart miljø kan se ikke-deterministisk ut selv om det ikke er det.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'stokastisk': {
      term: 'Stokastisk',
      alias: 'stochastic',
      def: '<p>Ikke-deterministisk der sannsynlighetene for utfallene er eksplisitt gitt. Forskjellen fra ikke-deterministisk ble spurt om på Ord. 2023.</p>',
      more: 'kap1/agenter.html#oppg-o23-kort-stokastisk'
    },
    'episodisk': {
      term: 'Episodisk',
      alias: 'episodic',
      def: '<p>Erfaringen er delt i atomære episoder (sans, handle én gang), og neste episode avhenger ikke av tidligere handlinger. Eksempel: finne defekte deler på et samlebånd.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'sekvensiell': {
      term: 'Sekvensiell',
      alias: 'sequential',
      def: '<p>Beslutningen nå kan påvirke alle framtidige beslutninger, så agenten må tenke framover. Eksempel: sjakk, taxikjøring.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'statisk': {
      term: 'Statisk',
      def: '<p>Miljøet endrer seg ikke mens agenten tenker. Eksempel: kryssord.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'dynamisk': {
      term: 'Dynamisk',
      def: '<p>Miljøet kan endre seg mens agenten tenker; å ikke bestemme seg teller som å velge å gjøre ingenting. Eksempel: taxikjøring.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'semidynamisk': {
      term: 'Semidynamisk',
      def: '<p>Verden står stille, men agentens ytelse endres med tiden. Eksempel: sjakk med klokke.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'diskret': {
      term: 'Diskret',
      def: '<p>Endelig mange distinkte tilstander, persepter og handlinger, og diskret tid. Eksempel: sjakk.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'kontinuerlig': {
      term: 'Kontinuerlig',
      def: '<p>Tilstand, tid, persepter eller handlinger tar kontinuerlige verdier. Eksempel: taxi (fart, posisjon, rattvinkel).</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'kjent-miljo': {
      term: 'Kjent miljø',
      alias: 'known',
      def: '<p>Utfallene (eller sannsynlighetene for utfallene) av alle handlinger er gitt. Handler om kunnskap om reglene, ikke om observerbarhet: kabal er kjent, men delvis observerbar.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'ukjent-miljo': {
      term: 'Ukjent miljø',
      alias: 'unknown',
      def: '<p>Agenten må lære hvordan miljøet virker. Et nytt dataspill er ukjent, men fullt observerbart.</p>',
      more: 'kap1/agenter.html#miljo'
    },
    'tabellagent': {
      term: 'Tabelldrevet agent',
      alias: 'table-driven agent',
      def: '<p>Lagrer hele perseptsekvensen og slår opp handlingen i en tabell. Korrekt i teorien, umulig i praksis: sjakk krever minst 10<sup>150</sup> rader.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'enkel-refleksagent': {
      term: 'Enkel refleksagent',
      alias: 'simple reflex agent',
      def: '<p>Velger handling bare ut fra nåværende persept med betingelse–handling-regler. Fungerer bare om miljøet er fullt observerbart; ellers kan den havne i uendelige løkker.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'betingelse-handling-regel': {
      term: 'Betingelse–handling-regel',
      alias: 'condition–action rule',
      def: '<p>En regel på formen «if car-in-front-is-braking then initiate-braking». Byggesteinen i refleksagenter.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'modellbasert-agent': {
      term: 'Modellbasert refleksagent',
      alias: 'model-based reflex agent',
      def: '<p>Holder en intern tilstand som sporer det den ikke ser nå, oppdatert med overgangsmodell og sensormodell, og velger handling med betingelse–handling-regler. Svaret på delvis observerbare miljøer.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'intern-tilstand': {
      term: 'Intern tilstand',
      alias: 'internal state',
      def: '<p>Agentens beste gjetning om verden, inkludert det perseptet ikke viser. Full sikkerhet er sjelden mulig i delvis observerbare miljøer.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'overgangsmodell': {
      term: 'Overgangsmodell',
      alias: 'transition model',
      def: '<p>Kunnskap om hvordan verden utvikler seg: effekten av agentens egne handlinger og hvordan verden endrer seg av seg selv.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'sensormodell': {
      term: 'Sensormodell',
      alias: 'sensor model',
      def: '<p>Kunnskap om hvordan verdens tilstand viser seg i agentens persepter.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'mal': {
      term: 'Mål',
      alias: 'goal',
      def: '<p>Eksplisitt informasjon om ønskede situasjoner, f.eks. «være på et bestemt reisemål». Gir bare et binært skille: nådd eller ikke nådd.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'malbasert-agent': {
      term: 'Målbasert agent',
      alias: 'goal-based agent',
      def: '<p>Modell + mål: vurderer «hva skjer om jeg gjør dette, og når jeg målet da?». Fleksibel, fordi målet kan byttes uten å skrive om reglene. Det søk og planlegging løser.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'nyttebasert-agent': {
      term: 'Nyttebasert agent',
      alias: 'utility-based agent',
      def: '<p>Modell + nyttefunksjon; velger handlingen med størst forventet nytte. Håndterer konflikterende mål (fart mot sikkerhet) og usikkerhet om målet nås.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'nyttefunksjon': {
      term: 'Nyttefunksjon',
      alias: 'utility function',
      def: '<p>Avbilder en tilstand (eller sekvens av tilstander) til et reelt tall. En internalisering av ytelsesmålet.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'forventet-nytte': {
      term: 'Forventet nytte',
      alias: 'expected utility',
      def: '<p>Nytten snittet over mulige utfall, vektet med sannsynligheten for hvert utfall. En rasjonell nyttebasert agent velger handlingen som maksimerer den.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'laerende-agent': {
      term: 'Lærende agent',
      alias: 'learning agent',
      def: '<p>Hvilken som helst agenttype bygget med fire komponenter: ytelseselement, kritiker, læringselement og problemgenerator. Kan starte i et ukjent miljø og bli kompetent.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'ytelseselement': {
      term: 'Ytelseselement',
      alias: 'performance element',
      def: '<p>Den delen av en lærende agent som velger ytre handlinger; det vi ellers kaller hele agenten.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'kritiker': {
      term: 'Kritiker',
      alias: 'critic',
      def: '<p>Forteller læringselementet hvor godt agenten gjør det, målt mot en fast, ytre ytelsesstandard.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'laeringselement': {
      term: 'Læringselement',
      alias: 'learning element',
      def: '<p>Forbedrer ytelseselementet basert på tilbakemeldingen fra kritikeren.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },
    'problemgenerator': {
      term: 'Problemgenerator',
      alias: 'problem generator',
      def: '<p>Foreslår utforskende handlinger som gir ny, informativ erfaring, selv om de er suboptimale på kort sikt.</p>',
      more: 'kap1/agenter.html#agenttyper'
    },

    /* ── kap2 ── */
    'problemlosende-agent': {
      term: 'Problemløsende agent',
      def: '<p>En agent som planlegger fremover: den vurderer sekvenser av handlinger som danner en sti til en måltilstand, før den handler. Prosessen er målformulering, problemformulering, søk og utførelse.</p>',
      more: 'kap2/sok-formulering.html#agent'
    },
    'sok': {
      term: 'Søk',
      alias: 'search',
      def: '<p>Beregningsprosessen der agenten simulerer handlingssekvenser i en modell av verden for å finne en som når målet.</p>',
      more: 'kap2/sok-formulering.html#agent'
    },
    'losning': {
      term: 'Løsning',
      alias: 'solution',
      def: '<p>En handlingssekvens (sti) fra starttilstanden til en måltilstand.</p>',
      more: 'kap2/sok-formulering.html#agent'
    },
    'sokeproblem': {
      term: 'Søkeproblem',
      alias: 'search problem',
      def: '<p>Definert av tilstandsrom, starttilstand, måltilstand(er) eller måltest, handlinger <code>ACTIONS(s)</code>, overgangsmodell <code>RESULT(s, a)</code> og handlingskostnad <em>c</em>(<em>s</em>, <em>a</em>, <em>s′</em>).</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'tilstandsrom': {
      term: 'Tilstandsrom',
      alias: 'state space',
      def: '<p>Mengden <em>S</em> av alle mulige tilstander i miljøet. Romania: alle byene på kartet.</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'tilstand': {
      term: 'Tilstand',
      alias: 'state',
      def: '<p>En konfigurasjon av miljøet, f.eks. «agenten er i Arad» eller en plassering av brikkene i 8-puzzle.</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'starttilstand': {
      term: 'Starttilstand',
      alias: 'initial state',
      def: '<p>Tilstanden agenten starter i, <em>s</em><sub>0</sub>. Roten i søketreet.</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'maltilstand': {
      term: 'Måltilstand og måltest',
      alias: 'goal state, goal test, IS-GOAL',
      def: '<p>Tilstanden(e) agenten vil nå. Kan gis som en mengde eller som en test <code>IS-GOAL(s)</code>. Når testen kjøres (ved generering eller ved pop) avhenger av algoritmen.</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'handling': {
      term: 'Handling',
      alias: 'action, ACTIONS(s)',
      def: '<p>Det agenten kan gjøre. <code>ACTIONS(s)</code> gir handlingene som er mulige i tilstand <em>s</em>, f.eks. {ToSibiu, ToTimisoara, ToZerind} i Arad.</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'handlingskostnad': {
      term: 'Handlingskostnad',
      alias: 'action cost',
      def: '<p>Funksjonen <em>c</em>(<em>s</em>, <em>a</em>, <em>s′</em>) som gir kostnaden ved å gjøre handling <em>a</em> i <em>s</em> og havne i <em>s′</em>. Romania: veilengden i miles.</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'stikostnad': {
      term: 'Stikostnad',
      alias: 'path cost, g(n)',
      def: '<p>Summen av handlingskostnadene langs en sti. I søket lagres den i noden som <code>node.PATH-COST</code>, skrevet <em>g</em>(<em>n</em>).</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'optimal-losning': {
      term: 'Optimal løsning',
      alias: 'optimal solution',
      def: '<p>En løsning med lavest stikostnad blant alle løsninger.</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'tilstandsromgraf': {
      term: 'Tilstandsromgraf',
      alias: 'state space graph',
      def: '<p>Grafen der noder er tilstander og (rettede) kanter er handlinger. Romania-kartet er en tilstandsromgraf.</p>',
      more: 'kap2/sok-formulering.html#formulering'
    },
    'grid-world': {
      term: 'Grid world',
      def: '<p>Et todimensjonalt rutenett der agenten kan flytte til ledige naboruter; ruter kan inneholde objekter eller hindringer. Vacuum world er et eksempel.</p>',
      more: 'kap2/sok-formulering.html#eksempler'
    },
    'vakuumverden': {
      term: 'Vacuum world',
      alias: 'støvsugerverden',
      def: '<p>Standardproblem med to ruter, en støvsuger og støv. Tilstand: agentens posisjon og hvilke ruter som er skitne (8 tilstander). Handlinger Suck, Left, Right; mål: ingen støv; kostnad 1.</p>',
      more: 'kap2/sok-formulering.html#eksempler'
    },
    '8-puzzle': {
      term: '8-puzzle',
      alias: 'glidebrikkespill, sliding-tile puzzle',
      def: '<p>3×3-brett med åtte nummererte brikker og ett tomt felt. Handlinger: flytt det tomme feltet Left/Right/Up/Down; mål: en gitt plassering; kostnad 1 per flytt. 181 440 nåbare tilstander.</p>',
      more: 'kap2/sok-formulering.html#eksempler'
    },
    'ruteplanlegging': {
      term: 'Ruteplanlegging',
      alias: 'route-finding',
      def: '<p>Virkelig søkeproblem der tilstander er steder og handlinger er forbindelser mellom dem, f.eks. bilnavigasjon. Romania-eksempelet er et ruteplanleggingsproblem.</p>',
      more: 'kap2/sok-formulering.html#eksempler'
    },
    'atomisk-representasjon': {
      term: 'Atomisk representasjon',
      alias: 'atomic representation',
      def: '<p>Tilstanden er en udelelig «svart boks» uten indre struktur; algoritmen kan bare se om to tilstander er like. Søkealgoritmene i kap. 3 behandler tilstander slik.</p>',
      more: 'kap2/sok-formulering.html#representasjon'
    },
    'faktorisert-representasjon': {
      term: 'Faktorisert representasjon',
      alias: 'factored representation',
      def: '<p>Tilstanden er en vektor av variabler med verdier, f.eks. (agent, R1, R2, R3, R4, Truck). Gjør det mulig å sammenlikne og generalisere mellom tilstander, f.eks. i heuristikker.</p>',
      more: 'kap2/sok-formulering.html#representasjon'
    },
    'soketre': {
      term: 'Søketre',
      alias: 'search tree',
      def: '<p>Treet søket bygger oppå tilstandsromgrafen: roten er starttilstanden, hver node svarer til en tilstand og hver kant til en handling. Samme tilstand kan stå i mange noder.</p>',
      more: 'kap2/sok-formulering.html#graf-tre'
    },
    'syklus': {
      term: 'Syklus',
      alias: 'cycle, loop, løkke',
      def: '<p>En sti som går tilbake til en tilstand som allerede er forfar på stien, f.eks. Arad → Sibiu → Arad. Gjør søketreet uendelig om den ikke oppdages.</p>',
      more: 'kap2/sok-formulering.html#graf-tre'
    },
    'node': {
      term: 'Node (i søketreet)',
      alias: 'search node',
      def: '<p>Datastruktur med <code>STATE</code>, <code>PARENT</code>, <code>ACTION</code> og <code>PATH-COST</code>. En node er ikke en tilstand, men et steg i søket.</p>',
      more: 'kap2/sok-formulering.html#graf-tre'
    },
    'frontier': {
      term: 'Frontier',
      alias: 'grense, open list',
      def: '<p>Nodene som er generert men ikke ekspandert, og som kan ekspanderes neste gang. Lagres som FIFO-kø, LIFO-kø eller prioritetskø avhengig av algoritmen.</p>',
      more: 'kap2/sok-formulering.html#graf-tre'
    },
    'reached': {
      term: 'Reached',
      alias: 'nådde tilstander',
      def: '<p>Oppslagstabell over alle tilstander søket har nådd (både frontier og ekspanderte), med beste node til hver. Frontier ⊂ reached og expanded = reached \\ frontier.</p>',
      more: 'kap2/sok-formulering.html#graf-tre'
    },
    'ekspandere': {
      term: 'Ekspandere',
      alias: 'expand',
      def: '<p>Å ta en node ut av frontier og generere alle etterfølgerne med <code>EXPAND(problem, node)</code>. Rekkefølgen nodene ekspanderes i er det eksamen spør etter.</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'generere': {
      term: 'Generere',
      alias: 'generate',
      def: '<p>Å lage en barnenode for en etterfølgertilstand. En generert node ligger i frontier til den eventuelt ekspanderes; BFS sjekker målet allerede her.</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'evalueringsfunksjon': {
      term: 'Evalueringsfunksjon f(n)',
      alias: 'evaluation function',
      def: '<p>Funksjonen <em>f</em> som bestemmer hvilken node i frontier som poppes først i best-first search. DFS: −depth, UCS: <em>g</em>, greedy: <em>h</em>, A*: <em>g</em> + <em>h</em>.</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'best-first-search': {
      term: 'Best-first search',
      alias: 'BEST-FIRST-SEARCH',
      def: '<p>Den generelle søkealgoritmen (boka s. 91): pop noden med lavest <em>f</em>(<em>n</em>), sjekk mål, ekspander, legg barn i frontier om tilstanden er ny eller nådd billigere. Alle kursets algoritmer unntatt BFS er denne med ulik <em>f</em>.</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'prioritetsko': {
      term: 'Prioritetskø',
      alias: 'priority queue',
      def: '<p>Kø som popper elementet med lavest verdi av <em>f</em>. Brukes av best-first search; ved likhet brytes det alfabetisk i kurset.</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'lifo-ko': {
      term: 'LIFO-kø (stakk)',
      alias: 'stack, last in first out',
      def: '<p>Kø som popper sist innlagte element først. Gir dybde-først-oppførsel (DFS, DLS).</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'fifo-ko': {
      term: 'FIFO-kø',
      alias: 'first in first out, queue',
      def: '<p>Kø som popper først innlagte element først. Gir bredde-først-oppførsel (BFS).</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'fullstendighet': {
      term: 'Fullstendighet',
      alias: 'completeness, fullstendig',
      def: '<p>En algoritme er fullstendig hvis den garantert finner en løsning når det finnes en (og rapporterer feil ellers).</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'kostnadsoptimalitet': {
      term: 'Kostnadsoptimalitet',
      alias: 'cost optimality, kostnadsoptimal',
      def: '<p>En algoritme er kostnadsoptimal hvis løsningen den finner har lavest stikostnad av alle løsninger.</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'tidskompleksitet': {
      term: 'Tidskompleksitet',
      alias: 'time complexity',
      def: '<p>Hvor lang tid søket tar, målt i f.eks. antall genererte eller ekspanderte noder, uttrykt med <em>b</em>, <em>d</em> og <em>m</em>.</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'plasskompleksitet': {
      term: 'Plasskompleksitet',
      alias: 'space complexity',
      def: '<p>Hvor mye minne søket trenger, særlig for frontier og reached. BFS: <em>O</em>(<em>b</em><sup><em>d</em></sup>), DFS: <em>O</em>(<em>bm</em>).</p>',
      more: 'kap2/uinformert-sok.html#prosedyre'
    },
    'tree-like-search': {
      term: 'Tree-like search',
      alias: 'tree search',
      def: '<p>Søk uten reached-tabell: alle barn legges i frontier, også gjentatte tilstander og løkker. Står det «tree-like» i en eksamensoppgave, skal du ikke sjekke besøkte noder.</p>',
      more: 'kap2/uinformert-sok.html#fallgruver'
    },
    'graph-search': {
      term: 'Graph search',
      def: '<p>Søk som husker nådde tilstander (reached) og ikke legger inn en tilstand på nytt med samme eller dårligere stikostnad. Unngår redundante stier og løkker.</p>',
      more: 'kap2/uinformert-sok.html#fallgruver'
    },
    'redundant-sti': {
      term: 'Redundant sti',
      alias: 'redundant path',
      def: '<p>En dårligere vei til en tilstand som allerede er nådd. En syklus er et spesialtilfelle der stien går tilbake til en forfar.</p>',
      more: 'kap2/uinformert-sok.html#fallgruver'
    },
    'tidlig-malsjekk': {
      term: 'Tidlig måltest',
      alias: 'early goal test',
      def: '<p>Målet sjekkes når en node genereres. Brukes av BFS (boka s. 95): søket stopper før målet legges i frontier.</p>',
      more: 'kap2/uinformert-sok.html#fallgruver'
    },
    'sen-malsjekk': {
      term: 'Sen måltest',
      alias: 'late goal test',
      def: '<p>Målet sjekkes når en node poppes for ekspansjon. Brukes av best-first search (DFS, UCS, greedy, A*); en billigere vei til målet kan finnes før det poppes.</p>',
      more: 'kap2/uinformert-sok.html#fallgruver'
    },
    'ekspansjonsrekkefolge': {
      term: 'Ekspansjonsrekkefølge',
      alias: 'order of expansion',
      def: '<p>Nodene i den rekkefølgen de ekspanderes. Eksamensformat: «Order of expansion: S, A, B, (G)», der målet står i parentes fordi det ikke ekspanderes.</p>',
      more: 'kap2/uinformert-sok.html#fallgruver'
    },
    'tie-break': {
      term: 'Tie-break',
      alias: 'uavgjort, tie breaking',
      def: '<p>Regelen ved likhet. I kurset: behandle etterfølgere alfabetisk (eller venstre til høyre), og velg alfabetisk når flere noder har samme <em>f</em>.</p>',
      more: 'kap2/uinformert-sok.html#fallgruver'
    },
    'bfs': {
      term: 'Breadth-first search (BFS)',
      alias: 'bredde-først-søk',
      def: '<p>Ekspanderer grunneste node først (FIFO-kø) og sjekker målet når noder genereres. Fullstendig, optimal ved like kostnader, tid og plass <em>O</em>(<em>b</em><sup><em>d</em></sup>).</p>',
      more: 'kap2/uinformert-sok.html#bfs'
    },
    'forgreiningsfaktor': {
      term: 'Forgreiningsfaktor b',
      alias: 'branching factor',
      def: '<p>Antall etterfølgere en node har (maksimalt eller i snitt). Sammen med dybden <em>d</em> eller <em>m</em> bestemmer den kompleksiteten.</p>',
      more: 'kap2/uinformert-sok.html#bfs'
    },
    'dfs': {
      term: 'Depth-first search (DFS)',
      alias: 'dybde-først-søk',
      def: '<p>Ekspanderer dypeste node først: best-first med <em>f</em> = −depth (stakk). Ikke fullstendig og ikke optimal; tid <em>O</em>(<em>b</em><sup><em>m</em></sup>), plass <em>O</em>(<em>bm</em>).</p>',
      more: 'kap2/uinformert-sok.html#dfs'
    },
    'dls': {
      term: 'Depth-limited search (DLS)',
      alias: 'dybdebegrenset søk',
      def: '<p>DFS med dybdegrense ℓ: noder på grensen behandles som om de ikke har etterfølgere. Returnerer løsning, failure eller cutoff.</p>',
      more: 'kap2/uinformert-sok.html#ids'
    },
    'ids': {
      term: 'Iterative deepening search (IDS)',
      alias: 'iterativ fordypning',
      def: '<p>Kjører DLS med ℓ = 0, 1, 2, … til en løsning finnes. Fullstendig, optimal ved like kostnader, tid <em>O</em>(<em>b</em><sup><em>d</em></sup>), plass <em>O</em>(<em>bd</em>).</p>',
      more: 'kap2/uinformert-sok.html#ids'
    },
    'cutoff': {
      term: 'Cutoff',
      def: '<p>Resultatet fra DLS når dybdegrensen ble nådd: det kan finnes en løsning dypere. Skiller seg fra failure, som betyr at det ikke finnes noen løsning.</p>',
      more: 'kap2/uinformert-sok.html#ids'
    },
    'ucs': {
      term: 'Uniform-cost search (UCS)',
      alias: 'Dijkstra',
      def: '<p>Best-first med <em>f</em>(<em>n</em>) = <em>g</em>(<em>n</em>): ekspanderer billigste sti først, sen måltest. Optimal, og fullstendig når alle kostnader er ≥ ε &gt; 0.</p>',
      more: 'kap2/uinformert-sok.html#ucs'
    },
    'uinformert-sok': {
      term: 'Uinformert søk',
      alias: 'blindt søk, uninformed search',
      def: '<p>Søk uten informasjon om hvor nær en tilstand er målet: BFS, DFS, DLS, IDS og UCS.</p>',
      more: 'kap2/informert-sok.html#heuristikk'
    },
    'informert-sok': {
      term: 'Informert søk',
      alias: 'heuristisk søk, informed search',
      def: '<p>Søk som bruker et domenespesifikt hint, en heuristikk <em>h</em>(<em>n</em>), for å styre søket mot målet: greedy best-first og A*.</p>',
      more: 'kap2/informert-sok.html#heuristikk'
    },
    'heuristikk': {
      term: 'Heuristikk h(n)',
      alias: 'heuristic function, heuristikkfunksjon',
      def: '<p>Funksjon <em>h</em>: <em>S</em> → ℝ som estimerer kostnaden fra <em>n</em> til nærmeste mål. <em>h</em>(mål) = 0.</p>',
      more: 'kap2/informert-sok.html#heuristikk'
    },
    'rettlinjet-avstand': {
      term: 'Rettlinjet avstand',
      alias: 'straight-line distance, SLD, luftlinje',
      def: '<p>Luftlinjeavstanden til målet, <em>h</em><sub>SLD</sub>. Heuristikken i Romania-eksempelet; den er aldri lengre enn veien.</p>',
      more: 'kap2/informert-sok.html#heuristikk'
    },
    'greedy-best-first': {
      term: 'Greedy best-first search',
      alias: 'GBFS, grådig søk',
      def: '<p>Best-first med <em>f</em>(<em>n</em>) = <em>h</em>(<em>n</em>): ekspanderer noden som ser nærmest målet ut. Ikke optimal (Romania: 450 mot 418), og kan gå i løkke med tree-like search.</p>',
      more: 'kap2/informert-sok.html#greedy'
    },
    'a-stjerne': {
      term: 'A* search',
      alias: 'A-stjerne, A star',
      def: '<p>Best-first med <em>f</em>(<em>n</em>) = <em>g</em>(<em>n</em>) + <em>h</em>(<em>n</em>). Fullstendig ved positive kostnader og endelig rom; kostnadsoptimal med admissibel (tree-like) eller konsistent (graph search) heuristikk.</p>',
      more: 'kap2/informert-sok.html#astar'
    },
    'g-verdi': {
      term: 'g(n)',
      alias: 'stikostnad hittil',
      def: '<p>Kostnaden fra start til <em>n</em> langs stien søket har funnet, summert over hele stien.</p>',
      more: 'kap2/informert-sok.html#astar'
    },
    'f-verdi': {
      term: 'f(n) i A*',
      alias: 'f-verdi',
      def: '<p><em>f</em>(<em>n</em>) = <em>g</em>(<em>n</em>) + <em>h</em>(<em>n</em>): estimert kostnad for den billigste løsningen som går gjennom <em>n</em>. A* popper lavest <em>f</em>.</p>',
      more: 'kap2/informert-sok.html#astar'
    },
    'vektet-a-stjerne': {
      term: 'Vektet A*',
      alias: 'weighted A*',
      def: '<p><em>f</em>(<em>n</em>) = <em>g</em>(<em>n</em>) + <em>w</em> · <em>h</em>(<em>n</em>) med <em>w</em> &gt; 1. Ofte raskere, men ikke garantert optimal. <em>w</em> = 0 gir UCS, <em>w</em> = 1 A*, <em>w</em> → ∞ greedy.</p>',
      more: 'kap2/informert-sok.html#astar'
    },
    'admissibel': {
      term: 'Admissibel heuristikk',
      alias: 'admissible',
      def: '<p>En heuristikk som aldri overestimerer: <em>h</em>(<em>n</em>) ≤ <em>h</em>*(<em>n</em>) for alle <em>n</em>. Den er optimistisk og gjør tree-like A* kostnadsoptimal.</p>',
      more: 'kap2/heuristikker.html#admissibel'
    },
    'h-stjerne': {
      term: 'h*(n)',
      alias: 'faktisk kostnad, true cost',
      def: '<p>Den faktiske optimale kostnaden fra <em>n</em> til nærmeste mål. Admissibilitet sammenlikner <em>h</em> med <em>h</em>*.</p>',
      more: 'kap2/heuristikker.html#admissibel'
    },
    'konsistent': {
      term: 'Konsistent heuristikk',
      alias: 'consistent, monoton heuristikk',
      def: '<p><em>h</em>(<em>n</em>) ≤ <em>c</em>(<em>n</em>, <em>a</em>, <em>n′</em>) + <em>h</em>(<em>n′</em>) for hver node <em>n</em> og hver etterfølger <em>n′</em>. Med <em>h</em>(mål) = 0 er en konsistent heuristikk også admissibel, men ikke omvendt.</p>',
      more: 'kap2/heuristikker.html#konsistens'
    },
    'trekantulikhet': {
      term: 'Trekantulikhet',
      alias: 'triangle inequality',
      def: '<p>Bildet på konsistens: siden <em>h</em>(<em>n</em>) skal ikke være lengre enn omveien <em>c</em>(<em>n</em>, <em>a</em>, <em>n′</em>) + <em>h</em>(<em>n′</em>) via etterfølgeren.</p>',
      more: 'kap2/heuristikker.html#konsistens'
    },
    'monoton-f': {
      term: 'Monoton f',
      alias: 'ikke-avtakende f',
      def: '<p>Med konsistent <em>h</em> er <em>f</em>(<em>n′</em>) ≥ <em>f</em>(<em>n</em>) langs enhver sti, så A* ekspanderer noder i ikke-avtakende <em>f</em>-rekkefølge.</p>',
      more: 'kap2/heuristikker.html#konsistens'
    },
    'optimalt-effektiv': {
      term: 'Optimalt effektiv',
      alias: 'optimally efficient',
      def: '<p>A* med konsistent heuristikk: enhver annen algoritme med samme heuristikk må ekspandere minst de nodene A* ekspanderer (bortsett fra likheter).</p>',
      more: 'kap2/heuristikker.html#konsistens'
    },
    'ida-stjerne': {
      term: 'IDA*',
      alias: 'iterative deepening A*',
      def: '<p>A* med iterativ fordypning på en grense for <em>f</em> i stedet for dybde. Sparer minne.</p>',
      more: 'kap2/heuristikker.html#optimalitet'
    },
    'rbfs': {
      term: 'RBFS',
      alias: 'recursive best-first search',
      def: '<p>Minnebesparende variant som kan trekke seg ut av deltrær og huske beste <em>f</em> den så der; risiko for «thrashing».</p>',
      more: 'kap2/heuristikker.html#optimalitet'
    },
    'beam-search': {
      term: 'Beam search',
      def: '<p>Holder bare de <em>k</em> beste nodene i frontier. Sparer minne, men er verken fullstendig eller optimal.</p>',
      more: 'kap2/heuristikker.html#optimalitet'
    },
    'dominans': {
      term: 'Dominans',
      alias: 'dominerer',
      def: '<p>Admissibel <em>h</em><sub>2</sub> dominerer admissibel <em>h</em><sub>1</sub> hvis <em>h</em><sub>2</sub>(<em>n</em>) ≥ <em>h</em><sub>1</sub>(<em>n</em>) for alle <em>n</em>. Da ekspanderer A* færre noder med <em>h</em><sub>2</sub>.</p>',
      more: 'kap2/heuristikker.html#dominans'
    },
    'maks-heuristikk': {
      term: 'Maksimum av heuristikker',
      alias: 'max(h_a, h_b)',
      def: '<p><em>h</em>(<em>n</em>) = max(<em>h</em><sub>a</sub>(<em>n</em>), <em>h</em><sub>b</sub>(<em>n</em>), …) er admissibel når alle er det, og dominerer hver av dem.</p>',
      more: 'kap2/heuristikker.html#dominans'
    },
    'feilplasserte-brikker': {
      term: 'Feilplasserte brikker (h₁)',
      alias: 'misplaced tiles',
      def: '<p>Heuristikk for 8-puzzle: antall brikker som ikke står på målplassen (det tomme feltet telles ikke). Admissibel; dominert av Manhattan-avstand.</p>',
      more: 'kap2/heuristikker.html#lage'
    },
    'manhattan-avstand': {
      term: 'Manhattan-avstand (h₂)',
      alias: 'city block distance',
      def: '<p>Heuristikk for 8-puzzle: summen over brikkene av vannrett + loddrett avstand til målplassen. Admissibel og dominerer <em>h</em><sub>1</sub>.</p>',
      more: 'kap2/heuristikker.html#lage'
    },
    'relaksert-problem': {
      term: 'Relaksert problem',
      alias: 'relaxed problem, relaksering',
      def: '<p>Problemet med færre restriksjoner på handlingene. Optimal kostnad i det relakserte problemet er en admissibel (og konsistent) heuristikk for det opprinnelige.</p>',
      more: 'kap2/heuristikker.html#lage'
    },
    'delproblem': {
      term: 'Delproblem',
      alias: 'subproblem',
      def: '<p>En del av problemet, f.eks. å få brikke 1–4 på plass i glidebrikkespillet. Kostnaden for å løse delproblemet er en admissibel heuristikk.</p>',
      more: 'kap2/heuristikker.html#lage'
    },
    'monsterdatabase': {
      term: 'Mønsterdatabase',
      alias: 'pattern database',
      def: '<p>Forhåndsberegnede eksakte løsningskostnader for delproblemer, lagret i en database og brukt som heuristikk.</p>',
      more: 'kap2/heuristikker.html#lage'
    },

    /* ── kap3 ── */
    'lokalt-sok': {
      term: 'Lokalt søk',
      alias: 'local search',
      def: '<p>Søk som holder én (eller noen få) komplette <em>current</em>-tilstander og flytter til nabotilstander. Husker ikke stien, bruker lite (ofte konstant) minne og finner ofte gode nok løsninger i svært store rom, men er verken fullstendig eller optimalt. Motsatt av inkrementelt søk, som bygger en løsning bit for bit.</p>',
      more: 'kap3/lokalt-sok.html#idee'
    },
    'tilstandslandskap': {
      term: 'Tilstandslandskap',
      alias: 'search landscape, state-space landscape',
      def: '<p>Tilstandsrommet sett som et terreng: hvert punkt er en tilstand, høyden er verdien av objektfunksjonen (vi leter etter høyeste topp) eller kostnadsfunksjonen (laveste dal).</p>',
      more: 'kap3/lokalt-sok.html#landskap'
    },
    'objektfunksjon': {
      term: 'Objektfunksjon',
      alias: 'objective function',
      def: '<p>Funksjonen som gir hver tilstand en verdi («høyde») i lokalt søk. Vi maksimerer en objektfunksjon; en kostnadsfunksjon minimeres.</p>',
      more: 'kap3/lokalt-sok.html#landskap'
    },
    'nabolag': {
      term: 'Nabolag',
      alias: 'neighbourhood',
      def: '<p>Mengden tilstander vi når fra en tilstand med én handling. Lokalt søk bestemmer neste trekk ved å se på nabolaget. I slidenes graf er nabolaget til A lik {A, C, S}.</p>',
      more: 'kap3/lokalt-sok.html#landskap'
    },
    'globalt-maksimum': {
      term: 'Globalt maksimum',
      alias: 'global maximum, globalt optimum',
      def: '<p>Tilstanden med høyest verdi i hele landskapet. Det er dette lokalt søk egentlig vil finne.</p>',
      more: 'kap3/lokalt-sok.html#landskap'
    },
    'lokalt-maksimum': {
      term: 'Lokalt maksimum',
      alias: 'local maximum, lokalt optimum',
      def: '<p>En tilstand som er høyere enn alle naboene, men lavere enn globalt maksimum. Hill climbing stopper her fordi ingen nabo er bedre.</p>',
      more: 'kap3/lokalt-sok.html#landskap'
    },
    'plata': {
      term: 'Platå',
      alias: 'plateau',
      def: '<p>Et flatt område i landskapet der naboene har samme verdi. Enten et <em>flatt lokalt maksimum</em> (lavere på begge sider) eller en <em>skulder</em> (fortsetter oppover på den ene siden). Hill climbing stopper eller vandrer planløst.</p>',
      more: 'kap3/lokalt-sok.html#landskap'
    },
    'skulder': {
      term: 'Skulder',
      alias: 'shoulder',
      def: '<p>Et platå som fortsetter oppover i den ene enden. Hill climbing stopper der, men sidelengs trekk kan ta den over kanten.</p>',
      more: 'kap3/lokalt-sok.html#landskap'
    },
    'rygg': {
      term: 'Rygg',
      alias: 'ridge',
      def: '<p>En sekvens av lokale maksima som stiger sakte, men der ingen enkelt nabo går oppover. Vanskelig for hill climbing, som stopper eller sikksakker.</p>',
      more: 'kap3/lokalt-sok.html#landskap'
    },
    'hill-climbing': {
      term: 'Hill climbing',
      alias: 'steepest ascent, bakkeklatring',
      def: '<p>Lokalt søk som flytter til den beste naboen så lenge den er strengt bedre, og ellers returnerer current. Grådig og raskt, men setter seg fast i lokale maksima, på platåer og rygger. Heter gradient descent når vi minimerer.</p>',
      more: 'kap3/lokalt-sok.html#hill-climbing'
    },
    'sidelengs-trekk': {
      term: 'Sidelengs trekk',
      alias: 'sideways moves',
      def: '<p>Variant av hill climbing som også tillater trekk til en like god nabo, med en grense på antall på rad. Hjelper på skuldre, ikke på flate lokale maksima.</p>',
      more: 'kap3/lokalt-sok.html#hill-climbing'
    },
    'stokastisk-hill-climbing': {
      term: 'Stokastisk hill climbing',
      alias: 'stochastic hill climbing',
      def: '<p>Velger tilfeldig blant naboene som er bedre, med sannsynlighet som kan avhenge av hvor mye bedre de er. Konvergerer ofte saktere, men finner iblant bedre løsninger.</p>',
      more: 'kap3/lokalt-sok.html#hill-climbing'
    },
    'first-choice': {
      term: 'First-choice hill climbing',
      def: '<p>Genererer tilfeldige naboer én om gangen og flytter til den første som er bedre. Nyttig når en tilstand har svært mange naboer.</p>',
      more: 'kap3/lokalt-sok.html#hill-climbing'
    },
    'random-restart': {
      term: 'Random-restart hill climbing',
      alias: 'random restart',
      def: '<p>Kjører hill climbing fra tilfeldige starttilstander til en treffer målet (eller behold den beste). Med suksessannsynlighet <em>p</em> per kjøring trengs i forventning 1/<em>p</em> kjøringer. Fullstendig med sannsynlighet 1.</p>',
      more: 'kap3/lokalt-sok.html#hill-climbing'
    },
    'stokastisk-lokalt-sok': {
      term: 'Stokastisk lokalt søk',
      alias: 'stochastic local search',
      def: '<p>Lokalt søk som innimellom tar tilfeldige, ikke-så-gode valg for å komme seg ut av lokale optima (slidenes idé 1).</p>',
      more: 'kap3/lokalt-sok.html#annealing'
    },
    'simulated-annealing': {
      term: 'Simulated annealing',
      def: '<p>Lokalt søk som velger en tilfeldig nabo, alltid flytter om den er bedre, og ellers flytter med sannsynlighet <em>e</em><sup>−ΔE/T</sup>. Temperaturen <em>T</em> senkes over tid, så dårlige trekk blir sjeldnere. Senkes <em>T</em> langsomt nok, finnes globalt optimum med sannsynlighet mot 1.</p>',
      more: 'kap3/lokalt-sok.html#annealing'
    },
    'temperatur': {
      term: 'Temperatur (simulated annealing)',
      alias: 'T, schedule',
      def: '<p>Parameteren <em>T</em> som styrer hvor ofte dårlige trekk aksepteres. Høy <em>T</em>: nesten alt aksepteres. <em>T</em> → 0: ren hill climbing. En <em>schedule</em> bestemmer hvordan <em>T</em> synker.</p>',
      more: 'kap3/lokalt-sok.html#annealing'
    },
    'metaheuristikk': {
      term: 'Metaheuristikk',
      alias: 'metaheuristics',
      def: '<p>Fellesnavn på generelle strategier for å komme seg ut av lokale optima: stokastisk lokalt søk, simulated annealing og populasjonsbaserte metoder som genetiske algoritmer.</p>',
      more: 'kap3/lokalt-sok.html#annealing'
    },
    'local-beam-search': {
      term: 'Local beam search',
      def: '<p>Holder <em>k</em> tilstander. Genererer alle etterfølgerne til alle og beholder de <em>k</em> beste. Deler informasjon mellom kjøringene, i motsetning til <em>k</em> uavhengige random restarts, men kan miste mangfold.</p>',
      more: 'kap3/lokalt-sok.html#beam'
    },
    'stokastisk-beam': {
      term: 'Stochastic beam search',
      def: '<p>Variant av local beam search som velger de <em>k</em> etterfølgerne tilfeldig med sannsynlighet etter verdi, for å bevare mangfold. Ligner naturlig seleksjon.</p>',
      more: 'kap3/lokalt-sok.html#beam'
    },
    'genetisk-algoritme': {
      term: 'Genetisk algoritme',
      alias: 'GA, genetic algorithm',
      def: '<p>Populasjonsbasert metaheuristikk: start med <em>k</em> tilfeldige tilstander, velg foreldre vektet etter fitness, lag barn med crossover, muter med liten sannsynlighet, erstatt populasjonen, gjenta.</p>',
      more: 'kap3/lokalt-sok.html#genetisk'
    },
    'populasjon': {
      term: 'Populasjon',
      alias: 'population',
      def: '<p>Mengden tilstander (individer) en genetisk algoritme holder i hver generasjon.</p>',
      more: 'kap3/lokalt-sok.html#genetisk'
    },
    'fitness': {
      term: 'Fitness',
      alias: 'fitnessfunksjon',
      def: '<p>Objektfunksjonen i en genetisk algoritme; høyere er bedre. For 8-queens: antall par dronninger som ikke angriper hverandre (28 for en løsning).</p>',
      more: 'kap3/lokalt-sok.html#genetisk'
    },
    'seleksjon': {
      term: 'Seleksjon',
      alias: 'selection',
      def: '<p>Valg av foreldre i en genetisk algoritme, typisk tilfeldig med sannsynlighet proporsjonal med fitness: fitness(<em>i</em>) / Σ fitness.</p>',
      more: 'kap3/lokalt-sok.html#genetisk'
    },
    'crossover': {
      term: 'Crossover',
      alias: 'overkrysning, rekombinasjon',
      def: '<p>Kombinerer to foreldre til barn, f.eks. ved å kutte begge strengene på et tilfeldig punkt og bytte halvdeler: 327|52411 + 247|48552 gir 32748552. En stor endring som utnytter (exploit) gode løsninger.</p>',
      more: 'kap3/lokalt-sok.html#genetisk'
    },
    'mutasjon': {
      term: 'Mutasjon',
      alias: 'mutation',
      def: '<p>En liten tilfeldig endring i et barn (f.eks. ett siffer byttes) med lav sannsynlighet. Utforsker (explore) nabolaget og bevarer mangfold i populasjonen.</p>',
      more: 'kap3/lokalt-sok.html#genetisk'
    },
    'atta-dronninger': {
      term: '8-queens',
      alias: 'åtte dronninger, 8-dronningerproblemet',
      def: '<p>Plasser 8 dronninger på et sjakkbrett så ingen truer hverandre (samme rad, kolonne eller diagonal). Kodes som 8 sifre, der siffer <em>i</em> er raden til dronningen i kolonne <em>i</em>. Klassisk eksempel for lokalt søk og GA.</p>',
      more: 'kap3/lokalt-sok.html#genetisk'
    },
    'gradient-descent': {
      term: 'Gradient descent',
      def: '<p>Hill climbing når vi minimerer i et kontinuerlig rom: gå motsatt av gradienten, θ ← θ − α∇f(θ). Brukes til å trene nevrale nettverk, der tapsfunksjonen er landskapet.</p>',
      more: 'kap3/lokalt-sok.html#gradient'
    },
    'betinget-plan': {
      term: 'Betinget plan',
      alias: 'contingency plan, conditional plan',
      def: '<p>En plan med if-then-else som sier hva agenten gjør avhengig av hvilket utfall eller persept den får, f.eks. [Suck, if State = 5 then [Right, Suck] else []].</p>',
      more: 'kap3/delvis-observerbart.html#ikke-deterministisk'
    },
    'erratic-vacuum': {
      term: 'Erratic vacuum world',
      def: '<p>Støvsugerverden der Suck på en skitten rute noen ganger også renser naboruta, og Suck på en ren rute noen ganger legger igjen skitt. Suck(<em>s</em><sub>1</sub>) = {<em>s</em><sub>5</sub>, <em>s</em><sub>7</sub>}.</p>',
      more: 'kap3/delvis-observerbart.html#ikke-deterministisk'
    },
    'and-or-tre': {
      term: 'AND-OR-søketre',
      alias: 'AND-OR search',
      def: '<p>Søketre for ikke-deterministiske problemer med OR-noder (agenten velger én handling) og AND-noder (alle utfall av handlingen må håndteres). Løsningen er et deltre med mål i alle løvnoder, altså en betinget plan.</p>',
      more: 'kap3/delvis-observerbart.html#ikke-deterministisk'
    },
    'or-node': {
      term: 'OR-node',
      def: '<p>Node i et AND-OR-tre der agenten velger <em>én</em> handling (tegnes som rektangel, en tilstand). Holder at én gren fører til løsning.</p>',
      more: 'kap3/delvis-observerbart.html#ikke-deterministisk'
    },
    'and-node': {
      term: 'AND-node',
      def: '<p>Node i et AND-OR-tre for utfallene av en handling (tegnes som sirkel). Planen må føre til mål fra <em>alle</em> barna.</p>',
      more: 'kap3/delvis-observerbart.html#ikke-deterministisk'
    },
    'delvis-observerbar': {
      term: 'Delvis observerbart miljø',
      alias: 'partially observable',
      def: '<p>Miljø der agentens sensorer ikke gir hele tilstanden. Agenten må holde en belief state (eller en intern modell) for å vite hvor den kan være.</p>',
      more: 'kap3/delvis-observerbart.html#belief-state'
    },
    'belief-state': {
      term: 'Belief state',
      alias: 'trostilstand',
      def: '<p>Mengden fysiske tilstander agenten kan være i, gitt handlingene og perseptene så langt. Mål er nådd når alle tilstandene i mengden er mål.</p>',
      more: 'kap3/delvis-observerbart.html#belief-state'
    },
    'belief-space': {
      term: 'Belief-state-rom',
      alias: 'belief space',
      def: '<p>Søkerommet der nodene er belief states. Med <em>N</em> fysiske tilstander finnes opptil 2<sup><em>N</em></sup> belief states. I deterministiske miljøer kan vanlige søkealgoritmer brukes her.</p>',
      more: 'kap3/delvis-observerbart.html#belief-state'
    },
    'sensorless': {
      term: 'Sensorless problem',
      alias: 'conformant problem',
      def: '<p>Problem der agenten ikke har sensorer. Den starter med belief state lik alle tilstander og må finne en handlingssekvens som når målet uansett starttilstand, f.eks. [Right, Suck, Left, Suck] i støvsugerverdenen.</p>',
      more: 'kap3/delvis-observerbart.html#sensorless'
    },
    'prediksjon': {
      term: 'Prediksjon (predict)',
      alias: 'PREDICT',
      def: '<p>Første steg i belief-oppdatering: flytt hver tilstand i belief state med handlingen. PREDICT(<em>b</em>, <em>a</em>) = mengden av alle resultater.</p>',
      more: 'kap3/delvis-observerbart.html#persepsjon'
    },
    'oppdatering': {
      term: 'Oppdatering (update)',
      alias: 'UPDATE',
      def: '<p>Behold bare tilstandene i den predikerte belief state som gir perseptet <em>o</em>: UPDATE(<em>b̂</em>, <em>o</em>) = {<em>s</em> ∈ <em>b̂</em> : PERCEPT(<em>s</em>) = <em>o</em>}.</p>',
      more: 'kap3/delvis-observerbart.html#persepsjon'
    },
    'online-sok': {
      term: 'Online søk',
      alias: 'online search',
      def: '<p>Søk der agenten må handle for å oppdage miljøet, og veksler mellom handling og observasjon. Motsatt av offline søk, som regner ut hele løsningen fra en kjent graf først.</p>',
      more: 'kap3/delvis-observerbart.html#online'
    },
    'lrta': {
      term: 'LRTA*',
      alias: 'learning real-time A*',
      def: '<p>Online søkealgoritme som går til naboen med lavest estimert kostnad og oppdaterer heuristikkverdien for tilstanden den forlater underveis.</p>',
      more: 'kap3/delvis-observerbart.html#online'
    },

    /* ── kap4 ── */
    'csp': {
      term: 'Constraint satisfaction problem (CSP)',
      alias: 'CSP, begrensningsproblem',
      def: '<p>Et problem gitt ved variabler <em>X</em>, domener <em>D</em> og constraints <em>C</em>. Målet er en komplett tildeling av verdier til alle variablene som oppfyller alle constraints.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'domene': {
      term: 'Domene',
      alias: 'domain',
      def: '<p>Mengden verdier en variabel kan ta, <em>D<sub>i</sub></em> for <em>X<sub>i</sub></em>. Inferens (AC-3, forward checking) krymper domenene.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'constraint': {
      term: 'Constraint',
      alias: 'begrensning, skranke',
      def: '<p>En regel for hvilke verdikombinasjoner et sett variabler kan ha, f.eks. <em>X</em><sub>1</sub> ≠ <em>X</em><sub>2</sub>. Kan skrives som uttrykk eller som en liste av lovlige verditupler.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'unaer-constraint': {
      term: 'Unær constraint',
      alias: 'unary constraint',
      def: '<p>Constraint på én variabel, f.eks. <em>T</em> ≠ 0. Brukes direkte på domenet (node consistency) før søket starter.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'binaer-constraint': {
      term: 'Binær constraint',
      alias: 'binary constraint',
      def: '<p>Constraint mellom to variabler, f.eks. <em>X</em><sub>1</sub> ≠ <em>X</em><sub>2</sub>. Tegnes som en kant i constraint graph og er det AC-3 jobber med.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'global-constraint': {
      term: 'Global constraint',
      alias: 'Alldiff, alldiff',
      def: '<p>Constraint med vilkårlig mange variabler. Vanligst er Alldiff(<em>X</em><sub>1</sub>, …, <em>X<sub>k</sub></em>): alle verdiene må være ulike, som tilsvarer en ulikhet mellom hvert par.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'komplett-tildeling': {
      term: 'Komplett tildeling',
      alias: 'complete assignment',
      def: '<p>En tildeling der alle variablene har fått en verdi. En delvis tildeling mangler verdier for noen.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'konsistent-tildeling': {
      term: 'Konsistent tildeling',
      alias: 'consistent assignment, lovlig tildeling',
      def: '<p>En tildeling som ikke bryter noen constraint. I backtracking prøves bare verdier som er konsistente med tildelingen så langt.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'losning-csp': {
      term: 'Løsning (CSP)',
      alias: 'solution',
      def: '<p>En tildeling som er både konsistent og komplett.</p>',
      more: 'kap4/csp-formulering.html#definisjon'
    },
    'constraint-graf': {
      term: 'Constraint graph',
      alias: 'constraint-graf, begrensningsgraf',
      def: '<p>Graf der hver node er en variabel og hver kant en binær constraint. Tegn piler når constrainten er asymmetrisk (&gt;, «før»).</p>',
      more: 'kap4/csp-formulering.html#constraint-graf'
    },
    'kryptaritmetikk': {
      term: 'Kryptaritmetikk',
      alias: 'cryptarithmetic',
      def: '<p>Puslespill der bokstaver står for ulike sifre, f.eks. TWO + TWO = FOUR. Formuleres med Alldiff og kolonnevise sum-constraints med mentevariabler.</p>',
      more: 'kap4/csp-formulering.html#eksempler'
    },
    'constraint-propagering': {
      term: 'Constraint propagation',
      alias: 'constraint-propagering, inferens i CSP',
      def: '<p>Å bruke constraints til å fjerne verdier fra domenene, før eller under søket. Eksempler: node consistency, AC-3, forward checking.</p>',
      more: 'kap4/csp-formulering.html#bue-konsistens'
    },
    'node-konsistens': {
      term: 'Node consistency',
      alias: 'nodekonsistens',
      def: '<p>En variabel er node-consistent når alle verdiene i domenet oppfyller de unære constraintene på variabelen.</p>',
      more: 'kap4/csp-formulering.html#bue-konsistens'
    },
    'bue-konsistens': {
      term: 'Arc consistency',
      alias: 'buekonsistens, arc-consistent',
      def: '<p><em>X<sub>i</sub></em> er arc-consistent med <em>X<sub>j</sub></em> hvis hver verdi i <em>D<sub>i</sub></em> har minst én verdi i <em>D<sub>j</sub></em> som ikke bryter constrainten mellom dem. Buen (<em>X<sub>i</sub></em>, <em>X<sub>j</sub></em>) er rettet.</p>',
      more: 'kap4/csp-formulering.html#bue-konsistens'
    },
    'ac3': {
      term: 'AC-3',
      alias: 'Arc Consistency Algorithm #3',
      def: '<p>Algoritme som gjør et CSP arc-consistent med en kø av buer. Krymper <em>D<sub>i</sub></em>, legges (<em>X<sub>k</sub></em>, <em>X<sub>i</sub></em>) for de andre naboene tilbake. Tomt domene ⇒ ingen løsning. Kjøretid <em>O</em>(<em>cd</em>³).</p>',
      more: 'kap4/csp-formulering.html#ac3'
    },
    'revise': {
      term: 'REVISE',
      def: '<p>Hjelpefunksjonen i AC-3: fjerner fra <em>D<sub>i</sub></em> alle verdier som ikke har støtte i <em>D<sub>j</sub></em>, og returnerer true hvis noe ble fjernet.</p>',
      more: 'kap4/csp-formulering.html#ac3'
    },
    'forward-checking': {
      term: 'Forward checking',
      alias: 'FC',
      def: '<p>Etter en tildeling <em>X</em> = <em>v</em>: fjern verdier som bryter en constraint fra domenene til de utildelte naboene til <em>X</em>. Sprer ikke endringene videre slik AC-3 gjør.</p>',
      more: 'kap4/csp-formulering.html#forward-checking'
    },
    'mac': {
      term: 'MAC',
      alias: 'maintaining arc consistency',
      def: '<p>Inferens i backtracking: etter <em>X<sub>i</sub></em> = <em>v</em> kjøres AC-3 med buene (<em>X<sub>j</sub></em>, <em>X<sub>i</sub></em>) fra de utildelte naboene i startkøen. Sterkere enn forward checking.</p>',
      more: 'kap4/backtracking.html#inferens'
    },
    'backtracking-sok': {
      term: 'Backtracking search',
      alias: 'backtracking, tilbakesporing',
      def: '<p>Dybde-først-søk som tildeler én variabel per nivå og går tilbake til forrige variabel når ingen verdi er konsistent.</p>',
      more: 'kap4/backtracking.html#backtracking'
    },
    'kommutativitet': {
      term: 'Kommutativitet (CSP)',
      alias: 'commutative',
      def: '<p>Et CSP er kommutativt: rekkefølgen tildelingene gjøres i, påvirker ikke resultatet. Derfor holder det å velge én variabel per nivå i søketreet (<em>d<sup>n</sup></em> blader i stedet for <em>n</em>!<em>d<sup>n</sup></em>).</p>',
      more: 'kap4/backtracking.html#backtracking'
    },
    'mrv': {
      term: 'Minimum remaining values (MRV)',
      alias: 'most constrained variable, fail-first',
      def: '<p>Variabelvalg: velg den utildelte variabelen med færrest gjenværende lovlige verdier.</p>',
      more: 'kap4/backtracking.html#mrv'
    },
    'degree-heuristikk': {
      term: 'Degree-heuristikken',
      alias: 'degree heuristic',
      def: '<p>Variabelvalg: velg variabelen som inngår i flest constraints med andre utildelte variabler. Brukes som tie-breaker for MRV.</p>',
      more: 'kap4/backtracking.html#mrv'
    },
    'lcv': {
      term: 'Least constraining value (LCV)',
      alias: 'fail-last',
      def: '<p>Verdivalg: prøv først verdien som utelukker færrest verdier hos naboene i constraint graph.</p>',
      more: 'kap4/backtracking.html#lcv'
    },
    'min-conflicts': {
      term: 'Min-conflicts',
      alias: 'MIN-CONFLICTS',
      def: '<p>Lokalt søk for CSP: start med en komplett tildeling, velg tilfeldig en variabel i konflikt og gi den verdien som bryter færrest constraints. Gjenta.</p>',
      more: 'kap4/backtracking.html#lokalt-sok'
    },
    'tre-csp': {
      term: 'Tre-strukturert CSP',
      alias: 'tree-structured CSP, topologisk sortering',
      def: '<p>CSP der constraint graph er et tre; kan løses i lineær tid med topologisk sortering og arc consistency. Boka 5.5, ute av pensum 2026.</p>',
      more: 'kap4/backtracking.html#lokalt-sok'
    },

    /* ── kap6 ── */
    'proposisjonssymbol': {
      term: 'Proposisjonssymbol',
      alias: 'proposition symbol, atom',
      def: '<p>Et symbol som er enten sant eller usant, f.eks. <em>Rain</em> ∈ {true, false}. Skrives med stor forbokstav: <em>P</em>, <em>Q</em>, <em>Rain</em>.</p>',
      more: 'kap6/pl-grunnlag.html#syntaks'
    },
    'setning': {
      term: 'Setning (PL)',
      alias: 'sentence',
      def: '<p>Et utsagn som kan være sant eller usant, bygget av proposisjonssymboler og konnektiver, f.eks. <em>Rain</em> ∧ <em>Wind</em>. Betegnes med greske bokstaver α, β, γ.</p>',
      more: 'kap6/pl-grunnlag.html#syntaks'
    },
    'konnektiv': {
      term: 'Konnektiv',
      alias: 'logical connective',
      def: '<p>Operatorene som setter sammen setninger: ¬ (ikke), ∧ (og), ∨ (eller), ⇒ (implikasjon), ⇔ (hvis og bare hvis). Presedens fra sterkest: ¬, ∧, ∨, ⇒, ⇔.</p>',
      more: 'kap6/pl-grunnlag.html#syntaks'
    },
    'modell': {
      term: 'Modell (PL)',
      alias: 'model, symbol assignment',
      def: '<p>En tilordning av sann/usann til alle proposisjonssymbolene, f.eks. {<em>Rain</em> = true, <em>Wind</em> = false}. Med <em>n</em> symboler finnes 2<sup>n</sup> modeller.</p>',
      more: 'kap6/pl-grunnlag.html#syntaks'
    },
    'kunnskapsbase': {
      term: 'Kunnskapsbase (KB)',
      alias: 'knowledge base',
      def: '<p>En mengde setninger som antas å være sanne. Brukt som én setning er KB konjunksjonen av alle setningene i den.</p>',
      more: 'kap6/pl-grunnlag.html#syntaks'
    },
    'tilfredsstille': {
      term: 'Tilfredsstille',
      alias: 'satisfy, satisfaction',
      def: '<p>En modell <em>m</em> tilfredsstiller α hvis α er sann i <em>m</em>. <em>M</em>(α) er mengden av alle modeller som tilfredsstiller α.</p>',
      more: 'kap6/pl-grunnlag.html#entailment'
    },
    'entailment': {
      term: 'Entailment (⊨)',
      alias: 'logisk konsekvens, medfører',
      def: '<p>α ⊨ β hvis og bare hvis <em>M</em>(α) ⊆ <em>M</em>(β): β er sann i alle modeller der α er sann. Ekvivalent: α ⇒ β er sann i alle modeller, og α ∧ ¬β er utilfredsstillbar.</p>',
      more: 'kap6/pl-grunnlag.html#entailment'
    },
    'modellsjekking': {
      term: 'Modellsjekking',
      alias: 'model checking, sannhetstabell',
      def: '<p>Å avgjøre KB ⊨ α ved å gå gjennom alle 2<sup>n</sup> modellene (sannhetstabellen) og sjekke at α er sann overalt der KB er sann. Korrekt, men eksponentielt.</p>',
      more: 'kap6/pl-grunnlag.html#entailment'
    },
    'gyldig': {
      term: 'Gyldig setning',
      alias: 'valid, tautologi',
      def: '<p>En setning som er sann i alle modeller, f.eks. α ∨ ¬α ≡ <em>True</em>. α ⊨ β hvis og bare hvis α ⇒ β er gyldig.</p>',
      more: 'kap6/pl-grunnlag.html#entailment'
    },
    'tilfredsstillbar': {
      term: 'Tilfredsstillbar',
      alias: 'satisfiable; utilfredsstillbar, unsatisfiable',
      def: '<p>En setning er tilfredsstillbar hvis den er sann i minst én modell. Er den sann i ingen (f.eks. α ∧ ¬α), er den utilfredsstillbar, en selvmotsigelse.</p>',
      more: 'kap6/pl-grunnlag.html#entailment'
    },
    'reductio': {
      term: 'Bevis ved selvmotsigelse',
      alias: 'reductio ad absurdum, refutation, proof by contradiction',
      def: '<p>α ⊨ β hvis og bare hvis α ∧ ¬β er utilfredsstillbar (<em>M</em>(α ∧ ¬β) = ∅). Grunnlaget for resolusjonsrefutasjon.</p>',
      more: 'kap6/pl-grunnlag.html#entailment'
    },
    'logisk-ekvivalens': {
      term: 'Logisk ekvivalens (≡)',
      alias: 'logical equivalence',
      def: '<p>α ≡ β hvis α ⇔ β er sann i alle modeller, altså α ⊨ β og β ⊨ α. Ekvivalensene (De Morgan, implication elimination, distributivitet …) kan brukes som inferensregler.</p>',
      more: 'kap6/pl-grunnlag.html#ekvivalenser'
    },
    'kontraposisjon': {
      term: 'Kontraposisjon',
      alias: 'contraposition',
      def: '<p>α ⇒ β ≡ ¬β ⇒ ¬α. Forklarer hvorfor Modus Tollens er gyldig.</p>',
      more: 'kap6/pl-grunnlag.html#ekvivalenser'
    },
    'de-morgan': {
      term: 'De Morgans lover',
      alias: 'De Morgan',
      def: '<p>¬(α ∧ β) ≡ ¬α ∨ ¬β og ¬(α ∨ β) ≡ ¬α ∧ ¬β. Brukes til å flytte ¬ innover i CNF-konvertering.</p>',
      more: 'kap6/pl-grunnlag.html#ekvivalenser'
    },
    'inferensregel': {
      term: 'Inferensregel',
      alias: 'inference rule',
      def: '<p>Et mønster for å utlede en ny setning fra setninger i KB uten å se på modeller. Premissene står over streken, konklusjonen under. Eksempler: Modus Ponens, Modus Tollens, And-Elimination, resolusjon.</p>',
      more: 'kap6/pl-grunnlag.html#inferensregler'
    },
    'modus-ponens': {
      term: 'Modus Ponens',
      def: '<p>Fra α ⇒ β og α kan vi utlede β. Den eneste regelen forward og backward chaining bruker.</p>',
      more: 'kap6/pl-grunnlag.html#inferensregler'
    },
    'modus-tollens': {
      term: 'Modus Tollens',
      def: '<p>Fra α ⇒ β og ¬β kan vi utlede ¬α. Konklusjonen er usann, altså er forutsetningen usann. Påkrevd i Ord. 2023 oppg. 3.1.</p>',
      more: 'kap6/pl-grunnlag.html#inferensregler'
    },
    'and-elimination': {
      term: 'And-Elimination',
      def: '<p>Fra α ∧ β kan vi utlede α (og β). Henter ut ett ledd av en konjunksjon.</p>',
      more: 'kap6/pl-grunnlag.html#inferensregler'
    },
    'disjunctive-syllogism': {
      term: 'Disjunctive Syllogism',
      alias: 'disjunktiv syllogisme',
      def: '<p>Fra α ∨ β og ¬α kan vi utlede β. Et spesialtilfelle av unit resolution.</p>',
      more: 'kap6/pl-grunnlag.html#inferensregler'
    },
    'unit-resolution': {
      term: 'Unit resolution',
      def: '<p>Resolusjon der den ene klausulen er én literal: fra ℓ<sub>1</sub> ∨ … ∨ ℓ<sub>k</sub> og ¬ℓ<sub>i</sub> utledes klausulen uten ℓ<sub>i</sub>. Disjunctive Syllogism og Modus Ponens er spesialtilfeller.</p>',
      more: 'kap6/pl-grunnlag.html#inferensregler'
    },
    'avledning': {
      term: 'Avledning (⊢)',
      alias: 'derivation, KB ⊢ α',
      def: '<p>KB ⊢<sub>i</sub> α: setningen α kan utledes fra KB med inferensalgoritmen <em>i</em>. En syntaktisk relasjon, i motsetning til ⊨ som er semantisk.</p>',
      more: 'kap6/pl-grunnlag.html#inferensregler'
    },
    'sunnhet': {
      term: 'Sunnhet',
      alias: 'soundness, sound',
      def: '<p>En inferensalgoritme er sunn hvis den bare utleder setninger som følger: KB ⊢<sub>i</sub> α ⇒ KB ⊨ α. Modus Ponens er sunn.</p>',
      more: 'kap6/pl-grunnlag.html#inferensregler'
    },
    'horn-klausul': {
      term: 'Horn-klausul',
      alias: 'Horn clause',
      def: '<p>En klausul med høyst én positiv literal: en definite clause <em>P</em><sub>1</sub> ∧ … ∧ <em>P</em><sub>n</sub> ⇒ <em>Q</em>, et faktum <em>Q</em>, eller en goal clause <em>P</em><sub>1</sub> ∧ … ∧ <em>P</em><sub>n</sub> ⇒ <em>False</em>.</p>',
      more: 'kap6/pl-grunnlag.html#horn'
    },
    'definite-clause': {
      term: 'Definite clause',
      def: '<p>En klausul med nøyaktig én positiv literal, <em>P</em><sub>1</sub> ∧ … ∧ <em>P</em><sub>n</sub> ⇒ <em>Q</em> (faktum når n = 0). Består KB bare av slike, er Modus Ponens sunn og fullstendig, og KB ⊨ <em>Q</em> avgjøres i lineær tid.</p>',
      more: 'kap6/pl-grunnlag.html#horn'
    },
    'forward-chaining': {
      term: 'Forward chaining',
      def: '<p>Datadrevet inferens på definite clauses: start med faktaene og bruk Modus Ponens på regler der alle premissene er kjent, til spørringen er utledet. Boka teller ukjente premisser per regel (count).</p>',
      more: 'kap6/pl-grunnlag.html#chaining'
    },
    'backward-chaining': {
      term: 'Backward chaining',
      def: '<p>Måldrevet inferens på definite clauses: start i spørringen <em>Q</em>, finn regler med <em>Q</em> som konklusjon, og vis premissene deres rekursivt. Bruker bare Modus Ponens.</p>',
      more: 'kap6/pl-grunnlag.html#chaining'
    },
    'literal': {
      term: 'Literal',
      def: '<p>Et proposisjonssymbol eller et negert proposisjonssymbol, f.eks. <em>Q</em> eller ¬<em>P</em>.</p>',
      more: 'kap6/resolusjon.html#regel'
    },
    'klausul': {
      term: 'Klausul',
      alias: 'clause',
      def: '<p>En disjunksjon av literaler, f.eks. ¬<em>P</em> ∨ <em>Q</em> ∨ ¬<em>R</em>. Den tomme klausulen (ingen literaler) er usann.</p>',
      more: 'kap6/resolusjon.html#regel'
    },
    'resolusjonsregel': {
      term: 'Resolusjonsregelen',
      alias: 'resolution inference rule, resolvent',
      def: '<p>Fra to klausuler der den ene har literalen <em>c</em> og den andre ¬<em>c</em>, utledes en klausul (resolventen) med alle de andre literalene fra begge. Stryk bare ett komplementært par om gangen.</p>',
      more: 'kap6/resolusjon.html#regel'
    },
    'faktorisering': {
      term: 'Faktorisering',
      alias: 'factoring',
      def: '<p>Å slå sammen like literaler i en klausul: <em>A</em> ∨ <em>A</em> ≡ <em>A</em>. Gjøres etter hvert resolusjonssteg.</p>',
      more: 'kap6/resolusjon.html#regel'
    },
    'resolusjonsalgoritmen': {
      term: 'Resolusjonsalgoritmen',
      alias: 'resolution inference algorithm, PL-RESOLUTION',
      def: '<p>Gjentatt bruk av resolusjonsregelen på klausulene i KB ∧ ¬α. Sunn og fullstendig for all proposisjonell logikk, men eksponentiell i størrelsen på KB.</p>',
      more: 'kap6/resolusjon.html#regel'
    },
    'cnf': {
      term: 'Konjunktiv normalform (CNF)',
      alias: 'conjunctive normal form',
      def: '<p>En konjunksjon av klausuler, f.eks. (<em>P</em> ∨ <em>Q</em> ∨ ¬<em>R</em>) ∧ (¬<em>S</em> ∨ <em>T</em>). Alle PL-setninger kan konverteres: fjern ⇔, fjern ⇒, flytt ¬ inn, distribuer ∨ over ∧.</p>',
      more: 'kap6/resolusjon.html#cnf'
    },
    'resolusjonsrefutasjon': {
      term: 'Resolusjonsrefutasjon',
      alias: 'resolution refutation',
      def: '<p>Vis KB ⊨ α ved å legge ¬α til KB, konvertere til klausuler og resolvere til den tomme klausulen. Kommer det ingen nye klausuler, er KB ⊭ α.</p>',
      more: 'kap6/resolusjon.html#refutasjon'
    },
    'tom-klausul': {
      term: 'Tom klausul (□)',
      alias: 'empty clause',
      def: '<p>Klausulen uten literaler, utledet fra <em>P</em> og ¬<em>P</em>. Den er alltid usann, så mengden den kom fra er utilfredsstillbar.</p>',
      more: 'kap6/resolusjon.html#refutasjon'
    },
    'unit-preference': {
      term: 'Unit preference',
      def: '<p>Heuristikk for resolusjon: resolver først par der minst én klausul er én literal. Resolventen blir kortere, og den tomme klausulen nås ofte raskere.</p>',
      more: 'kap6/resolusjon.html#refutasjon'
    },

    /* ── kap7 ── */
    'fol': {
      term: 'Førsteordens logikk (FOL)',
      alias: 'first-order logic, predikatlogikk',
      def: '<p>Logikk der verden består av objekter, relasjoner og funksjoner. Legger til variabler, kvantorer (∀, ∃), predikater og funksjoner i forhold til proposisjonell logikk, slik at én setning kan si noe om alle objekter.</p>',
      more: 'kap7/fol.html#begrensninger'
    },
    'proposisjonell-logikk': {
      term: 'Proposisjonell logikk (PL)',
      alias: 'utsagnslogikk, propositional logic',
      def: '<p>Logikk der hvert symbol er et helt utsagn som er sant eller usant, uten indre struktur. Har begrenset uttrykkskraft: trenger én setning per objekt for å si noe om mange like objekter.</p>',
      more: 'kap7/fol.html#begrensninger'
    },
    'objekt': {
      term: 'Objekt',
      def: '<p>En ting i verden (domenet) som FOL snakker om, f.eks. Alice, Bob eller Arithmetic. Termer viser til objekter.</p>',
      more: 'kap7/fol.html#begrensninger'
    },
    'relasjon': {
      term: 'Relasjon',
      def: '<p>En sammenheng mellom objekter (eller en egenskap ved ett objekt) som enten gjelder eller ikke, f.eks. Knows(Alice, Arithmetic). Uttrykkes med predikater.</p>',
      more: 'kap7/fol.html#begrensninger'
    },
    'funksjon': {
      term: 'Funksjon (FOL)',
      def: '<p>Avbilder ett eller flere objekter til nøyaktig ett objekt, f.eks. Mother(Alice) som viser til Carrie. En funksjon brukt på termer er selv en <em>term</em>, ikke en setning.</p>',
      more: 'kap7/fol.html#syntaks'
    },
    'term': {
      term: 'Term',
      def: '<p>Et uttrykk som viser til et objekt: en konstant (Alice), en variabel (x) eller en funksjon brukt på termer (Mother(Alice)).</p>',
      more: 'kap7/fol.html#syntaks'
    },
    'konstant': {
      term: 'Konstant',
      alias: 'konstantsymbol',
      def: '<p>Term som viser til et bestemt objekt, f.eks. Alice, Bob, Arithmetic. I standardsemantikk kan to konstanter vise til samme objekt.</p>',
      more: 'kap7/fol.html#syntaks'
    },
    'variabel': {
      term: 'Variabel',
      def: '<p>Term for et uspesifisert objekt, f.eks. x. Bindes av en kvantor (∀x, ∃x) og kan erstattes med konstanter via substitusjon.</p>',
      more: 'kap7/fol.html#syntaks'
    },
    'predikat': {
      term: 'Predikat',
      def: '<p>Symbol for en relasjon eller egenskap for termer, f.eks. Student(x) eller Knows(x, y). Brukt på termer gir det en atomær setning som er sann eller usann.</p>',
      more: 'kap7/fol.html#syntaks'
    },
    'likhet': {
      term: 'Likhet (=)',
      alias: 'equality',
      def: '<p>Atomær setning som sier at to termer viser til samme objekt, f.eks. Bob = Bobby. Brukes med negasjon for «forskjellige»: ∃x, y Brother(Bob, x) ∧ Brother(Bob, y) ∧ ¬(x = y).</p>',
      more: 'kap7/fol.html#syntaks'
    },
    'atomaer-setning': {
      term: 'Atomær setning',
      def: '<p>Et predikat eller en likhet brukt på termer, f.eks. Knows(Alice, Arithmetic). Er sann eller usann i en modell.</p>',
      more: 'kap7/fol.html#syntaks'
    },
    'kompleks-setning': {
      term: 'Kompleks setning',
      def: '<p>Setning bygget av andre setninger med konnektiver (¬, ∧, ∨, ⇒, ⇔) eller kvantorer (∀, ∃).</p>',
      more: 'kap7/fol.html#syntaks'
    },
    'kvantor': {
      term: 'Kvantor',
      alias: 'quantifier',
      def: '<p>Binder en variabel og sier hvor mange objekter en setning gjelder for: allkvantoren ∀ («for alle») eller eksistenskvantoren ∃ («det finnes»).</p>',
      more: 'kap7/fol.html#kvantorer'
    },
    'allkvantor': {
      term: 'Allkvantor ∀',
      alias: 'universal quantification',
      def: '<p>∀x P(x) er sann hvis P er sann for alle objekter; en stor konjunksjon P(A) ∧ P(B) ∧ … Brukes nesten alltid med ⇒: ∀x Student(x) ⇒ Knows(x, Arithmetic).</p>',
      more: 'kap7/fol.html#kvantorer'
    },
    'eksistenskvantor': {
      term: 'Eksistenskvantor ∃',
      alias: 'existential quantification',
      def: '<p>∃x P(x) er sann hvis P er sann for minst ett objekt; en stor disjunksjon P(A) ∨ P(B) ∨ … Brukes nesten alltid med ∧: ∃x Student(x) ∧ Knows(x, Arithmetic).</p>',
      more: 'kap7/fol.html#kvantorer'
    },
    'nestede-kvantorer': {
      term: 'Nestede kvantorer',
      def: '<p>Flere kvantorer etter hverandre. Like kvantorer kan slås sammen (∀x ∀y = ∀x, y), men rekkefølgen av ulike betyr noe: ∀x ∃y Loves(x, y) («alle elsker noen») er ikke det samme som ∃y ∀x Loves(x, y) («noen er elsket av alle»).</p>',
      more: 'kap7/fol.html#kvantorer'
    },
    'de-morgan-kvantor': {
      term: 'De Morgan for kvantorer',
      def: '<p>¬∀x P(x) ≡ ∃x ¬P(x) og ¬∃x P(x) ≡ ∀x ¬P(x). Negasjonen flyttes inn og kvantoren byttes, akkurat som ¬(A ∧ B) ≡ ¬A ∨ ¬B.</p>',
      more: 'kap7/fol.html#kvantorer'
    },
    'modell-fol': {
      term: 'Modell (FOL)',
      def: '<p>Et domene av objekter pluss en interpretasjon: hvilket objekt hver konstant viser til, hvilke tupler hvert predikat er sant for, og hva hver funksjon avbilder til. En setning er sann eller usann i en modell.</p>',
      more: 'kap7/fol.html#modeller'
    },
    'interpretasjon': {
      term: 'Interpretasjon',
      def: '<p>Den delen av en FOL-modell som knytter symbolene til domenet: konstant-, predikat- og funksjonstilordninger (constant/predicate/function assignments i slidene).</p>',
      more: 'kap7/fol.html#modeller'
    },
    'databasesemantikk': {
      term: 'Databasesemantikk',
      def: '<p>Enkleste FOL-semantikk: hver konstant er sitt eget objekt, og alt som ikke er oppgitt som sant er usant (else = false). Modellen er bare predikattilordninger.</p>',
      more: 'kap7/fol.html#modeller'
    },
    'standardsemantikk': {
      term: 'Standardsemantikk',
      def: '<p>FOL-semantikk der objektene er skilt fra navnene: to konstanter kan vise til samme objekt, og det kan finnes objekter uten navn. Derfor trengs likhet for å si «to forskjellige».</p>',
      more: 'kap7/fol.html#modeller'
    },
    'aksiom': {
      term: 'Aksiom',
      def: '<p>En setning som tas som sann uten å utledes fra andre setninger, f.eks. Peano-aksiomene for naturlige tall.</p>',
      more: 'kap7/fol.html#modeller'
    },
    'substitusjon': {
      term: 'Substitusjon',
      def: '<p>Bytte av variabler med termer, skrevet θ = {x/Alice}. Svaret på en spørring med variabler, f.eks. hvilke x som gir KB ⊨ Knows(x, Arithmetic), er en liste substitusjoner.</p>',
      more: 'kap7/fol.html#sporringer'
    },

    /* ── oving ── */
    'best-first-sok': {
      term: 'Best-first search',
      def: '<p>Generell søkealgoritme (boka s. 91) som alltid ekspanderer noden med lavest \\(f\\)-verdi i en prioritetskø, og sjekker mål når noden tas ut. UCS har \\(f = g\\), greedy \\(f = h\\) og A* \\(f = g + h\\).</p>',
      more: 'oving/assignment1.html#versjon',
      alias: ['best-first-search', 'beste-først-søk']
    },
    'ac-3': {
      term: 'AC-3',
      def: '<p>Algoritme for buekonsistens (boka s. 171). Holder en kø av buer \\((X_i, X_j)\\); REVISE sletter verdier i \\(D_i\\) uten støtte i \\(D_j\\), og ved endring legges \\((X_k, X_i)\\) inn for de andre naboene. Returnerer false om et domene blir tomt.</p>',
      more: 'oving/assignment2.html#oppgaven',
      alias: ['AC3', 'arc consistency algorithm']
    },
    'buekonsistens': {
      term: 'Buekonsistens (arc consistency)',
      def: '<p>\\(X_i\\) er buekonsistent med \\(X_j\\) hvis hver verdi i \\(D_i\\) har minst én verdi i \\(D_j\\) som oppfyller constrainten mellom dem. Et CSP er arc-consistent når alle buer, i begge retninger, er det.</p>',
      more: 'oving/assignment2.html#feil',
      alias: ['arc consistency', 'arc-consistent']
    },
    /* ── kap5 ── */
    'perfekt-informasjon': {
      term: 'Perfekt informasjon',
      alias: 'perfect information',
      def: '<p>Begge spillerne ser hele tilstanden (sjakk, go, backgammon). Turbaserte spill med perfekt informasjon løses med minimax og alpha-beta.</p>',
      more: 'kap5/minimax.html#spill'
    },
    'imperfekt-informasjon': {
      term: 'Imperfekt informasjon',
      alias: 'imperfect information',
      def: '<p>Spillerne ser ikke hele tilstanden eller trekker samtidig (senke slagskip, stein-saks-papir, poker). Minimax kan ikke brukes direkte.</p>',
      more: 'kap5/minimax.html#spill'
    },
    'terminaltilstand': {
      term: 'Terminaltilstand',
      alias: 'terminal state, isTerminal',
      def: '<p>En tilstand der spillet er slutt; isTerminal(<em>s</em>) er sann. Bare terminaltilstander har utility.</p>',
      more: 'kap5/minimax.html#spill'
    },
    'utility-spill': {
      term: 'Utility i spill',
      alias: 'utility(s, p), utility function',
      def: '<p>utility(<em>s</em>, <em>p</em>): verdien av terminaltilstanden <em>s</em> for spiller <em>p</em>, f.eks. +1 for seier, 0 for uavgjort og −1 for tap. Minimax regner med utility(<em>s</em>, MAX).</p>',
      more: 'kap5/minimax.html#spill'
    },
    'spilltre': {
      term: 'Spilltre',
      alias: 'game tree',
      def: '<p>Søketre der nivåene veksler mellom spillerne (MAX, MIN, eventuelt CHANCE). Kantene er trekk, bladene terminaltilstander med utility.</p>',
      more: 'kap5/minimax.html#spill'
    },
    'bottespillet': {
      term: 'Bøttespillet',
      alias: 'bucket game',
      def: '<p>Eksempelspill: MAX velger bøtte A {−50, 50}, B {3, 1} eller C {−5, 15}, så velger MIN et tall fra bøtta. Minimax gir B (verdi 1), expectimax C (5), med myntkast C (−2.0).</p>',
      more: 'kap5/minimax.html#spill'
    },
    'minimax': {
      term: 'Minimax',
      alias: 'minimax search',
      def: '<p>Gir hver node verdien MAX får når begge spiller optimalt: utility i bladene, største barneverdi i MAX-noder, minste i MIN-noder. MAX velger argmax i roten.</p>',
      more: 'kap5/minimax.html#minimax'
    },
    'max-min': {
      term: 'MAX- og MIN-node',
      alias: 'MAX, MIN, max-node, min-node',
      def: '<p>MAX er spilleren som vil ha høy verdi (tegnes som trekant opp), MIN spilleren som vil ha lav verdi (trekant ned). toMove(<em>s</em>) sier hvem som er i trekket.</p>',
      more: 'kap5/minimax.html#minimax'
    },
    'alpha-beta': {
      term: 'Alpha-beta pruning',
      alias: 'alfa-beta, alpha-beta search',
      def: '<p>Minimax som bærer med seg grensene α og β og hopper over grener som ikke kan endre rotverdien: MAX returnerer når v ≥ β, MIN når v ≤ α. Gir samme trekk som minimax.</p>',
      more: 'kap5/minimax.html#alpha-beta'
    },
    'alfa': {
      term: 'α (alfa)',
      alias: 'alpha',
      def: '<p>Beste verdi en MAX-node på stien så langt er garantert. Starter på −∞ og oppdateres bare i MAX-noder: α ← max(α, v).</p>',
      more: 'kap5/minimax.html#alpha-beta'
    },
    'beta': {
      term: 'β (beta)',
      alias: 'beta',
      def: '<p>Beste verdi en MIN-node på stien så langt er garantert. Starter på ∞ og oppdateres bare i MIN-noder: β ← min(β, v).</p>',
      more: 'kap5/minimax.html#alpha-beta'
    },
    'klipping': {
      term: 'Klipping',
      alias: 'pruning, klippe',
      def: '<p>Å la være å utforske resten av barna til en node fordi verdien allerede ligger utenfor [α, β] og ikke kan påvirke valget lenger opp.</p>',
      more: 'kap5/minimax.html#alpha-beta'
    },
    'trekkordning': {
      term: 'Trekkordning',
      alias: 'move ordering',
      def: '<p>Rekkefølgen barna utforskes i. Beste trekk først (høyest i MAX, lavest i MIN) gir mest klipping, omtrent O(<em>b</em><sup><em>m</em>/2</sup>) mot O(<em>b</em><sup><em>m</em></sup>).</p>',
      more: 'kap5/minimax.html#oppg-rekkefolge'
    },
    'halveringsspillet': {
      term: 'Halveringsspillet',
      alias: 'halving game, Nim',
      def: '<p>Variant av Nim: start med N, spillerne trekker fra 1 eller erstatter N med ⌊N/2⌋, og den som sitter igjen med 0 vinner. Med N = 5 vinner MAX ved å trekke fra 1.</p>',
      more: 'kap5/minimax.html#halvering'
    },
    'heuristisk-minimax': {
      term: 'Heuristisk minimax',
      alias: 'hMinimax, heuristic minimax, H-minimax',
      def: '<p>Minimax som stopper ved en cutoff-test (typisk dybde <em>d</em>) og bruker eval(<em>s</em>, MAX) som estimat av minimax-verdien der.</p>',
      more: 'kap5/minimax.html#heuristisk'
    },
    'cutoff-test': {
      term: 'Cutoff-test',
      alias: 'isCutoff(s, d)',
      def: '<p>isCutoff(<em>s</em>, <em>d</em>) avgjør når heuristisk minimax skal slutte å søke og bruke eval i stedet, typisk ved en fast dybde.</p>',
      more: 'kap5/minimax.html#heuristisk'
    },
    'eval-spill': {
      term: 'Eval-funksjon (spill)',
      alias: 'eval(s, MAX), evaluation function',
      def: '<p>Estimat av minimax(<em>s</em>) i en ikke-terminal tilstand. For sjakk en vektet sum av material, mobility, kingSafety og centerControl.</p>',
      more: 'kap5/minimax.html#heuristisk'
    },
    'sjansenode': {
      term: 'Sjansenode',
      alias: 'CHANCE, chance node',
      def: '<p>Node der utfallet avgjøres av tilfeldighet (mynt, terning). Verdien er det vektede snittet Σ P(a) · verdi(barn). Tegnes som sirkel.</p>',
      more: 'kap5/stokastiske-spill.html#expectimax'
    },
    'expectimax': {
      term: 'Expectimax',
      def: '<p>Søk med MAX- og sjansenoder: MAX tar maks, sjansenoder tar forventet verdi. Brukes når motspilleren oppfører seg tilfeldig.</p>',
      more: 'kap5/stokastiske-spill.html#expectimax'
    },
    'stokastisk-spill': {
      term: 'Stokastisk spill',
      alias: 'stochastic game',
      def: '<p>Spill med ytre tilfeldighet, som terningkast, i tillegg til spillernes trekk. Eksempel: backgammon, det modifiserte bøttespillet.</p>',
      more: 'kap5/stokastiske-spill.html#expectiminimax'
    },
    'expectiminimax': {
      term: 'Expectiminimax',
      def: '<p>Minimax med sjansenoder: MAX tar maks, MIN tar min og sjansenoder Σ P · verdi. Regnes nedenfra: MIN-noder først, så sjanse, så MAX. Ord. 2023 oppg. 6.</p>',
      more: 'kap5/stokastiske-spill.html#expectiminimax'
    },
    'mcts': {
      term: 'Monte Carlo tree search (MCTS)',
      alias: 'Monte Carlo-tresøk',
      def: '<p>Bygger søketreet gradvis og verdsetter noder med playouts i stedet for eval. Gjentar selection, expansion, simulation og backpropagation, og returnerer trekket med flest playouts.</p>',
      more: 'kap5/stokastiske-spill.html#mcts'
    },
    'playout': {
      term: 'Playout',
      alias: 'simulering, simulation',
      def: '<p>Én simulering fra en node til spillet er slutt, med tilfeldige (eller policy-styrte) trekk. Resultatet telles i U og N langs stien.</p>',
      more: 'kap5/stokastiske-spill.html#mcts'
    },
    'mcts-faser': {
      term: 'MCTS-fasene',
      alias: 'selection, expansion, simulation, backpropagation',
      def: '<p>(1) Selection: gå ned etter seleksjonspolicyen. (2) Expansion: legg til et nytt barn. (3) Simulation: playout til slutt. (4) Backpropagation: oppdater U og N opp til roten.</p>',
      more: 'kap5/stokastiske-spill.html#mcts'
    },
    'seleksjonspolicy': {
      term: 'Seleksjonspolicy',
      alias: 'selection policy',
      def: '<p>Regelen MCTS bruker for å velge barn i selection-fasen. Må balansere exploration og exploitation; UCB1 er standardvalget.</p>',
      more: 'kap5/stokastiske-spill.html#mcts'
    },
    'ucb1': {
      term: 'UCB1',
      alias: 'upper confidence bound, UCT',
      def: '<p>UCB1(<em>n</em>) = U(<em>n</em>)/N(<em>n</em>) + C·√(ln N(parent(<em>n</em>)) / N(<em>n</em>)). Barnet med høyest verdi velges. Vanlig C = √2; høy C gir mer utforsking.</p>',
      more: 'kap5/stokastiske-spill.html#ucb1'
    },
    'exploration-exploitation': {
      term: 'Exploration og exploitation',
      alias: 'utforsking og utnytting',
      def: '<p>Exploration: prøv tilstander med få playouts. Exploitation: bruk tilstander som har gjort det godt. UCB1 har ett ledd for hver.</p>',
      more: 'kap5/stokastiske-spill.html#ucb1'
    },
    'delvis-observerbart-spill': {
      term: 'Delvis observerbart spill',
      alias: 'partially observable game, imperfect information game',
      def: '<p>Spill der tilstanden ikke er fullt observerbar eller spillerne trekker samtidig. Minimax og lignende algoritmer kan ikke brukes; man regner med blandede strategier.</p>',
      more: 'kap5/stokastiske-spill.html#delvis-observerbare'
    },
    'blandet-strategi': {
      term: 'Blandet strategi',
      alias: 'mixed strategy',
      def: '<p>En sannsynlighetsfordeling over trekk, f.eks. ⅓ stein, ⅓ papir, ⅓ saks. Forventet verdi regnes som vektet snitt over begge spilleres sannsynligheter.</p>',
      more: 'kap5/stokastiske-spill.html#delvis-observerbare'
    },
    'nash-likevekt': {
      term: 'Nash-likevekt',
      alias: 'Nash equilibrium',
      def: '<p>Strategier der ingen spiller tjener på å endre sin egen strategi alene. I stein-saks-papir: ⅓ på hvert trekk for begge, forventet verdi 0. Behandles grundig i spillteorien.</p>',
      more: 'kap5/stokastiske-spill.html#delvis-observerbare'
    },
    'regret': {
      term: 'Regret',
      def: '<p>Utilityen hvert trekk ville fått minus utilityen faktisk fått. Stein mot papir: (−1, 0, 1) − (−1) = (0, 1, 2) for (stein, papir, saks).</p>',
      more: 'kap5/stokastiske-spill.html#oppg-regret'
    },
    'regret-minimering': {
      term: 'Regret-minimering',
      alias: 'regret minimization',
      def: '<p>Summerer regret per trekk over alle spill og velger trekk etter dem (negative satt til 0, så normalisert). Gjennomsnittsstrategien konvergerer mot Nash-likevekten.</p>',
      more: 'kap5/stokastiske-spill.html#delvis-observerbare'
    },
    /* ── kap7b ── */
    'semidesiderbar': {
      term: 'Semidecidable (entailment i FOL)',
      alias: 'semidecidable, semi-avgjørbar',
      def: '<p>Entailment i FOL er generelt semidecidable: følger α av KB, finnes et bevis som kan finnes på endelig tid, men er KB ⊭ α, kan søket gå for alltid. Avgjørbart (decidable) for KB med bare definite clauses og ingen funksjoner.</p>',
      more: 'kap7/fol-inferens.html#avgjorbarhet'
    },
    'propositionalisering': {
      term: 'Propositionalisering',
      alias: 'propositionalization',
      def: '<p>Gjør FOL om til PL: (1) erstatt alle variabler med konstanter eller funksjoner, (2) erstatt atomene med proposisjonssymboler. Ulempe: lager blindt mange unødvendige avledninger, f.eks. Student(Arithmetic) ⇒ Knows(Arithmetic, Arithmetic).</p>',
      more: 'kap7/fol-inferens.html#propositionalisering'
    },
    'grunnterm': {
      term: 'Grunnterm',
      alias: 'ground term',
      def: '<p>En term uten variabler: en konstant eller en funksjon av grunntermer, f.eks. Alice eller Mother(Alice).</p>',
      more: 'kap7/fol-inferens.html#instansiering'
    },
    'universell-instansiering': {
      term: 'Universell instansiering (UI)',
      alias: 'universal instantiation',
      def: '<p>Fra ∀v α kan vi utlede Subst({v/g}, α) for enhver grunnterm g, så mange ganger vi vil. Fra ∀x Student(x) ⇒ Knows(x, English) gir {x/Alice} Student(Alice) ⇒ Knows(Alice, English).</p>',
      more: 'kap7/fol-inferens.html#instansiering'
    },
    'eksistensiell-instansiering': {
      term: 'Eksistensiell instansiering (EI)',
      alias: 'existential instantiation',
      def: '<p>Fra ∃v α utledes Subst({v/k}, α), der k er en ny Skolem-konstant som ikke finnes i KB: ∃x Student(x) ∧ Knows(x, Norwegian) gir Student(C<sub>1</sub>) ∧ Knows(C<sub>1</sub>, Norwegian).</p>',
      more: 'kap7/fol-inferens.html#instansiering'
    },
    'skolem-konstant': {
      term: 'Skolem-konstant',
      alias: 'Skolem constant',
      def: '<p>Et nytt konstantnavn (C<sub>1</sub>) for objektet som en ∃-setning sier finnes. Brukes når ∃ ikke står inni noen ∀.</p>',
      more: 'kap7/fol-inferens.html#instansiering'
    },
    'skolem-funksjon': {
      term: 'Skolem-funksjon',
      alias: 'Skolem function',
      def: '<p>Erstatter en ∃-variabel som står inni ∀: ∀x ∃y Loves(x, y) blir ∀x Loves(x, F(x)). Argumentene er de omsluttende ∀-variablene. En konstant ville gitt «alle elsker C<sub>1</sub>», som er noe annet.</p>',
      more: 'kap7/fol-inferens.html#instansiering'
    },
    'skolemisering': {
      term: 'Skolemisering',
      alias: 'skolemization',
      def: '<p>Steg 5 i CNF-konverteringen: alle eksistensielt kvantifiserte variabler erstattes med Skolem-konstanter eller Skolem-funksjoner, slik at bare ∀ er igjen.</p>',
      more: 'kap7/fol-inferens.html#cnf'
    },
    'unifikasjon': {
      term: 'Unifikasjon (Unify)',
      alias: 'unification, Unify',
      def: '<p>Unify(α, β) finner den mest generelle substitusjonen θ slik at Subst(θ, α) = Subst(θ, β), eller failure. Unify(Loves(Bob, y), Loves(x, Mother(x))) = {x/Bob, y/Mother(Bob)}.</p>',
      more: 'kap7/fol-inferens.html#unifikasjon'
    },
    'mgu': {
      term: 'Mest generelle unifikator',
      alias: 'most general unifier, MGU',
      def: '<p>Den substitusjonen som gjør to uttrykk like med færrest mulige bindinger: Unify(Loves(x, y), Loves(Alice, z)) = {x/Alice, y/z}, ikke {x/Alice, y/Bob, z/Bob}.</p>',
      more: 'kap7/fol-inferens.html#unifikasjon'
    },
    'occur-check': {
      term: 'Occur check',
      def: '<p>Del av unifikasjonsalgoritmen: en variabel kan ikke bindes til en term som inneholder den selv. x mot F(x) gir failure.</p>',
      more: 'kap7/fol-inferens.html#unifikasjon'
    },
    'standardisere-variabler': {
      term: 'Standardisere variabler',
      alias: 'standardizing apart, standardize variables',
      def: '<p>Gi hver kvantor (i CNF: hver klausul) egne variabelnavn, så like navn i ulike setninger ikke blandes. Knows(John, x) og Knows(x, Elizabeth) unifiserer først når den ene skrives Knows(x<sub>2</sub>, Elizabeth).</p>',
      more: 'kap7/fol-inferens.html#unifikasjon'
    },
    'generalisert-modus-ponens': {
      term: 'Generalisert Modus Ponens (GMP)',
      alias: 'Generalized Modus Ponens',
      def: '<p>Fra fakta p<sub>1</sub>′, …, p<sub>n</sub>′ og ∀x p<sub>1</sub> ∧ … ∧ p<sub>n</sub> ⇒ q utledes Subst(θ, q), der θ = Unify(p<sub>1</sub>′ ∧ … ∧ p<sub>n</sub>′, p<sub>1</sub> ∧ … ∧ p<sub>n</sub>). Sunn og fullstendig for KB med bare definite clauses.</p>',
      more: 'kap7/fol-inferens.html#gmp'
    },
    'fullstendig-inferens': {
      term: 'Fullstendig inferens',
      alias: 'completeness (inferens), complete',
      def: '<p>En inferensalgoritme er fullstendig hvis den kan utlede alt som følger: KB ⊨ α ⇒ KB ⊢ α. GMP er fullstendig for fakta når KB bare har definite clauses; resolusjon er refutasjonsfullstendig.</p>',
      more: 'kap7/fol-inferens.html#gmp'
    },
    'resolusjon-fol': {
      term: 'Resolusjon i FOL',
      alias: 'first-order resolution',
      def: '<p>Fra a<sub>1</sub> ∨ … ∨ c og ¬c′ ∨ b<sub>1</sub> ∨ … utledes Subst(θ, a<sub>1</sub> ∨ … ∨ b<sub>1</sub> ∨ …), der θ = Unify(c, c′). Brukes i resolusjonsrefutasjon: KB ∧ ¬α på CNF resolveres til den tomme klausulen.</p>',
      more: 'kap7/fol-inferens.html#resolusjon'
    },
    'set-of-support': {
      term: 'Set of support',
      def: '<p>Resolusjonsstrategi: foretrekk klausuler fra et håndplukket sett, typisk den negerte spørringen, for mer målrettede bevis.</p>',
      more: 'kap7/fol-inferens.html#strategier'
    },
    'input-resolusjon': {
      term: 'Input resolution',
      def: '<p>Resolusjonsstrategi: foretrekk klausuler fra den opprinnelige KB-en eller spørringen.</p>',
      more: 'kap7/fol-inferens.html#strategier'
    },
    'subsumpsjon': {
      term: 'Subsumption',
      alias: 'subsumpsjon',
      def: '<p>Hold KB liten ved å ikke utlede klausuler som er mer spesifikke enn en som finnes: med ∀x P(x) i KB trengs ikke P(A) eller P(A) ∨ Q(B).</p>',
      more: 'kap7/fol-inferens.html#strategier'
    },
    'demodulasjon': {
      term: 'Demodulation og paramodulation',
      alias: 'demodulation, paramodulation',
      def: '<p>To ekstra inferensregler for likhet som bytter like med like, f.eks. Birthdate(PaternalGrandfather(Bella), 1926) fra ∀x Father(Father(x)) = PaternalGrandfather(x) og Birthdate(Father(Father(Bella)), 1926).</p>',
      more: 'kap7/fol-inferens.html#strategier'
    },
    'likhetsunifikasjon': {
      term: 'Equational unification',
      alias: 'likhetsunifikasjon',
      def: '<p>Unifikasjon som tar hensyn til kjente likheter, så Add(1, 2) og Add(2, 1) kan unifiseres når ∀x, y Add(x, y) = Add(y, x) er kjent.</p>',
      more: 'kap7/fol-inferens.html#strategier'
    },
    /* ── kap10 ── */
    'nlp': {
      term: 'Naturlig språkbehandling (NLP)',
      def: '<p>Delen av AI som lar datamaskiner forstå, generere og samhandle med menneskelig språk. Vanskelig fordi språk er flertydig, vagt, kontekstavhengig og i endring.</p>',
      more: 'kap10/nlp.html#vanskelig',
      alias: 'NLP, natural language processing'
    },
    'sprakmodell': {
      term: 'Språkmodell',
      def: '<p>En sannsynlighetsfordeling over strenger, f.eks. \\(P(w_{1:N})\\). Brukes til å foreslå neste ord, rette stavefeil og rangere oversettelser. Alltid en tilnærming.</p>',
      more: 'kap10/nlp.html#bag-of-words',
      alias: 'language model'
    },
    'bag-of-words': {
      term: 'Bag-of-words',
      def: '<p>Språkmodell som ser en tekst som en uordnet samling ord. Med naiv Bayes: \\(P(\\text{Class} \\mid w_{1:N}) \\propto P(\\text{Class}) \\prod_j P(w_j \\mid \\text{Class})\\). God til klassifisering, ignorerer rekkefølge.</p>',
      more: 'kap10/nlp.html#bag-of-words'
    },
    'naiv-bayes': {
      term: 'Naiv Bayes',
      def: '<p>Antakelsen at hvert ord (trekk) er uavhengig av de andre gitt klassen. Parametrene estimeres som relative frekvenser i et merket korpus, f.eks. \\(P(\\text{business}) = 300/3000\\).</p>',
      more: 'kap10/nlp.html#bag-of-words',
      alias: 'naive Bayes'
    },
    'n-gram': {
      term: 'n-gram-modell',
      def: '<p>Språkmodell der hvert ord bare avhenger av de \\(n-1\\) forrige: \\(P(w_{1:N}) \\approx \\prod_j P(w_j \\mid w_{j-n+1:j-1})\\). Estimeres fra tellinger.</p>',
      more: 'kap10/nlp.html#ngram',
      alias: 'n-gram'
    },
    'markov-antakelse': {
      term: 'Markov-antakelse',
      def: '<p>Antakelsen at neste element bare avhenger av et fast antall forrige: \\(P(w_j \\mid w_{1:j-1}) \\approx P(w_j \\mid w_{j-n+1:j-1})\\). Gjør kjederegelen praktisk med få parametre.</p>',
      more: 'kap10/nlp.html#ngram',
      alias: 'Markov assumption'
    },
    'unigram': {
      term: 'Unigram',
      def: '<p>n-gram med \\(n = 1\\): \\(P(w_j)\\). Bare ordfrekvenser, uten kontekst, som bag-of-words.</p>',
      more: 'kap10/nlp.html#ngram'
    },
    'bigram': {
      term: 'Bigram',
      def: '<p>n-gram med \\(n = 2\\): \\(P(w_j \\mid w_{j-1}) = c(w_{j-1} w_j)/c(w_{j-1})\\). Hvert ord avhenger av ordet før.</p>',
      more: 'kap10/nlp.html#ngram'
    },
    'trigram': {
      term: 'Trigram',
      def: '<p>n-gram med \\(n = 3\\): \\(P(w_j \\mid w_{j-2}, w_{j-1})\\), f.eks. \\(P(\\text{cat} \\mid \\text{a, black})\\).</p>',
      more: 'kap10/nlp.html#ngram'
    },
    'tegn-n-gram': {
      term: 'Tegnmodell (tegn-n-gram)',
      def: '<p>n-gram over bokstaver: \\(P(c_j \\mid c_{j-n+1:j-1})\\). Håndterer ukjente ord og brukes til språkidentifikasjon.</p>',
      more: 'kap10/nlp.html#ngram',
      alias: 'character-level model'
    },
    'skip-gram': {
      term: 'Skip-gram',
      def: '<p>Par av nære ord som hopper over noen ord imellom, f.eks. 1-skip-bigrammene «je comprends» og «ne pas» fra «je ne comprends pas». Fanger avhengigheter over avstand.</p>',
      more: 'kap10/nlp.html#ngram'
    },
    'glatting': {
      term: 'Glatting',
      def: '<p>Teknikker som flytter litt sannsynlighetsmasse fra sette til usette n-gram, så ett usett n-gram ikke gir \\(P = 0\\) for hele setningen. Laplace, backoff, lineær interpolasjon.</p>',
      more: 'kap10/nlp.html#glatting',
      alias: 'smoothing'
    },
    'unk': {
      term: '&lt;UNK&gt;',
      def: '<p>Token som erstatter sjeldne ord i treningen; ukjente ord i test får \\(P(\\langle\\text{UNK}\\rangle)\\). Typede varianter: &lt;NUM&gt;, &lt;EMAIL&gt;, &lt;URL&gt;.</p>',
      more: 'kap10/nlp.html#glatting',
      alias: 'UNK, ukjent ord'
    },
    'laplace-glatting': {
      term: 'Laplace-glatting',
      def: '<p>Add-one: \\(P(w_i \\mid w_{i-1}) = \\dfrac{c(w_{i-1} w_i) + 1}{c(w_{i-1}) + V}\\), med \\(V\\) = vokabularstørrelsen. Ingen null, men for mye masse til det usette når \\(V\\) er stor.</p>',
      more: 'kap10/nlp.html#glatting',
      alias: 'add-one smoothing, Laplace smoothing'
    },
    'backoff': {
      term: 'Backoff',
      def: '<p>Glatting én orden om gangen: bruk trigrammet hvis tellingen er høy nok, ellers bigrammet, ellers unigrammet.</p>',
      more: 'kap10/nlp.html#glatting'
    },
    'lineaer-interpolasjon': {
      term: 'Lineær interpolasjon',
      def: '<p>Glatting som alltid blander alle ordener: \\(\\hat P = \\lambda_3 P_{\\text{tri}} + \\lambda_2 P_{\\text{bi}} + \\lambda_1 P_{\\text{uni}}\\), med \\(\\sum \\lambda = 1\\).</p>',
      more: 'kap10/nlp.html#glatting',
      alias: 'linear interpolation'
    },
    'wordnet': {
      term: 'WordNet',
      def: '<p>Håndlaget, maskinlesbar leksikalsk database med relasjoner som IS-A (hypernym), PART-OF og antonymer. Gir kategorier, ikke detaljer.</p>',
      more: 'kap10/nlp.html#pos'
    },
    'pos-tagging': {
      term: 'POS-tagging',
      def: '<p>Å gi hvert ord sin ordklasse (part of speech): substantiv, verb, adjektiv … Taggen avhenger av konteksten, så hele sekvensen velges samlet.</p>',
      more: 'kap10/nlp.html#pos',
      alias: 'ordklassetagging, part-of-speech tagging'
    },
    'penn-treebank': {
      term: 'Penn Treebank',
      def: '<p>Korpus med over 3 millioner annoterte ord og et taggsett på 45 tagger (NN, VB, DT, IN, JJ, MD …).</p>',
      more: 'kap10/nlp.html#pos'
    },
    'hmm': {
      term: 'Skjult Markov-modell (HMM)',
      def: '<p>Som tagger: taggene er skjulte tilstander, ordene evidens. \\(P(C_{1:N}, W_{1:N}) = P(C_1)\\prod P(C_t \\mid C_{t-1}) \\prod P(W_t \\mid C_t)\\). Generativ modell.</p>',
      more: 'kap10/nlp.html#hmm',
      alias: 'HMM, hidden Markov model'
    },
    'viterbi': {
      term: 'Viterbi',
      def: '<p>Dynamisk programmering som finner den mest sannsynlige taggsekvensen \\(\\arg\\max P(C_{1:N}, W_{1:N})\\): for hvert ord og hver tagg beholdes bare beste sti dit, med bakoverpekere.</p>',
      more: 'kap10/nlp.html#hmm'
    },
    'logistisk-regresjon-tagger': {
      term: 'Logistisk regresjon-tagger',
      def: '<p>Diskriminativ tagger som lærer \\(P(C \\mid W)\\) direkte, \\(P(\\text{tag} \\mid \\mathbf{x}) = \\sigma(\\mathbf{w} \\cdot \\mathbf{x})\\), med vilkårlige trekk (suffiks, nabo-ord, forrige tagg). Dekodes grådig, med Viterbi eller beam search.</p>',
      more: 'kap10/nlp.html#diskriminativ',
      alias: 'logistisk regresjon'
    },
    'generativ-modell': {
      term: 'Generativ modell',
      def: '<p>Modellerer den felles fordelingen \\(P(W, C)\\) (naiv Bayes, HMM). Kan generere setninger, trener raskt, men har begrensede trekk og generelt høyere feilrate.</p>',
      more: 'kap10/nlp.html#diskriminativ'
    },
    'diskriminativ-modell': {
      term: 'Diskriminativ modell',
      def: '<p>Modellerer bare \\(P(C \\mid W)\\) (logistisk regresjon). Kan ikke generere, men tillater vilkårlige trekk og har generelt lavere feilrate.</p>',
      more: 'kap10/nlp.html#diskriminativ'
    },
    'grammatikk': {
      term: 'Grammatikk',
      def: '<p>Regler som definerer trestrukturen til lovlige fraser. Språket er mengden setninger som følger reglene.</p>',
      more: 'kap10/nlp.html#grammatikk'
    },
    'pcfg': {
      term: 'PCFG',
      def: '<p>Probabilistisk kontekstfri grammatikk: hver regel har en sannsynlighet (alternativene for samme venstreside summerer til 1), og hver regel virker i enhver kontekst.</p>',
      more: 'kap10/nlp.html#grammatikk',
      alias: 'probabilistisk kontekstfri grammatikk'
    },
    'e0': {
      term: 'E<sub>0</sub>',
      def: '<p>En liten engelsklignende PCFG for agenter i wumpus-verdenen, med kategoriene S, NP, VP, Adjs, PP og RelClause.</p>',
      more: 'kap10/nlp.html#grammatikk',
      alias: 'E0'
    },
    'overgenerering': {
      term: 'Overgenerering',
      def: '<p>Grammatikken genererer setninger som ikke er grammatiske, f.eks. «Me go I».</p>',
      more: 'kap10/nlp.html#grammatikk'
    },
    'undergenerering': {
      term: 'Undergenerering',
      def: '<p>Grammatikken avviser setninger som er gyldig språk, f.eks. «I think the wumpus is smelly».</p>',
      more: 'kap10/nlp.html#grammatikk'
    },
    'parsing': {
      term: 'Parsing',
      def: '<p>Søk etter et parsetre der bladene er ordene i setningen. Top-down fra S mot ordene, bottom-up fra ordene mot S.</p>',
      more: 'kap10/nlp.html#parsing'
    },
    'chart-parsing': {
      term: 'Chart parsing',
      def: '<p>Parsing som lagrer hver analysert frase i et chart og gjenbruker den i alle grener (mulig fordi grammatikken er kontekstfri), så arbeid ikke gjentas.</p>',
      more: 'kap10/nlp.html#parsing'
    },
    'cyk': {
      term: 'CYK',
      def: '<p>Bottom-up probabilistisk chart-parser: \\(P[X,i,k] = \\max P[Y,i,j] \\cdot P[Z,j+1,k] \\cdot p\\). Krever Chomsky normalform. Tid \\(O(n^3 m)\\), plass \\(O(n^2 m)\\).</p>',
      more: 'kap10/nlp.html#parsing'
    },
    'chomsky-normalform': {
      term: 'Chomsky normalform',
      def: '<p>Grammatikk med bare regler \\(X \\to \\text{word}\\) og \\(X \\to Y\\,Z\\). Enhver kontekstfri grammatikk kan konverteres automatisk.</p>',
      more: 'kap10/nlp.html#parsing',
      alias: 'CNF (grammatikk)'
    },
    'parsetre': {
      term: 'Parsetre',
      def: '<p>Tre som viser setningens frasestruktur. I en PCFG er sannsynligheten produktet av regelsannsynlighetene i alle nodene, f.eks. 0.0000675 for «every wumpus smells».</p>',
      more: 'kap10/nlp.html#parsing',
      alias: 'parse tree'
    },
    'shift-reduce': {
      term: 'Shift-reduce',
      def: '<p>Parser som tilsvarer beam search med \\(b = 1\\): skyv neste ord på en stakk, eller reduser toppen av stakken med en regel.</p>',
      more: 'kap10/nlp.html#parsing'
    },
    'talegjenkjenning': {
      term: 'Talegjenkjenning',
      def: '<p>Lyd → tekst. Ordfeilrate rundt 3–5 %, på nivå med menneskelige transkribenter.</p>',
      more: 'kap10/nlp.html#oppgaver-nlp',
      alias: 'speech recognition'
    },
    'maskinoversettelse': {
      term: 'Maskinoversettelse',
      def: '<p>Tekst fra ett språk til et annet, trent på parallelle tekster uten annotering. Utvikling: n-gram, seq2seq, transformere.</p>',
      more: 'kap10/nlp.html#oppgaver-nlp',
      alias: 'machine translation'
    },
    'informasjonsekstraksjon': {
      term: 'Informasjonsekstraksjon',
      def: '<p>Finne objekter og relasjoner i tekst og gjøre dem om til strukturerte fakta, f.eks. adresse → (street, city, state, zip).</p>',
      more: 'kap10/nlp.html#oppgaver-nlp',
      alias: 'information extraction'
    },
    'informasjonsgjenfinning': {
      term: 'Informasjonsgjenfinning',
      def: '<p>Finne dokumentene som er relevante og viktige for en spørring, rangert. Kjernen i søkemotorer.</p>',
      more: 'kap10/nlp.html#oppgaver-nlp',
      alias: 'information retrieval'
    },
    'sporsmalsbesvarelse': {
      term: 'Spørsmålsbesvarelse',
      def: '<p>Gir et svar på et spørsmål, ikke en liste med dokumenter, f.eks. ved å søke etter mønstre som «[* founded the U.S. Coast Guard]».</p>',
      more: 'kap10/nlp.html#oppgaver-nlp',
      alias: 'question answering, QA'
    },
  };
})();
