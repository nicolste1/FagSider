# Kompendium for TDT4160: Datamaskiner

## Innledning

Dette kompendiet er laget for å gi en grundig gjennomgang av pensum i emnet TDT4160 – Datamaskiner, og er utformet for å hjelpe studenter med å oppnå en dyp forståelse av emnets kjernebegreper og teknikker. Emnet dekker en rekke temaer som til sammen bygger opp forståelsen av hvordan datamaskiner er konstruert og fungerer, fra den grunnleggende logikken til avansert prosessorarkitektur og minnehåndtering.

Materialet er delt inn i kapitler som går gjennom hvert tema i detalj:
- **Kapittel 1** starter med en introduksjon til datamaskinarkitektur, inkludert viktige begreper rundt ytelse og ulike datamaskintyper.
- **Kapittel 2** tar for seg instruksjonssettarkitektur med et spesielt fokus på RISC-V, inkludert hvordan instruksjoner lagres og behandles.
- **Kapittel 3** omhandler aritmetikk og logikk i datamaskiner, med forklaringer på tallrepresentasjon, to-komplement, og bygging av aritmetisk-logiske enheter (ALU).
- **Kapittel 4** går i dybden på prosessorarkitektur, inkludert enkeltsykliske og flersykliske prosessorer, og introduserer pipelining som en teknikk for å øke ytelsen.
- **Kapittel 5** fokuserer på minnehierarki og cache, der konsepter som lokalitet og cache-organisering blir gjennomgått.
- **Kapittel 6** dekker parallelle systemer og hvordan pipelining brukes til å oppnå høyere ytelse, samt teknikker for å håndtere farer i pipelinede prosessorer.
- **Appendix A** gir en grunnleggende innføring i digital logikk og aritmetikk, som utgjør fundamentet for all databehandling i maskinvaren.

Hvert kapittel inneholder nøye utvalgte eksempler og oppgaver for å hjelpe deg med å forstå praktisk anvendelse av teorien. Kompendiet er skrevet for å være tilgjengelig og enkelt å følge, og vil forhåpentligvis fungere som en solid ressurs gjennom både studietiden og videre studier i informatikk og ingeniørfag.

Dette kompendiet er ment å støtte opp om forelesningene, pensumboken og oppgavene i TDT4160, og kan brukes som en selvstendig ressurs eller i kombinasjon med disse materialene. Jeg håper at denne strukturerte gjennomgangen vil gi et godt utgangspunkt for å forstå og mestre emnene i Datamaskiner.

--- 

## Innholdsfortegnelse


<details>
  <summary>Kapittel 1: Introduksjon til Datamaskinarkitektur og Ytelse</summary>

  - [Hva er Datamaskinarkitektur?](#hva-er-datamaskinarkitektur)
    - [Nøkkelkomponenter i Datamaskinarkitektur](#nøkkelkomponenter-i-datamaskinarkitektur)
  - [De Syv Store Ideene i Datamaskinarkitektur](#de-syv-store-ideene-i-datamaskinarkitektur)
  - [Datamaskintyper og Bruksområder](#datamaskintyper-og-bruksområder)
    - [Eksempel: Supercomputer vs. Innebygd System](#eksempel-supercomputer-vs-innebygd-system)
  - [Ytelse: Metrikker og Faktorer](#ytelse-metrikker-og-faktorer)
    - [The Iron Law of Performance](#the-iron-law-of-performance)
    - [Eksempel: Bruk av Iron Law](#eksempel-bruk-av-iron-law)
  - [Introduksjon til Parallelle Systemer](#introduksjon-til-parallelle-systemer)
    - [Amdahl’s Lov](#amdahls-lov)
  - [Eksempler og Oppgaver](#eksempler-og-oppgaver)

</details>

<details>
  <summary>Kapittel 2: Instruksjoner og RISC-V Instruksjonssett</summary>

  - [Hva er et Instruksjonssett?](#hva-er-et-instruksjonssett)
    - [Høynivåprogrammering til Maskinkode](#høynivåprogrammering-til-maskinkode)
    - [Eksempel: Instruksjoner på Høynivå og Lavnivå](#eksempel-instruksjoner-på-høynivå-og-lavnivå)
  - [Designprinsipper for Instruksjonssett](#designprinsipper-for-instruksjonssett)
  - [RISC-V Instruksjonsformat](#risc-v-instruksjonsformat)
    - [De Fire Instruksjonsformatene](#de-fire-instruksjonsformatene)
    - [Eksempel på R-type Instruksjon](#eksempel-på-r-type-instruksjon)
  - [Operasjoner og Operander i Maskinvare](#operasjoner-og-operander-i-maskinvare)
  - [Minnetilgang og Adressering](#minnetilgang-og-adressering)
  - [Eksempler og Oppgaver](#eksempler-og-oppgaver-1)

</details>

<details>
  <summary>Kapittel 3: Aritmetikk og Logikk i Datamaskiner</summary>

  - [Introduksjon til Aritmetikk i Datamaskiner](#introduksjon-til-aritmetikk-i-datamaskiner)
  - [Binære Tall og Tallsystemer](#binære-tall-og-tallsystemer)
  - [To-komplement og Negative Tall](#to-komplement-og-negative-tall)
  - [Aritmetisk-logiske enheter (ALU-er)](#aritmetisk-logiske-enheter-alu-er)
  - [Flyttallsrepresentasjon og IEEE 754 Standard](#flyttallsrepresentasjon-og-ieee-754-standard)
  - [Parallelisme og SIMD](#parallelisme-og-simd)
  - [Eksempler og Oppgaver](#eksempler-og-oppgaver-2)

</details>

<details>
  <summary>Kapittel 4: Prosessorarkitektur og Mikroarkitektur</summary>

  - [Introduksjon til Prosessorarkitektur](#introduksjon-til-prosessorarkitektur)
  - [Enkeltsyklisk Prosessor](#enkeltsyklisk-prosessor)
  - [Flersyklisk Prosessor](#flersyklisk-prosessor)
  - [Pipelining](#pipelining)
  - [Risikoer og Konflikter i Pipelining](#risikoer-og-konflikter-i-pipelining)
  - [Eksempler og Oppgaver](#eksempler-og-oppgaver-3)

</details>

<details>
  <summary>Kapittel 5: Minnehierarki og Hurtigbuffer</summary>

  - [Innledning til Minnehierarki](#innledning-til-minnehierarki)
  - [Lokalitet og Minnebruk](#lokalitet-og-minnebruk)
  - [Hurtigbuffer (Cache)](#hurtigbuffer-cache)
  - [Hurtigbuffer-strategier](#hurtigbuffer-strategier)
  - [Hurtigbuffer-organisering](#hurtigbuffer-organisering)
  - [Ytelsesberegning for Hurtigbuffer](#ytelsesberegning-for-hurtigbuffer)
  - [Eksempler og Oppgaver](#eksempler-og-oppgaver-4)

</details>

<details>
  <summary>Kapittel 6: Parallelle Systemer og Samlebåndsprosessorer</summary>

  - [Introduksjon til Parallelle Systemer](#introduksjon-til-parallelle-systemer-1)
  - [Samlebåndsprosessorer](#samlebåndsprosessorer)
  - [Avhengigheter og Farer i Pipelining](#avhengigheter-og-farer-i-pipelining)
  - [Teknikker for å Håndtere Farer](#teknikker-for-å-håndtere-farer)
  - [Ytelse i Samlebåndsprosessorer](#ytelse-i-samlebåndsprosessorer)
  - [Eksempler og Oppgaver](#eksempler-og-oppgaver-5)

</details>

<details>
  <summary>Appendix A: Grunnleggende Digital Logikk og Aritmetikk</summary>

  - [Introduksjon til Digital Logikk](#introduksjon-til-digital-logikk)
  - [Logiske Porter](#logiske-porter)
  - [Kombinatorisk Logikk](#kombinatorisk-logikk)
  - [Sekvensiell Logikk](#sekvensiell-logikk)
  - [Aritmetiske Operasjoner og Aritmetisk-logiske Enheter (ALU-er)](#aritmetiske-operasjoner-og-aritmetisk-logiske-enheter-alu-er)
  - [Eksempler og Oppgaver](#eksempler-og-oppgaver-6)

</details>


---
# Kapittel 1: Introduksjon til Datamaskinarkitektur og Ytelse
## Hva er Datamaskinarkitektur?

Datamaskinarkitektur er feltet som handler om hvordan datamaskiner er bygget og organisert for å utføre programmer effektivt. Når vi snakker om datamaskinarkitektur, tenker vi ofte på hvordan maskinvare og programvare samhandler for å kjøre applikasjoner.

### Nøkkelkomponenter i Datamaskinarkitektur

En typisk datamaskin består av fem hovedkomponenter:

1. **CPU (Central Processing Unit):** Prosessoren som utfører instruksjoner.
2. **Minne:** Lagringsplass for data og instruksjoner, inkludert RAM.
3. **I/O (Input/Output):** Enheter som muliggjør kommunikasjon mellom datamaskinen og omverdenen, som tastatur, skjerm og nettverkskort.
4. **Buss:** En samling ledninger som transporterer data mellom komponenter.
5. **Kontrollenhet:** Koordinerer operasjoner og sørger for riktig flyt av data i systemet.

Disse komponentene samarbeider for å utføre kommandoer gitt av et program, typisk i en syklus som består av å hente, dekode og utføre instruksjoner.

---

## De Syv Store Ideene i Datamaskinarkitektur

I datamaskinarkitektur finnes det syv grunnleggende ideer som har formet feltet. La oss gå gjennom dem:

1. **Abstraksjon:** Lagdeling av kompleksiteten i systemet, fra maskinvare til høynivåprogrammering. Dette gjør det mulig for oss å arbeide på et spesifikt nivå uten å forstå alle detaljene på nivåene under.

2. **Den lagrede programmetoden:** Programmer og data lagres i samme minne, slik at datamaskiner kan endre programmer under kjøring.

3. **Vanlig tilfelle raskt:** Systemene er optimalisert for operasjoner som skjer ofte, heller enn sjeldne tilfeller. Dette kan øke total ytelse betraktelig.

4. **Parallelisme:** Flere prosesser eller tråder kjøres samtidig, enten ved hjelp av flere kjerner eller instruksjonsparallellitet i en enkelt prosessor.

5. **Pipelining:** En teknikk som tillater overlappende utførelse av instruksjoner. For eksempel kan henting av neste instruksjon starte mens den forrige instruksjonen blir dekodet.

6. **Redundans:** Legge til ekstra ressurser eller feilsikring for å sikre pålitelighet og motstandsdyktighet mot feil.

7. **Hukommelseshierarki:** Bruk av en kombinasjon av raskt, dyrt minne og langsommere, rimeligere minne for å gi inntrykk av ett stort og raskt minne.

---

## Datamaskintyper og Bruksområder

Datamaskiner kommer i ulike former, tilpasset forskjellige bruksområder. De vanligste typene inkluderer:

1. **Personlige datamaskiner (PC-er):** Disse er designet for individuell bruk og balanserer ytelse og kostnad.
2. **Servere:** Kraftigere maskiner som håndterer mange brukerforespørsler samtidig, ofte brukt til nettsider eller apper.
3. **Supercomputere:** Ekstremt kraftige maskiner designet for intensive beregninger som værvarsling og vitenskapelig forskning.
4. **Innebygde systemer:** Datamaskiner innebygd i andre enheter, som biler og smarte apparater.

Disse ulike typene har forskjellige arkitektoniske behov basert på ytelse, pålitelighet og strømforbruk.

### Eksempel: Supercomputer vs. Innebygd System
En supercomputer kan ha tusenvis av prosessorer som jobber parallelt for å utføre beregninger raskt, mens et innebygd system, som en mikrokontroller i en vaskemaskin, bare trenger én prosessor for å utføre enkle oppgaver.

---

## Ytelse: Metrikker og Faktorer

Ytelsen til en datamaskin kan måles på flere måter, avhengig av konteksten. To av de viktigste ytelsesmetrikkene er:

- **Kjøretid (Execution Time):** Tiden det tar å kjøre en gitt oppgave.
- **Båndbredde (Bandwidth):** Mengden data som kan overføres per tidsenhet, ofte målt i GB/s.

### The Iron Law of Performance

"The Iron Law" beskriver hvordan kjøretiden til en datamaskin påvirkes av tre faktorer:

$$
\text{Kjøretid} = \text{Antall Instruksjoner} \times \text{Klokkesykler per Instruksjon} \times \text{Tiden per Klokkesyklus}
$$

- **Antall Instruksjoner:** Hvordan programmet er skrevet.
- **Klokkesykler per Instruksjon (CPI):** Hvor effektivt maskinen utfører instruksjoner.
- **Tiden per Klokkesyklus:** Avhenger av maskinvareens klokkefrekvens.

Ved å forbedre en eller flere av disse faktorene kan vi oppnå kortere kjøretid og dermed bedre ytelse.

### Eksempel: Bruk av Iron Law

Anta at et program trenger 10 millioner instruksjoner, prosessoren bruker i gjennomsnitt 2 klokkesykluser per instruksjon, og tiden per klokkesyklus er 0,5 nanosekunder (ns). Kjøretiden blir da:

$$
\text{Kjøretid} = 10,000,000 \times 2 \times 0.5\, \text{ns} = 10,000,000\, \text{ns} = 10\, \text{ms}
$$

---

## Introduksjon til Parallelle Systemer

I dag har de fleste datamaskiner flere prosessorkjerner, som lar dem utføre oppgaver parallelt. Dette kan gi betydelig ytelsesøkning i programmer som kan dra nytte av flere kjerner.

### Amdahl’s Lov

Amdahl's Lov gir en beregning for hvordan mye ytelsen kan forbedres i et parallelt system. Loven sier at den maksimale ytelsesøkningen er begrenset av andelen av programmet som kan kjøres parallelt.

\[
\text{Speedup} = \frac{1}{(1 - P) + \frac{P}{N}}
\]

- **P:** Andelen av programmet som kan kjøres parallelt.
- **N:** Antall prosessorkjerner.

---

## Eksempler og Oppgaver

### Eksempel 1: Kjøretid og The Iron Law
Et program tar 3 sekunder å kjøre på en maskin. Hvis vi kan redusere klokkesykler per instruksjon fra 2 til 1, hvor lang blir kjøretiden?

**Løsning:** Hvis vi halverer klokkesyklusene per instruksjon, halveres også kjøretiden til 1,5 sekunder.

---

**Eksempel 2: Amdahl's Lov**  
Anta at 70% av et program kan kjøres parallelt. Hvor mye raskere blir programmet hvis vi bruker 4 kjerner?

**Løsning:**  
Bruk formelen:
\[
\text{Speedup} = \frac{1}{(1 - 0.7) + \frac{0.7}{4}} = \frac{1}{0.3 + 0.175} = \frac{1}{0.475} \approx 2.1
\]

Med 4 kjerner blir programmet omtrent 2,1 ganger raskere.

--- 
Her er et forslag til Kapittel 2 skrevet i Markdown. Kapitlet dekker temaer fra instruksjonssett og RISC-V-arkitektur i henhold til læringsmålene.

---

# Kapittel 2: Instruksjoner og RISC-V Instruksjonssett

## Innholdsfortegnelse

1. [Hva er et Instruksjonssett?](#hva-er-et-instruksjonssett)
2. [Designprinsipper for Instruksjonssett](#designprinsipper-for-instruksjonssett)
3. [RISC-V Instruksjonsformat](#risc-v-instruksjonsformat)
4. [Operasjoner og Operander i Maskinvare](#operasjoner-og-operander-i-maskinvare)
5. [Minnetilgang og Adressering](#minnetilgang-og-adressering)
6. [Eksempler og Oppgaver](#eksempler-og-oppgaver)

---

## Hva er et Instruksjonssett?

Et instruksjonssett er en samling av kommandoer som en prosessor kan utføre direkte. Det fungerer som et grensesnitt mellom maskinvare og programvare, der hvert instruksjonssett definerer en spesifikk arkitektur. En instruksjon beskriver en enkel operasjon, som "legg til to tall" eller "hent en verdi fra minnet."

Et instruksjonssett er essensielt for hvordan programmer oversettes til kode som prosessoren kan forstå og utføre.

### Høynivåprogrammering til Maskinkode

Når du skriver et program i et høynivåspråk som Python eller C, må dette programmet til slutt oversettes til maskinkode som CPU-en kan tolke. Denne oversettelsen skjer gjennom flere steg:
- **Kompilering:** Oversettelse fra høynivåspråk til assembly.
- **Assemblering:** Konvertering fra assembly til maskinkode.
- **Lagring i Minne:** Maskinkoden lagres i minnet for å bli utført av CPU-en.

### Eksempel: Instruksjoner på Høynivå og Lavnivå
En enkel setning i Python, som `x = x + y`, blir til en instruksjonssekvens som kan være langt mer kompleks på lavnivå. En typisk RISC-V-instruksjonssekvens kan være:

```assembly
lw x5, 0(x1)      # Laster x til register x5
lw x6, 0(x2)      # Laster y til register x6
add x5, x5, x6    # Legger x og y sammen
sw x5, 0(x1)      # Lagrer resultatet tilbake til minne
```

---

## Designprinsipper for Instruksjonssett

Det finnes flere designprinsipper som guider utviklingen av instruksjonssett. Tre viktige prinsipper inkluderer:

1. **Enkelhet i maskinvare:** Designet bør være enkelt nok til å implementere effektivt i maskinvare. Dette kan for eksempel bety faste instruksjonslengder, noe som reduserer kompleksiteten i instruksjonshåndtering.

2. **Effektivitet:** De mest brukte operasjonene bør være raskest og enklest å utføre. Dette inkluderer forenklede adresseringsmåter for de vanligste instruksjonene.

3. **Mindre men kraftigere instruksjoner:** Et mindre, optimalisert instruksjonssett kan føre til bedre ytelse enn et omfattende instruksjonssett, som kan bli tregt og vanskelig å optimalisere.

I RISC-V følger man disse prinsippene tett. RISC-V-instruksjoner er derfor av faste lengder og består hovedsakelig av enkle operasjoner som kan utføres raskt.

---

## RISC-V Instruksjonsformat

RISC-V, som er arkitekturen vi fokuserer på i TDT4160, er en RISC-arkitektur (Reduced Instruction Set Computer). Dette betyr at instruksjonssettet er designet med enkelhet og effektivitet i fokus.

### De Fire Instruksjonsformatene

RISC-V-instruksjoner følger bestemte formater som definerer hvordan operander og operasjoner spesifiseres. De viktigste formatene er:

1. **R-type (Register-type):** Brukes for aritmetiske og logiske operasjoner mellom registre.
2. **I-type (Immediate-type):** Brukes når én operand er en konstant verdi (immediate).
3. **S-type (Store-type):** Brukes for lagring av data til minnet.
4. **B-type (Branch-type):** Brukes for betingede hopp, der instruksjonen hopper til en annen adresse basert på en betingelse.

### Eksempel på R-type Instruksjon

```assembly
add x1, x2, x3   # Legger innholdet av x2 og x3 og lagrer resultatet i x1
```

I denne instruksjonen betyr:
- `add` at vi skal addere to registre.
- `x1`, `x2`, og `x3` er registerne som inneholder verdiene.

---

## Operasjoner og Operander i Maskinvare

RISC-V tilbyr et sett med grunnleggende operasjoner som kan utføres direkte av CPU-en. La oss se på noen eksempler på vanlige operasjoner.

### Aritmetiske og Logiske Operasjoner

1. **Addisjon og Subtraksjon:** `add` og `sub` legger sammen eller trekker fra verdier i registre.
   ```assembly
   add x1, x2, x3  # x1 = x2 + x3
   sub x1, x2, x3  # x1 = x2 - x3
   ```

2. **Bitvise operasjoner:** `and`, `or`, og `xor` brukes til å utføre logiske operasjoner på bitnivå.
   ```assembly
   and x1, x2, x3  # x1 = x2 AND x3
   or x1, x2, x3   # x1 = x2 OR x3
   ```

### Kontrollflyt

For å håndtere betingelser og løkker, bruker vi hopp-instruksjoner som avhenger av verdier i registre.

```assembly
beq x1, x2, label  # Hopper til label hvis x1 er lik x2
bne x1, x2, label  # Hopper til label hvis x1 ikke er lik x2
```

---

## Minnetilgang og Adressering

RISC-V bruker load/store-arkitektur, som betyr at all datamanipulering skjer i registre. Verdier fra minnet må først lastes inn i registre før de kan brukes i beregninger.

### Lagring og Henting fra Minne

1. **Hente fra Minne (Load):** `lw` (load word) brukes for å hente data fra minnet til et register.
   ```assembly
   lw x1, 0(x2)  # Laster verdien fra minnet ved adressen i x2 inn i x1
   ```

2. **Lagre til Minne (Store):** `sw` (store word) brukes for å lagre data fra et register til minnet.
   ```assembly
   sw x1, 0(x2)  # Lagrer verdien i x1 til minnet på adressen i x2
   ```

### Adresseringsmåter i RISC-V

1. **Register-indirekte adressering:** Adressen til dataen er lagret i et register.
2. **Immediate:** En konstant verdi legges direkte inn som en del av instruksjonen.

---

## Eksempler og Oppgaver

### Eksempel 1: Bruk av R-type Instruksjoner

Gitt følgende instruksjoner:
```assembly
add x5, x1, x2
sub x6, x3, x4
```
**Beskrivelse:** Instruksjonen `add` legger sammen verdiene i `x1` og `x2`, og lagrer resultatet i `x5`. `sub` trekker verdien i `x4` fra `x3`, og resultatet legges i `x6`.

---

### Eksempel 2: Minnetilgang med I-type Instruksjoner

Anta at vi har en variabel `y` lagret i minneadressen `x10`. Vi ønsker å hente denne inn i et register og deretter legge til en konstant verdi (for eksempel 4).

```assembly
lw x5, 0(x10)     # Laster verdien fra minneadressen i x10 inn i x5
addi x5, x5, 4    # Legger til 4 til verdien i x5
```

**Forklaring:** Instruksjonen `lw` laster `y` inn i `x5`, og deretter legger `addi` til verdien 4 til `y`.

---
# Kapittel 3: Aritmetikk og Logikk i Datamaskiner

## Innholdsfortegnelse

1. [Introduksjon til Aritmetikk i Datamaskiner](#introduksjon-til-aritmetikk-i-datamaskiner)
2. [Binære Tall og Tallsystemer](#binære-tall-og-tallsystemer)
3. [To-komplement og Negative Tall](#to-komplement-og-negative-tall)
4. [Aritmetisk-logiske enheter (ALU-er)](#aritmetisk-logiske-enheter-alu-er)
5. [Flyttallsrepresentasjon og IEEE 754 Standard](#flyttallsrepresentasjon-og-ieee-754-standard)
6. [Parallelisme og SIMD](#parallelisme-og-simd)
7. [Eksempler og Oppgaver](#eksempler-og-oppgaver)

---

## Introduksjon til Aritmetikk i Datamaskiner

Datamaskiner er bygd for å utføre operasjoner med tall. De aritmetiske operasjonene i datamaskiner kan deles inn i følgende hovedkategorier:

1. **Heltallsaritmetikk**: Operasjoner med heltall som addisjon, subtraksjon, multiplikasjon og divisjon.
2. **Flyttallsaritmetikk**: Operasjoner som inkluderer desimalverdier, ofte brukt for presise beregninger.

### Grunnleggende Operasjoner

For å forstå hvordan datamaskiner utfører beregninger, må vi først se på de grunnleggende operasjonene i binær form. Dette inkluderer:
- **Addisjon** og **Subtraksjon**: Grunnleggende aritmetiske operasjoner.
- **Multiplikasjon** og **Divisjon**: Ofte implementert gjennom spesialiserte kretsløp i maskinvaren for å håndtere multiplikasjon raskt.
- **Logiske operasjoner**: AND, OR, XOR, NOT, som utfører bitvise operasjoner på binære verdier.

---

## Binære Tall og Tallsystemer

### Binærrepresentasjon

Datamaskiner bruker binærtall (bestående av 0 og 1) for å representere verdier, siden dette passer best med elektroniske systemer som opererer med to tilstander (på og av). Hvert binærtall er en potens av 2, akkurat som desimaltall er potenser av 10.

$$
1011_2 = 1 \cdot 2^3 + 0 \cdot 2^2 + 1 \cdot 2^1 + 1 \cdot 2^0 = 8 + 0 + 2 + 1 = 11_{10}
$$


### Konvertering mellom Desimaltall og Binærtall

Konvertering av desimaltall til binærtall kan gjøres ved å dele tallet på 2 gjentatte ganger og ta vare på resten:
- Eksempel: Konverter 13 til binært.
    - 13 / 2 = 6, rest 1
    - 6 / 2 = 3, rest 0
    - 3 / 2 = 1, rest 1
    - 1 / 2 = 0, rest 1

Resultatet, lest fra bunnen og opp, er \(1101_2\).

---

## To-komplement og Negative Tall

I digitale systemer brukes **to-komplement** til å representere både positive og negative tall i binær form. Dette gjør det mulig for datamaskinen å utføre subtraksjon ved hjelp av addisjon, noe som forenkler implementasjonen i maskinvaren.

### Slik fungerer To-komplement

1. **Positive tall** representeres på vanlig måte.
2. **Negative tall** finnes ved å invertere alle bitene i det positive tallet og deretter legge til 1.

Eksempel: Representasjon av -3 i 4-bit to-komplement.

1. Representasjon av +3: \( 0011 \)
2. Inverter bitene: \( 1100 \)
3. Legg til 1: \( 1100 + 1 = 1101 \)

Resultatet er \( 1101 \), som representerer -3 i to-komplement.


---

## Aritmetisk-logiske enheter (ALU-er)

En **ALU (Arithmetic Logic Unit)** er en viktig komponent i CPU-en som utfører aritmetiske og logiske operasjoner.

### Oppgaver ALU-en Utfører

- **Aritmetiske operasjoner**: Addisjon, subtraksjon, muligens multiplikasjon og divisjon.
- **Logiske operasjoner**: Bitvise operasjoner som AND, OR, NOT, XOR.
- **Skiftoperasjoner**: Flytte biter til høyre eller venstre, ofte brukt for hurtig multiplikasjon eller divisjon med 2.

### Struktur av en ALU

ALU-en tar input fra to registre og en kontrollenhet som bestemmer hvilken operasjon som skal utføres. Etter å ha utført operasjonen, sender ALU-en resultatet til et output-register eller til minnet.

#### Eksempel på en 4-bit ALU-operasjon
```plaintext
0101 + 0011 = 1000
```
Dette eksempelet viser addisjon i en ALU hvor `0101` og `0011` legges sammen til `1000`.

---

## Flyttallsrepresentasjon og IEEE 754 Standard

Heltallsrepresentasjon fungerer for mange oppgaver, men gir begrenset presisjon når vi trenger å jobbe med små eller store desimaler. Derfor bruker vi flyttallsrepresentasjon.

### IEEE 754-standard

IEEE 754 er standarden som brukes for å representere flyttall i datamaskiner, og strukturen består av tre hoveddeler:

1. **Tegnbit**: Indikerer om tallet er positivt (0) eller negativt (1).
2. **Eksponent**: Angir hvor mange plasser det binære punktet er forskjøvet.
3. **Mantisse**: Holder verdien av tallet med høy presisjon.

For eksempel kan tallet `-6.75` representeres i IEEE 754 som:
```plaintext
Tegnbit: 1   Eksponent: 10000001   Mantisse: 10110000000000000000000
```

### Flyttallsaritmetikk

Aritmetiske operasjoner med flyttall krever ofte justering av eksponentene for å sikre at tallet er på samme skala før operasjonen utføres. Dette gjør operasjoner med flyttall mer komplekse og tidkrevende enn operasjoner med heltall.

---

## Parallelisme og SIMD

For å oppnå høy ytelse benytter moderne datamaskiner parallelisme, der flere beregninger utføres samtidig.

### SIMD (Single Instruction, Multiple Data)

SIMD er en form for parallelisme der én instruksjon utføres samtidig på flere dataelementer. Dette brukes ofte i databehandling for vitenskapelige og grafiske formål der store mengder data skal behandles på samme måte.

#### Eksempel på SIMD-bruk
Anta at vi har en liste med tall `[2, 4, 6, 8]`, og vi ønsker å legge til 1 til hvert tall. Med SIMD kan vi utføre denne operasjonen samtidig for hele listen, noe som sparer tid sammenlignet med sekvensiell prosessering.

---

## Eksempler og Oppgaver

### Eksempel 1: To-komplement Addisjon og Subtraksjon

**Problem:** Beregn `5 - 3` ved bruk av to-komplement.

1. Representer 5 i binær form: `0101`
2. Representer -3 ved å finne to-komplement:
   - +3 i binær: `0011`
   - Inverter bitene: `1100`
   - Legg til 1: `1101` (representasjon av -3)

**Addisjon:** 
```plaintext
  0101
+ 1101
------
  0010  # Resultat: 2 i desimal
```

### Eksempel 2: IEEE 754 Flyttallsrepresentasjon

**Problem:** Hvordan representeres `-7.5` i IEEE 754?

1. **Tegnbit:** 1 (negativt tall)
2. **Eksponent:** 130 (i bias 127-format, dvs. 127 + 3 = 130)
3. **Mantisse:** Konverter `111.1` til `1.111 * 2^2`, så mantissen blir `11100000000000000000000`

**Resultat:** `1 10000010 11100000000000000000000`

---
Her er en detaljert versjon av Kapittel 4 i Markdown, som dekker temaer rundt prosessorarkitektur, enkeltsykliske og flersykliske prosessorer, samt pipelining.

---

# Kapittel 4: Prosessorarkitektur og Mikroarkitektur

## Innholdsfortegnelse

1. [Introduksjon til Prosessorarkitektur](#introduksjon-til-prosessorarkitektur)
2. [Enkeltsyklisk Prosessor](#enkeltsyklisk-prosessor)
3. [Flersyklisk Prosessor](#flersyklisk-prosessor)
4. [Pipelining](#pipelining)
5. [Risikoer og Konflikter i Pipelining](#risikoer-og-konflikter-i-pipelining)
6. [Eksempler og Oppgaver](#eksempler-og-oppgaver)

---

## Introduksjon til Prosessorarkitektur

**Prosessorarkitektur** handler om hvordan en datamaskins prosessor er organisert for å utføre instruksjoner effektivt. Prosessorens **mikroarkitektur** refererer til de interne komponentene som samarbeider for å hente, dekode, og utføre instruksjoner.

### Nøkkelkomponenter i en Prosessor

1. **Datapath**: Veien dataene følger gjennom prosessoren, inkludert registre og ALU.
2. **Kontrollenhet**: Styrer hvordan instruksjoner hentes, dekodes, og utføres.
3. **Instruksjonsminne**: Lagret programkode som hentes og dekodes.
4. **Registerfil**: Et sett med registre som lagrer data midlertidig for hurtig tilgang.

---

## Enkeltsyklisk Prosessor

En **enkeltsyklisk prosessor** er designet for å fullføre hver instruksjon i én enkelt klokkesyklus. Dette betyr at alle operasjoner – som henting, dekoding, utføring, og lagring av resultat – utføres samtidig innenfor én syklus. 

### Fordeler og Ulemper

- **Fordeler**: Enkel å forstå og implementere; alle instruksjoner fullføres raskt.
- **Ulemper**: Fordi alle operasjoner må utføres i én syklus, kan det føre til at enkelte operasjoner tar lengre tid enn nødvendig, noe som kan begrense hastigheten.

### Datapath for Enkeltsyklisk Prosessor

Datapathen i en enkeltsyklisk prosessor inkluderer komponenter som:
1. **Programteller (PC)**: Angir adressen til neste instruksjon.
2. **Instruksjonsminne**: Lagrer instruksjonene som prosessoren utfører.
3. **ALU**: Utfører aritmetiske og logiske operasjoner.
4. **Registerfil**: Lagrer verdier som brukes i instruksjonene.

### Eksempel på Instruksjonssyklus

For en enkel RISC-V-instruksjon som `add x1, x2, x3`, vil en enkeltsyklisk prosessor utføre:
1. **Henting**: Lese instruksjonen fra instruksjonsminnet.
2. **Dekoding**: Identifisere operasjonen (addisjon) og registre (x1, x2, x3).
3. **Utførelse**: Utføre addisjon i ALU.
4. **Lagring**: Lagrer resultatet i register `x1`.

---

## Flersyklisk Prosessor

En **flersyklisk prosessor** utfører en instruksjon over flere klokkesykluser, og bryter instruksjonen ned i flere steg som utføres sekvensielt. Dette gjør at prosessoren kan være mer fleksibel og utnytte hver syklus mer effektivt.

### Fordeler og Ulemper

- **Fordeler**: Gir mulighet for en mer optimal bruk av klokkesykluser. Mindre krevende instruksjoner kan fullføres raskere.
- **Ulemper**: Mer kompleks enn enkeltsykliske prosessorer; krever en tilstandsmaskin for å holde styr på hvilket steg som er i bruk.

### Datapath for Flersyklisk Prosessor

I en flersyklisk prosessor deles datapathen inn i flere segmenter, hver tilknyttet en spesifikk funksjon. For hver syklus utføres et steg av instruksjonen:
1. **Hent instruksjonen**.
2. **Dekode instruksjonen og hent operander**.
3. **Utfør ALU-operasjonen**.
4. **Lagre resultatet**.

Flersykliske prosessorer bruker en **kontrollenhet basert på tilstandsmaskiner** for å holde orden på hvilke steg som utføres i hver klokkesyklus.

### Eksempel på Flersyklisk Utførelse

Ta instruksjonen `lw x1, 0(x2)`:
1. **Syklus 1**: Hent instruksjonen fra instruksjonsminnet.
2. **Syklus 2**: Dekode og hent `x2`-verdien fra registerfilen.
3. **Syklus 3**: Utfør minneoperasjonen for å hente verdien fra minnet.
4. **Syklus 4**: Lagr resultatet i register `x1`.

---

## Pipelining

**Pipelining** er en teknikk for å øke ytelsen til prosessoren ved å overlappe utførelsen av flere instruksjoner. En **5-stegs pipelinet prosessor** deler instruksjonen inn i fem steg som utføres sekvensielt, men starter en ny instruksjon hver syklus.

### Stegene i en 5-stegs Pipeline

1. **IF (Instruction Fetch)**: Henter instruksjonen fra instruksjonsminnet.
2. **ID (Instruction Decode)**: Dekoder instruksjonen og henter operander.
3. **EX (Execute)**: Utfører ALU-operasjonen.
4. **MEM (Memory)**: Leser fra eller skriver til minnet.
5. **WB (Write Back)**: Skriver resultatet tilbake til registeret.

### Fordeler med Pipelining

- **Økt ytelse**: Flere instruksjoner er i utførelse samtidig.
- **Bedre utnyttelse**: Hver enhet i datapathen brukes hver syklus.

### Eksempel på Pipeline Utførelse

Anta at vi har følgende instruksjoner:
```assembly
lw x1, 0(x2)   # IF -> ID -> EX -> MEM -> WB
add x3, x1, x4 # IF -> ID -> EX -> WB
sub x5, x3, x6 # IF -> ID -> EX -> WB
```
Mens `lw`-instruksjonen utføres, kan `add` begynne å hentes, og deretter kan `sub` også begynne mens `add` utføres. Dette gir en overlappende utførelse av instruksjoner.

---

## Risikoer og Konflikter i Pipelining

Pipelining introduserer utfordringer kjent som **farer** eller **risikoer**, som må håndteres for å opprettholde korrekt utførelse av instruksjoner. De vanligste typene farer er:

1. **Datafarer**: Oppstår når en instruksjon er avhengig av resultatet fra en tidligere instruksjon som ikke er ferdig.
2. **Kontrollfarer**: Oppstår ved hoppinstruksjoner som endrer programflyten.
3. **Strukturfare**: Skjer når maskinvareenheter må deles mellom flere instruksjoner samtidig.

### Håndtering av Farer

- **Datafarer** kan håndteres ved **videresending (forwarding)**, der verdier som er nødvendige for videre operasjoner videresendes direkte mellom pipeline-stegene.
- **Stalling** er en annen metode for å forsinke utførelsen til faren er eliminert.
- **Forgreningprediksjon** kan brukes for å gjette om en hoppinstruksjon skal tas, og dermed unngå kontrollfarer.

---

## Eksempler og Oppgaver

### Eksempel 1: Utførelse i en Enkeltsyklisk Prosessor

Instruksjonen `add x1, x2, x3` utføres i en enkeltsyklisk prosessor ved:
1. **IF**: Henter `add x1, x2, x3` fra minnet.
2. **ID**: Leser `x2` og `x3` fra registerfilen.
3. **EX**: Utfører `x1 = x2 + x3` i ALU.
4. **WB**: Skriver resultatet tilbake til `x1`.

---

### Eksempel 2: Pipeline med Datafare og Videresending

Gitt følgende instruksjoner:
```assembly
add x1, x2, x3   # Produserer x1
sub x4, x1, x5   # Bruker x1 fra forrige instruksjon
```
**Datafare**: `sub` er avhengig av resultatet fra `add`. Løsning ved videresending:
- Resultatet fra `add` videresendes direkte til `sub` uten å vente på at `add` fullføres.

---

### Eksempel 3: Kontrollfare med Forgreningprediksjon

Anta at vi

 har en `beq`-instruksjon:
```assembly
beq x1, x2, label
```
For å unngå forsinkelser ved kontrollfare, kan vi bruke forgreningprediksjon til å gjette om hoppet vil tas eller ikke, og begynne å hente neste instruksjon basert på prediksjonen.

---
Her er Kapittel 5 skrevet i Markdown, som dekker minnehierarki, hurtigbuffer (cache) og relaterte ytelsesaspekter.

---

# Kapittel 5: Minnehierarki og Hurtigbuffer

## Innholdsfortegnelse

1. [Innledning til Minnehierarki](#innledning-til-minnehierarki)
2. [Lokalitet og Minnebruk](#lokalitet-og-minnebruk)
3. [Hurtigbuffer (Cache)](#hurtigbuffer-cache)
4. [Hurtigbuffer-strategier](#hurtigbuffer-strategier)
5. [Hurtigbuffer-organisering](#hurtigbuffer-organisering)
6. [Ytelsesberegning for Hurtigbuffer](#ytelsesberegning-for-hurtigbuffer)
7. [Eksempler og Oppgaver](#eksempler-og-oppgaver)

---

## Innledning til Minnehierarki

Datamaskiner bruker et **minnehierarki** for å balansere mellom ytelse, kostnad og kapasitet. Minnehierarkiet gir inntrykk av et stort og raskt minne ved å kombinere flere minnetyper med ulike hastigheter og kostnader.

### Minnehierarkiets Struktur

Minnehierarkiet består typisk av:
1. **Registere** (raskest, minst lagringskapasitet): Ligger i CPU-en og gir direkte tilgang til ALU.
2. **Cacheminne**: Et lite, raskt minne som holder ofte brukte data.
3. **Hovedminne (RAM)**: Gir tilgang til de fleste data under kjøring.
4. **Sekundærminne**: Lagre store datamengder, men med langsommere tilgang (f.eks. harddisker og SSD-er).

---

## Lokalitet og Minnebruk

Minnehierarkiets effektivitet er basert på prinsippet om **lokalitet**, som refererer til hvordan programmer får tilgang til data.

### Typer Lokalitet

1. **Tidsmessig lokalitet**: Hvis et dataverdie nylig er blitt brukt, er det sannsynlig at den vil bli brukt igjen snart.
2. **Romlig lokalitet**: Hvis et dataverdie er blitt brukt, er det sannsynlig at dataene i nærliggende adresser også vil bli brukt snart.

### Eksempel på Lokalitet

Anta at et program gjentatte ganger får tilgang til en matrise. Hvis en verdi nylig har blitt lest fra minnet, er det en stor sjanse for at samme verdi eller naboverdier vil bli brukt igjen.

---

## Hurtigbuffer (Cache)

En **cache** er et lite, raskt minne som brukes til å holde data som prosessoren trenger rask tilgang til. Cacheminnet hjelper til med å redusere gapet mellom CPU-ens hastighet og det langsommere hovedminnet.

### Cache-hierarki

Moderne datamaskiner har ofte flere nivåer av cache:
- **L1-cache**: Raskeste og nærmest CPU, men med liten kapasitet.
- **L2-cache**: Litt større og langsommere enn L1, men fortsatt raskere enn hovedminnet.
- **L3-cache**: Deler data mellom flere kjerner i flerkjerneprosessorer.

---

## Hurtigbuffer-strategier

### Cache-block og Tagging

- **Cache-blokker (cache lines)**: Cache er delt inn i blokker, og hver blokk kan lagre en viss mengde data.
- **Tagging**: Hver cache-blokk assosieres med en "tag" som tilsvarer en del av minneadressen, slik at vi kan vite hvilke data som ligger i cachen.

### Cache-miss og Cache-hit

1. **Cache-hit**: Når data som etterspørres av CPU-en allerede finnes i cachen.
2. **Cache-miss**: Når data ikke finnes i cachen, og må hentes fra hovedminnet.

Det finnes tre typer cache-miss:
- **Compulsory miss**: Oppstår første gang en datahenting skjer.
- **Capacity miss**: Oppstår når cachen ikke har nok plass til å lagre alle dataene som er i bruk.
- **Conflict miss**: Oppstår når flere adresser konkurrerer om samme plass i cachen.

---

## Hurtigbuffer-organisering

**Cache-organisering** refererer til hvordan cachelinjer lagres og organiseres. Det finnes flere typer cache-organisering, som påvirker ytelsen.

### Typer Cache-organisering

1. **Direktetilordnet cache**: Hver minneblokk kan bare lagres på ett spesifikt sted i cachen. Dette er raskt, men kan føre til mange konflikter.
2. **Fullt assosiativ cache**: En minneblokk kan plasseres hvor som helst i cachen. Gir god ytelse, men er dyrere og krever mer komplisert maskinvare.
3. **Set-assosiativ cache**: Kombinerer direktetilordnet og fullt assosiativ cache. Cachen er delt inn i sett, og hver minneblokk kan plasseres i hvilken som helst linje innenfor et bestemt sett.

### Eksempel på Set-assosiativ Cache

I en 2-veis set-assosiativ cache med to sett, kan en gitt minneadresse plasseres i hvilken som helst av de to linjene innenfor sitt sett.

---

## Ytelsesberegning for Hurtigbuffer

Ytelsen til cache måles ofte i form av **cache-hit rate** og **cache-miss rate**.

### Beregning av Gjennomsnittlig Aksesstid

$$
\text{Gjennomsnittlig aksesstid} = \text{Hit rate} \times \text{Cache aksesstid} + \text{Miss rate} \times \text{Hovedminne aksesstid}
$$

- **Hit rate**: Andelen av datatilganger som finnes i cache.
- **Miss rate**: Andelen av datatilganger som ikke finnes i cache.

### Eksempel på Gjennomsnittlig Aksesstid

Anta at en cache har en hit rate på 90 %, en aksesstid på 2 ns, og at miss rate er 10 % med hovedminne aksesstid på 100 ns:

$$
\text{Gjennomsnittlig aksesstid} = (0.9 \times 2 \text{ ns}) + (0.1 \times 100 \text{ ns}) = 1.8 \text{ ns} + 10 \text{ ns} = 11.8 \text{ ns}
$$

---

## Eksempler og Oppgaver

### Eksempel 1: Cache-hit og Cache-miss
Anta at CPU-en har en 4 KB direktetilordnet cache, og vi henter en verdi fra minneadresse 0x2004 etter at vi nettopp har lest fra 0x2000. Hvis cache-blokkstørrelsen er 4 byte, vil begge adressene være i samme blokk, og 0x2004 vil resultere i en cache-hit.

### Eksempel 2: Beregning av Cache-miss Rate
Anta at en prosessor utfører 1 000 datatilganger, og at 950 av dem resulterer i cache-hit. Cache-miss rate kan da beregnes slik:

$$
\text{Miss rate} = \frac{1000 - 950}{1000} = 0.05 = 5\%
$$


### Eksempel 3: Ytelsesfordel ved Set-assosiativ Cache

En 4-veis set-assosiativ cache reduserer antallet conflict misses sammenlignet med en direktetilordnet cache, spesielt i situasjoner der flere minneadresser ofte kolliderer i samme cache-sett.

# Kapittel 6: Parallelle Systemer og Samlebåndsprosessorer

## Innholdsfortegnelse

1. [Introduksjon til Parallelle Systemer](#introduksjon-til-parallelle-systemer)
2. [Samlebåndsprosessorer](#samlebåndsprosessorer)
3. [Avhengigheter og Farer i Pipelining](#avhengigheter-og-farer-i-pipelining)
4. [Teknikker for å Håndtere Farer](#teknikker-for-å-håndtere-farer)
5. [Ytelse i Samlebåndsprosessorer](#ytelse-i-samlebåndsprosessorer)
6. [Eksempler og Oppgaver](#eksempler-og-oppgaver)

---

## Introduksjon til Parallelle Systemer

Parallelle systemer brukes for å øke ytelsen ved å utføre flere instruksjoner samtidig. Dette kan oppnås ved hjelp av flere prosessorkjerner eller gjennom teknikker som pipelining.

### Typer Parallelle Systemer

1. **MIMD (Multiple Instruction, Multiple Data)**: Flere prosessorer utfører ulike instruksjoner på forskjellige data. Brukes i flerkjernede systemer.
2. **SIMD (Single Instruction, Multiple Data)**: Én instruksjon utføres samtidig på flere dataelementer, ofte brukt i vektorprosessorer og grafikkbehandling.
3. **SISD (Single Instruction, Single Data)**: Tradisjonell sekvensiell utførelse, hvor én instruksjon behandles av én prosessor på ett dataelement.

---

## Samlebåndsprosessorer

**Samlebånd (pipelining)** er en teknikk der instruksjoner deles opp i separate steg som utføres i en overlappende rekkefølge. En 5-stegs pipelinet prosessor kan utføre flere instruksjoner samtidig, noe som øker prosessorens effektivitet.

### Stegene i en 5-stegs Pipeline

1. **IF (Instruction Fetch)**: Henter instruksjonen fra minnet.
2. **ID (Instruction Decode)**: Dekoder instruksjonen og henter nødvendige operander.
3. **EX (Execute)**: Utfører operasjonen i ALU-en.
4. **MEM (Memory)**: Leser fra eller skriver til minnet, hvis nødvendig.
5. **WB (Write Back)**: Skriver resultatet tilbake til registeret.

### Fordeler med Pipelining

- **Økt ytelse**: Pipelining kan forbedre ytelsen betydelig fordi flere instruksjoner kan være i utførelse samtidig.
- **Effektiv ressursutnyttelse**: Hver enhet i prosessoren er aktiv i hver klokkesyklus.

---

## Avhengigheter og Farer i Pipelining

Pipelining introduserer visse utfordringer, kjent som **farer**, som kan påvirke ytelsen. Disse farene oppstår når en instruksjon er avhengig av resultatet av en annen instruksjon som fortsatt er i pipeline.

### Typer Farer

1. **Datafarer**: Oppstår når en instruksjon trenger data fra en tidligere instruksjon som ikke er ferdig.
2. **Kontrollfarer**: Skjer når programflyten endres, f.eks. ved en hoppinstruksjon.
3. **Strukturfare**: Oppstår når maskinvareenheter må deles mellom flere instruksjoner samtidig.

---

## Teknikker for å Håndtere Farer

### Håndtering av Datafarer

- **Videresending (Forwarding)**: Resultater fra en instruksjon sendes direkte til en annen instruksjon i pipelinen uten å vente på at verdien skrives tilbake til registeret.
- **Stalling**: Pipeline settes på pause til nødvendige data er tilgjengelige.

#### Eksempel på Videresending
Anta at vi har instruksjonene:
```assembly
add x1, x2, x3
sub x4, x1, x5
```
Instruksjonen `sub` er avhengig av verdien i `x1`, som produseres av `add`. Ved videresending kan `sub` bruke resultatet direkte fra `add`-instruksjonen uten å vente.

### Håndtering av Kontrollfarer

- **Forgreningprediksjon**: Gjør et kvalifisert gjetning om hoppinstruksjonen vil tas eller ikke. To vanlige metoder er statisk og dynamisk forgreningprediksjon.
    - **Statisk prediksjon**: Basert på en fast regel, for eksempel "hopp tas alltid" eller "hopp tas aldri."
    - **Dynamisk prediksjon**: Bruker historikk for å forbedre prediksjonen, ofte mer nøyaktig enn statisk.
- **Forsinket hopp**: Lar instruksjonen rett etter en hoppinstruksjon alltid utføres, noe som kan redusere kontrollfare-påvirkningen.

---

## Ytelse i Samlebåndsprosessorer

Ytelsen i en pipelinet prosessor avhenger av hvor godt pipelinen utnyttes. Noen faktorer som påvirker ytelsen er:

1. **Oppstartskostnad**: Når pipelinen starter, må vi vente til den fylles opp før alle steg utnyttes fullt ut.
2. **Balanse i Stegene**: Hvis ett steg tar lengre tid enn de andre, vil dette skape en flaskehals.
3. **Antall farer**: Flere farer i pipelinen reduserer ytelsen, spesielt hvis de krever mange stalls.

### Beregning av Samlebåndsytelse

Pipelinet prosessorer har potensielt høyere ytelse fordi de utfører én instruksjon per klokkesyklus etter oppstart. Beregningsformelen for antall klokkesykluser med pipelining er:

\[
\text{Klokkesykluser} = \text{Antall instruksjoner} + (\text{Antall pipeline-steg} - 1)
\]

### Eksempel på Ytelsesberegning i Pipeline

Anta at vi har 10 instruksjoner i en 5-stegs pipeline. Uten stalls vil det totale antall klokkesykluser bli:
\[
10 + (5 - 1) = 14 \text{ klokkesykluser}
\]

---

## Eksempler og Oppgaver

### Eksempel 1: Datafare og Videresending

Anta at vi har instruksjonene:
```assembly
add x1, x2, x3   # Produserer verdi for x1
sub x4, x1, x5   # Bruker verdien av x1 fra forrige instruksjon
```
Her har vi en **datafare**. Løsningen er å bruke **videresending** for å gi `sub`-instruksjonen tilgang til `x1` uten å vente på at `add` fullføres.

---

### Eksempel 2: Kontrollfare og Forgreningprediksjon

Gitt:
```assembly
beq x1, x2, label
```
Hvis `x1` er lik `x2`, vil programmet hoppe til `label`. Ved **forgreningprediksjon** kan vi gjette utfallet. Hvis vi bruker statisk prediksjon (f.eks., "hopp tas aldri"), vil vi fortsette som om `beq` ikke tas. Hvis gjetningen er feil, må vi tilbakestille pipelinen, noe som kan føre til ytelsestap.

---

### Eksempel 3: Pipeline Stalls for Å Håndtere Datafarer

Anta at vi har instruksjonene:
```assembly
lw x1, 0(x2)   # Laster data fra minne til x1
add x3, x1, x4 # Bruker verdien fra x1
```
Siden `add` er avhengig av `x1`, som ennå ikke er ferdig lastet, må pipelinen **stalle** i én syklus for å vente på at `lw` skal fullføres.

---

Her er en detaljert oppsummering av innholdet for Appendix A, som dekker grunnleggende digital logikk og aritmetikk, sentrale emner for forståelse av maskinvarekomponenter.

---

# Appendix A: Grunnleggende Digital Logikk og Aritmetikk

## Innholdsfortegnelse

1. [Introduksjon til Digital Logikk](#introduksjon-til-digital-logikk)
2. [Logiske Porter](#logiske-porter)
3. [Kombinatorisk Logikk](#kombinatorisk-logikk)
4. [Sekvensiell Logikk](#sekvensiell-logikk)
5. [Aritmetiske Operasjoner og Aritmetisk-logiske Enheter (ALU-er)](#aritmetiske-operasjoner-og-aritmetisk-logiske-enheter-alu-er)
6. [Eksempler og Oppgaver](#eksempler-og-oppgaver)

---

## Introduksjon til Digital Logikk

Digital logikk er grunnlaget for alle datamaskinsystemer. Digitale systemer opererer med **binære tall** som representerer to tilstander: `0` (lav spenning) og `1` (høy spenning). Dette gjør det mulig for elektroniske kretser å behandle data basert på logiske operasjoner, som danner grunnlaget for maskinvarearkitektur.

### Digitale Systemer

- **Binære verdier** representerer tilstandene i et digitalt system.
- **Logiske operasjoner** utføres på disse verdiene for å implementere beslutningslogikk og aritmetiske operasjoner.

---

## Logiske Porter

**Logiske porter** er de grunnleggende byggesteinene for digital logikk. Hver port utfører en spesifikk logisk operasjon på en eller flere binære innganger.

### Typer Logiske Porter

1. **AND-port**: Gir `1` kun når begge inngangene er `1`.
    - Symbol: `A AND B = A * B`
2. **OR-port**: Gir `1` når minst én av inngangene er `1`.
    - Symbol: `A OR B = A + B`
3. **NOT-port**: Inverterer inngangen (`0` blir `1` og `1` blir `0`).
    - Symbol: `A'` eller `NOT A`

I tillegg til disse grunnleggende portene finnes sammensatte porter som:
- **NAND-port**: Inverterer AND, gir `1` unntatt når begge inngangene er `1`.
- **NOR-port**: Inverterer OR, gir `1` kun når begge inngangene er `0`.
- **XOR-port**: Gir `1` når inngangene er forskjellige.

---

## Kombinatorisk Logikk

Kombinatorisk logikk er en type digital logikk der utgangen avhenger utelukkende av de nåværende inngangsverdiene. Dette betyr at det ikke er noen lagring av tidligere inngangsverdier, og utgangen oppdateres umiddelbart når inngangene endres.

### Viktige Kombinatoriske Kretser

1. **Multiplekser (MUX)**: Velger én av flere innganger basert på en seleksjonsverdi. Brukes til å rute signaler.
2. **Dekoder**: Oversetter en binær inngangsverdi til én av flere utganger, typisk for å velge én spesifikk linje i en krets.
3. **Adder**: Utfører binær addisjon på to eller flere tall.
   - **Full-adder**: Kan legge sammen to biter samt en "carry-in"-verdi, noe som gir en `sum` og en `carry-out`.

#### Sum-av-Produkt Form (SOP)

En måte å uttrykke logiske funksjoner på er ved **sum-av-produkt**-formen, der hver mulige kombinasjon av inngangsverdier som gir `1` på utgangen, representeres som et produkt (AND) av variablene, som deretter summeres (OR).

Eksempel: \( F(A, B, C) = A \cdot B + A' \cdot C \)

---

## Sekvensiell Logikk

I motsetning til kombinatorisk logikk, er **sekvensiell logikk** avhengig av både nåværende inngangsverdier og tidligere tilstander. Dette gjør det mulig å lagre informasjon over tid.

### Grunnleggende Sekvensielle Komponenter

1. **SR-låser**: Den enkleste typen lagringsenhet som bruker **SET** og **RESET** innganger.
2. **D-vipper**: Brukes til å lagre én bit ved hjelp av en klokke. Den lagrer verdien ved stigende eller fallende klokke-edge.
3. **Registere**: En samling av vipper som kan lagre flere bits, ofte brukt til å lagre operander eller resultater i prosessoren.
4. **Tilstandsmaskiner**: Sekvensiell logikk som beveger seg gjennom forskjellige tilstander basert på innganger og nåværende tilstand. Brukes til å kontrollere komplekse prosesser i maskinvare.

### Klokkesignal og Timing

Sekvensielle kretser synkroniseres ofte med et **klokkesignal** som dikterer når data skal oppdateres. Hver syklus av klokkesignalet representerer en tid hvor data kan endres eller lagres i sekvensielle elementer som registre.

---

## Aritmetiske Operasjoner og Aritmetisk-logiske Enheter (ALU-er)

En **ALU (Arithmetic Logic Unit)** er en kjernekomponent i CPU-en som utfører aritmetiske og logiske operasjoner på data. 

### ALU-funksjoner

1. **Addisjon og Subtraksjon**: Utføres ved bruk av en adder/subtraktorkrets. Subtraksjon kan utføres ved å bruke to-komplement.
2. **Logiske Operasjoner**: AND, OR, NOT, XOR, som er nødvendig for beslutningstaking og bitmanipulasjon.
3. **Shift-operasjoner**: Flytter bitene i en verdi til høyre eller venstre, som brukes til rask multiplikasjon eller divisjon.

### Bygging av en ALU

En ALU består av ulike komponenter som kombineres basert på kontrollsignaler for å utføre ønskede operasjoner. Kontrollsignalet styrer hvilke operasjoner ALU-en skal utføre.

#### Eksempel på En 4-Bit ALU

En 4-bit ALU kan utføre:
- **Addition**: Tar to 4-bit binære tall og produserer en 4-bit sum.
- **AND/OR**: Tar to 4-bit binære tall og utfører en logisk AND/OR på hvert bitpar.

### To-komplement for Negative Tall

To-komplement brukes til å representere negative tall i binær form, og gjør det mulig for ALU-en å håndtere både positive og negative verdier uten behov for ekstra maskinvare.

1. **Representasjon**: Det mest signifikante bitet (venstre bit) indikerer om tallet er positivt (0) eller negativt (1).
2. **Invertering og Addisjon**: For å finne to-komplementet av et tall, inverteres alle bitene og `1` legges til.

Eksempel: For et 4-bit system, er -3 representert som `1101`.

---

## Eksempler og Oppgaver

### Eksempel 1: Konstruere En Sum-av-Produkt Krets

Anta at vi har en logisk funksjon \( F(A, B, C) \) som gir `1` når \( A = 1, B = 0, C = 1 \) og \( A = 0, B = 1, C = 1 \). Da kan vi skrive SOP-uttrykket som:

\[
F(A, B, C) = A \cdot B' \cdot C + A' \cdot B \cdot C
\]

### Eksempel 2: Bruk av SR-lås og D-vippe

Anta at vi har en SR-lås der `SET` og `RESET` brukes til å kontrollere en LED:
- **SET = 1, RESET = 0**: LED lyser (`Q = 1`)
- **SET = 0, RESET = 1**: LED slås av (`Q = 0`)

Ved hjelp av en D-vippe kan vi lagre tilstanden til LED basert på et klokkesignal, slik at LED-en endres kun når klokkesignalet endres.

### Eksempel 3: ALU-Operasjoner med To-komplement

Anta at vi har en 4-bit ALU og ønsker å beregne `5 - 3`:
1. **5** i binær: `0101`
2. **-3** i to-komplement: `1101`
3. ALU-en utfører binær addisjon:
   \[
   0101 + 1101 = 0010 \quad (\text{som er 2 i desimal})
   \]

---

## Oppsummering
