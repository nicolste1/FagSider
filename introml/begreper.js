/* ═══════════════════════════════════════════════════════════════════
   Begrepsordliste for TDT4172 Introduksjon til maskinlæring.
   Kun DATA: window.GLOSSARY. Popover-UI-en ligger i /glossary.js (felles for alle fag).

   Bruk i HTML:   <span class="term" data-term="sigmoid">Sigmoid-funksjonen</span>

   Felt per begrep:
     term  — visningsnavn (HTML tillatt, f.eks. <sub>)
     def   — forklaring (HTML tillatt, hold det kort: 1–3 setninger)
     more  — (valgfritt) lenke relativt til fagets rot, f.eks. "kap1/logistisk-regresjon.html#modell"
     alias — (valgfritt) alternative navn, vises i ordlista og søk

   Legg til nye begreper her når notatene får nye kapitler.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LR = 'kap1/logistisk-regresjon.html';
  var BT = 'kap1/beslutningstraer.html';
  var RG = 'kap1/regresjon.html';
  var EN = 'kap1/ensemble.html';
  var NN = 'kap2/perceptron.html';

  window.GLOSSARY = {
    /* ── 1.1 Data ── */
    'maskinlaering': {
      term: 'Maskinlæring',
      def: '<p>Å programmere datamaskiner slik at de kan lære fra data. Mitchell (1997): et program lærer av erfaring <em>E</em> på en oppgave <em>T</em> med ytelsesmål <em>P</em> hvis ytelsen på <em>T</em>, målt med <em>P</em>, øker med <em>E</em>.</p>',
      more: LR + '#data'
    },
    'veiledet-laering': {
      term: 'Veiledet læring',
      alias: 'supervised learning',
      def: '<p>Læring der datasettet inneholder en <em>target</em>-kolonne med fasit for hvert datapunkt. Modellen lærer sammenhengen mellom features <em>x</em> og target <em>y</em>, slik at den kan estimere <em>y</em> for nye <em>x</em>.</p>',
      more: LR + '#data'
    },
    'datasett': {
      term: 'Datasett',
      def: '<p>En samling datapunkter. I en tabell er hver <strong>rad</strong> ett datapunkt og hver <strong>kolonne</strong> én feature (eller target).</p>',
      more: LR + '#data'
    },
    'feature': {
      term: 'Feature (variabel)',
      alias: 'variabel, egenskap',
      def: '<p>En egenskap ved et datapunkt, én kolonne i datasettet. Kalles <em>variabel</em> i statistikk. Betegnes <em>x<sub>j</sub></em> for feature nummer <em>j</em>; hele feature-vektoren til datapunkt <em>i</em> skrives <strong>x</strong><sup>(i)</sup>.</p>',
      more: LR + '#data'
    },
    'target': {
      term: 'Target',
      alias: 'label, fasit',
      def: '<p>Kolonnen som angir verdien vi ønsker å estimere, betegnet <em>y</em>. Har vi target for hvert datapunkt, kan vi gjøre veiledet læring. I Titanic-eksempelet er <code>Survived</code> target.</p>',
      more: LR + '#data'
    },
    'kvalitativ': {
      term: 'Kvalitativ (kategorisk) variabel',
      def: '<p>En variabel som beskriver et endelig antall kategorier, f.eks. sjanger eller kjønn. Må ofte <em>enkodes</em> til tall (label encoding) før den kan brukes i maskinlæring.</p>',
      more: LR + '#data'
    },
    'kvantitativ': {
      term: 'Kvantitativ variabel',
      def: '<p>En variabel med numeriske verdier som kan måles, sorteres og regnes på, f.eks. alder eller inntekt. Kan være diskret eller kontinuerlig. Bør ofte skaleres (normaliseres) før bruk.</p>',
      more: LR + '#data'
    },
    'binaer': {
      term: 'Binær variabel',
      def: '<p>En kategorisk variabel med nøyaktig to mulige verdier, f.eks. <code>Sex</code> (male/female) eller <code>Survived</code> (0/1).</p>',
      more: LR + '#data'
    },
    'label-encoding': {
      term: 'Label encoding',
      def: '<p>Å mappe hver kategori-verdi til et unikt heltall, f.eks. «female» → 0 og «male» → 1. I scikit-learn gjøres dette med <code>LabelEncoder</code>.</p>',
      more: LR + '#data'
    },
    'normalisering': {
      term: 'Normalisering / skalering',
      alias: 'MinMaxScaler',
      def: '<p>Å skalere en numerisk feature til et fast intervall, typisk [0, 1], slik at features med ulik størrelsesorden ikke dominerer. <code>MinMaxScaler</code> i scikit-learn gjør akkurat dette.</p>',
      more: LR + '#data'
    },
    'preprosessering': {
      term: 'Preprosessering',
      def: '<p>Behandling av dataene før modellering: fjerne rader med manglende verdier (<code>dropna()</code>), enkode kategoriske features, skalere numeriske features og mer avansert feature engineering.</p>',
      more: LR + '#data'
    },
    'bar-plott': {
      term: 'Bar-plott',
      def: '<p>Viser <em>middelverdien</em> per kategori, f.eks. andelen som overlevde per passasjerklasse. Brukes for å sammenlikne gjennomsnitt på tvers av kategorier.</p>',
      more: LR + '#data'
    },
    'histogram': {
      term: 'Histogram',
      def: '<p>Viser <em>fordelingen</em> av en variabel: stolpene representerer intervaller (<em>bins</em>) og høyden antall datapunkter i hvert intervall. Valg av antall bins påvirker hvordan fordelingen ser ut.</p>',
      more: LR + '#data'
    },
    'bins': {
      term: 'Bins',
      def: '<p>Intervallene stolpene i et histogram dekker. For mange bins gir et hakkete histogram med få punkter per bin, for få bins skjuler formen på fordelingen. Det finnes ingen allmenngyldig regel.</p>',
      more: LR + '#data'
    },
    'modell': {
      term: 'Modell',
      def: '<p>En funksjon <em>f</em> som tar inn features <strong>x</strong> og gir en prediksjon <em>f</em>(<strong>x</strong>) = <em>y</em><sub>pred</sub>. Modellen er definert av parametrene sine, for logistisk regresjon <strong>w</strong> og <em>b</em>.</p>',
      more: LR + '#modell'
    },

    /* ── 1.2 Logistisk regresjon ── */
    'lineaer-regresjon': {
      term: 'Lineær regresjon',
      def: '<p>Den enkleste modellen: <em>z</em> = <strong>w</strong>·<strong>x</strong> + <em>b</em>, en vektet sum av features pluss et konstantledd. Vektene forteller hvor viktig hver feature er for utfallet. <em>z</em> kan bli et hvilket som helst tall.</p>',
      more: LR + '#modell'
    },
    'vekt': {
      term: 'Vekter (w)',
      def: '<p>Parametrene <em>w<sub>i</sub></em> som multipliseres med hver feature <em>x<sub>i</sub></em>. Størrelsen på <em>w<sub>i</sub></em> sier hvor mye feature <em>i</em> påvirker utfallet. Læres under trening.</p>',
      more: LR + '#modell'
    },
    'bias': {
      term: 'Bias (b)',
      def: '<p>Konstantleddet i den lineære modellen, <em>z</em> = <strong>w</strong>·<strong>x</strong> + <em>b</em>. Forskyver beslutningsgrensen uavhengig av feature-verdiene. Læres under trening sammen med vektene. Kalles β<sub>0</sub> i regresjon. Ikke å forveksle med <em>bias til en læringsalgoritme</em> (avsnitt 1.4.5).</p>',
      more: LR + '#modell'
    },
    'logistisk-regresjon': {
      term: 'Logistisk regresjon',
      def: '<p>En klassifiseringsmodell som sender den lineære modellen <strong>w</strong>·<strong>x</strong> + <em>b</em> gjennom sigmoid-funksjonen, slik at utdata er en sannsynlighet i (0, 1). Trenes med cross-entropy loss og gradient descent.</p>',
      more: LR + '#modell'
    },
    'sigmoid': {
      term: 'Sigmoid-funksjonen',
      alias: 'logistisk funksjon, σ',
      def: '<p>σ(<em>z</em>) = 1 / (1 + e<sup>−<em>z</em></sup>). Mapper alle reelle tall til intervallet (0, 1) og er formet som en «S». Gjør om et vilkårlig tall <em>z</em> til noe som kan tolkes som en sannsynlighet.</p>',
      more: LR + '#modell'
    },
    'aktiveringsfunksjon': {
      term: 'Aktiveringsfunksjon',
      def: '<p>Navnet sigmoid-funksjonen (og andre ikke-lineære funksjoner) får når vi diskuterer nevrale nettverk senere i kurset. Legges på utdata fra en lineær operasjon.</p>',
      more: LR + '#modell'
    },
    'prediksjon': {
      term: 'Prediksjon',
      def: '<p>Modellens estimat <em>y</em><sub>pred</sub> = <em>f</em>(<strong>x</strong>). For logistisk regresjon er dette et tall i (0, 1) som tolkes som sannsynligheten for klasse 1.</p>',
      more: LR + '#modell'
    },
    'trening': {
      term: 'Trening (læring)',
      def: '<p>Prosessen der modellen tilpasses treningsdataene slik at tapet minker. For logistisk regresjon: finne <strong>w</strong> og <em>b</em> som minimerer gjennomsnittlig cross-entropy loss, ved hjelp av gradient descent.</p>',
      more: LR + '#tap'
    },
    'tapsfunksjon': {
      term: 'Tapsfunksjon',
      alias: 'loss function',
      def: '<p>En funksjon ℒ(<em>y</em><sub>pred</sub>, <em>y</em>) som sier hvor langt prediksjonen er fra fasit. Trening går ut på å minimere tapet i gjennomsnitt over treningsdataene. Må være deriverbar for at gradient descent skal fungere.</p>',
      more: LR + '#tap'
    },
    'likelihood': {
      term: 'Likelihood',
      def: '<p>En «sannsynlighet» sett fra parametrenes side: gitt at dataene er observert, hvor godt passer ulike parameterverdier? Vi maksimerer likelihood når vi trener. Kalles sannsynlighet når modellen er fast og dataene varierer, likelihood når dataene er faste og modellen varierer.</p>',
      more: LR + '#tap'
    },
    'log-likelihood': {
      term: 'Log-likelihood',
      def: '<p>Logaritmen til likelihood. Siden logaritmen er monoton har den samme optimum, men produkter blir summer og eksponenter blir faktorer, som er mye lettere å derivere.</p>',
      more: LR + '#tap'
    },
    'cross-entropy': {
      term: 'Cross-entropy loss',
      alias: 'binary cross entropy, log loss',
      def: '<p>Tapsfunksjonen for logistisk regresjon: ℒ = −<em>y</em> ln <em>y</em><sub>pred</sub> − (1 − <em>y</em>) ln(1 − <em>y</em><sub>pred</sub>). Er minus log-likelihood, og måler forskjellen mellom fordelingen av fasit og fordelingen av prediksjoner.</p>',
      more: LR + '#tap'
    },
    'mle': {
      term: 'Conditional maximum likelihood estimation',
      def: '<p>Å velge parametrene θ som maksimerer log-likelihood for target-verdiene <em>y</em> gitt hvert datapunkt <strong>x</strong>. Det er dette vi gjør når vi trener logistisk regresjon.</p>',
      more: LR + '#tap'
    },
    'parameter': {
      term: 'Parameter (modellparameter)',
      alias: 'θ',
      def: '<p>Verdiene som definerer modellen og som læres under trening. For logistisk regresjon er θ = (<strong>w</strong>, <em>b</em>). Ikke å forveksle med hyperparametre.</p>',
      more: LR + '#gradient-descent'
    },
    'hyperparameter': {
      term: 'Hyperparameter',
      def: '<p>En innstilling som definerer <em>læringsprosessen</em>, men ikke modellen selv: læringsraten, antall epoker, maks dybde på et beslutningstre. Velges av oss, ikke lært fra data.</p>',
      more: LR + '#gradient-descent'
    },
    'konveks': {
      term: 'Konveks funksjon',
      def: '<p>En funksjon med bare ett minimum, som en skål. Tapsfunksjonen for logistisk regresjon er konveks, så gradient descent er garantert å finne det globale minimumet.</p>',
      more: LR + '#gradient-descent'
    },
    'lokalt-minimum': {
      term: 'Lokalt vs. globalt minimum',
      def: '<p>Et lokalt minimum er et punkt der funksjonen bare stiger i nærheten, men som likevel ligger høyere enn det globale minimumet. Ikke-konvekse funksjoner kan ha mange lokale minima, og gradient descent kan sette seg fast i ett av dem.</p>',
      more: LR + '#gradient-descent'
    },
    'gradient': {
      term: 'Gradient',
      def: '<p>Vektoren av partiellderiverte av tapsfunksjonen med hensyn på hver parameter, ∂ℒ/∂θ. Peker i retningen der tapet <em>øker</em> brattest, derfor går vi motsatt vei.</p>',
      more: LR + '#gradient-descent'
    },
    'gradient-descent': {
      term: 'Gradient descent',
      def: '<p>Iterativ metode for å finne minimum: start med tilfeldige parametre, regn ut gradienten, ta et lite steg i motsatt retning, gjenta. Oppdateringsregel: θ<sup>t+1</sup> = θ<sup>t</sup> − η ∂ℒ/∂θ.</p>',
      more: LR + '#gradient-descent'
    },
    'laeringsrate': {
      term: 'Læringsrate (η)',
      def: '<p>Hyperparameteren som bestemmer hvor store steg gradient descent tar. For høy: hopper over minimumet eller divergerer. For lav: treningen tar svært lang tid.</p>',
      more: LR + '#gradient-descent'
    },
    'parameterrom': {
      term: 'Parameterrom',
      def: '<p>Rommet spent ut av alle mulige parameterverdier θ. Har modellen fire parametre, er rommet firedimensjonalt. Gradient descent «vandrer» i dette rommet, ikke i data-rommet.</p>',
      more: LR + '#gradient-descent'
    },
    'deriverbar': {
      term: 'Deriverbar',
      def: '<p>En funksjon vi kan regne ut den deriverte av overalt. Siden gradient descent trenger gradienten, må tapsfunksjonen være deriverbar. Evalueringsmetrikker trenger derimot ikke å være det.</p>',
      more: LR + '#gradient-descent'
    },
    'kjerneregelen': {
      term: 'Kjerneregelen',
      def: '<p>∂f/∂x = (∂f/∂u)(∂u/∂x). Brukes når vi deriverer sammensatte funksjoner som ln σ(<strong>w</strong>·<strong>x</strong> + <em>b</em>) med hensyn på <em>w<sub>j</sub></em>.</p>',
      more: LR + '#gradient-descent'
    },
    'epoke': {
      term: 'Epoke',
      def: '<p>Én gjennomgang av hele treningsdatasettet med gradient descent. Hyperparameteren <code>epochs</code> angir hvor mange ganger vi gjør dette.</p>',
      more: LR + '#trening'
    },
    'laeringsalgoritme': {
      term: 'Læringsalgoritme',
      def: '<p>Et program som kombinerer modell, tapsfunksjon og parameteroppdatering (gradient descent) til noe som lærer fra data. <code>fit</code> og <code>predict</code> er de to standardmetodene.</p>',
      more: LR + '#trening'
    },
    'fit-predict': {
      term: 'fit / predict',
      def: '<p>De to standardmetodene i maskinlæringsbiblioteker. <code>fit(X, y)</code> tilpasser parametrene til treningsdataene; <code>predict(X)</code> returnerer modellens prediksjon for nye data. Bruk disse navnene selv når du skriver fra bunnen.</p>',
      more: LR + '#trening'
    },
    'treningsdata': {
      term: 'Treningsdata',
      def: '<p>Den (største) delen av datasettet som brukes til å tilpasse modellparametrene. Modellen får se disse dataene under trening.</p>',
      more: LR + '#trening'
    },
    'testdata': {
      term: 'Testdata',
      def: '<p>Den mindre delen av datasettet som holdes unna under trening og først brukes for å evaluere den ferdige modellen. Sier noe om hvor godt modellen generaliserer.</p>',
      more: LR + '#trening'
    },
    'train-test-split': {
      term: 'train_test_split',
      def: '<p>Funksjonen i scikit-learn som deler et datasett tilfeldig i en trenings- og en testdel, f.eks. <code>test_size=0.3</code> for 30 % testdata.</p>',
      more: LR + '#trening'
    },
    'generalisering': {
      term: 'Generalisering',
      def: '<p>Evnen til å gjøre det godt på <em>nye</em> data, ikke bare på dataene modellen ble trent på. Et sentralt mål i maskinlæring, og grunnen til at vi holder av testdata.</p>',
      more: LR + '#trening'
    },
    'accuracy': {
      term: 'Accuracy (treffsikkerhet)',
      def: '<p>Andelen prediksjoner som er riktige: (TP + TN) / alle. Enkel, men misvisende på ubalanserte data, der man kan få høy accuracy ved bare å gjette majoritetsklassen.</p>',
      more: LR + '#evaluering'
    },
    'metrikk': {
      term: 'Metrikk (evalueringsmetrikk)',
      def: '<p>Et mål på modellens ytelse som skal gi mening for mennesker, f.eks. precision eller recall. Trenger ikke være deriverbar, i motsetning til tapsfunksjonen. Bruk gjerne flere for å forstå styrker og svakheter.</p>',
      more: LR + '#evaluering'
    },
    'confusion-matrix': {
      term: 'Confusion matrix',
      alias: 'forvekslingsmatrise',
      def: '<p>En tabell som teller hvor mange datapunkter som ble klassifisert riktig (TP, TN, på diagonalen) og feil (FP, FN, utenfor diagonalen) per klasse. Grunnlaget for de fleste klassifiseringsmetrikker.</p>',
      more: LR + '#evaluering'
    },
    'tp-tn-fp-fn': {
      term: 'TP, TN, FP, FN',
      def: '<p><strong>True positive</strong>: predikert 1, fasit 1. <strong>True negative</strong>: predikert 0, fasit 0. <strong>False positive</strong>: predikert 1, fasit 0 (falsk alarm). <strong>False negative</strong>: predikert 0, fasit 1 (missed case).</p>',
      more: LR + '#evaluering'
    },
    'tpr': {
      term: 'True positive rate (TPR)',
      alias: 'recall, sensitivitet',
      def: '<p>TP / (TP + FN): andelen av de faktisk positive som modellen fanger opp. Også kalt recall, sensitivitet og sannsynlighet for deteksjon. Høy TPR betyr få missed cases.</p>',
      more: LR + '#evaluering'
    },
    'tnr': {
      term: 'True negative rate (TNR)',
      alias: 'spesifisitet',
      def: '<p>TN / (TN + FP): andelen av de faktisk negative som modellen korrekt sier er negative. Også kalt spesifisitet.</p>',
      more: LR + '#evaluering'
    },
    'fpr': {
      term: 'False positive rate (FPR)',
      def: '<p>FP / (FP + TN): andelen av de faktisk negative som modellen feilaktig kaller positive. Sannsynligheten for falsk alarm, lik 1 − spesifisitet. Den horisontale aksen i ROC-kurven.</p>',
      more: LR + '#evaluering'
    },
    'precision': {
      term: 'Precision (PPV)',
      alias: 'presisjon, positive predictive value',
      def: '<p>TP / (TP + FP): andelen av de som er <em>predikert</em> positive som faktisk er positive. Høy precision betyr få falske alarmer. Avhenger av klassefordelingen, siden FP kommer fra den negative klassen.</p>',
      more: LR + '#terskel'
    },
    'recall': {
      term: 'Recall',
      def: '<p>TP / (TP + FN): andelen av de <em>faktisk</em> positive som modellen finner. Samme som TPR og sensitivitet. Høy recall betyr få missed cases, viktig når det er dyrt å overse en positiv.</p>',
      more: LR + '#terskel'
    },
    'terskel': {
      term: 'Klassifiseringsterskel',
      def: '<p>Tallet som bestemmer når modellens sannsynlighet skal tolkes som klasse 1, typisk 0.5. Å justere terskelen endrer ikke modellen, bare hvordan vi tolker prediksjonene, og gir en trade-off mellom ulike metrikker.</p>',
      more: LR + '#terskel'
    },
    'roc': {
      term: 'ROC-kurven',
      alias: 'receiver operating characteristic',
      def: '<p>Plott av TPR mot FPR for alle klassifiseringsterskler fra 1 til 0. Starter i (0, 0) og ender i (1, 1). Tilfeldig gjetning gir diagonalen, en god modell ligger langt over den.</p>',
      more: LR + '#terskel'
    },
    'auc': {
      term: 'ROC AUC',
      alias: 'area under curve',
      def: '<p>Arealet under ROC-kurven, mellom 0.5 (myntkast) og 1 (perfekt). Tolkning: sannsynligheten for at modellen gir et tilfeldig positivt datapunkt høyere verdi enn et tilfeldig negativt.</p>',
      more: LR + '#terskel'
    },
    'precision-recall-kurve': {
      term: 'Precision-recall-kurven',
      def: '<p>Plott av precision mot recall for ulike terskler. Viser trade-offen: når den ene øker, minker den andre. Brukes blant annet til å velge terskel på ubalanserte data.</p>',
      more: LR + '#terskel'
    },
    'entropi': {
      term: 'Entropi (Shannon-entropi)',
      def: '<p>Et mål på usikkerheten i en sannsynlighetsfordeling: H(p) = −Σ p(x<sub>i</sub>) log p(x<sub>i</sub>). Maksimal når alle utfall er like sannsynlige, null når ett utfall er sikkert. Brukes både i cross-entropy loss og som splitt-kriterium i beslutningstrær.</p>',
      more: LR + '#entropi'
    },
    'kryssentropi': {
      term: 'Kryssentropi',
      alias: 'cross entropy',
      def: '<p>H(p, q) = −Σ p(x<sub>i</sub>) log q(x<sub>i</sub>): forventningen over den <em>sanne</em> fordelingen p av log-sannsynligheten under vår <em>antatte</em> fordeling q. Måler forskjellen mellom fasit og prediksjoner, og er derfor en naturlig tapsfunksjon.</p>',
      more: LR + '#entropi'
    },
    'bayes': {
      term: 'Bayes’ teorem',
      def: '<p>P(A|B) = P(B|A) P(A) / P(B). Følger av at P(A ∩ B) kan skrives på to måter. For klassifisering: p(C<sub>k</sub>|<strong>x</strong>) = p(<strong>x</strong>|C<sub>k</sub>) p(C<sub>k</sub>) / p(<strong>x</strong>).</p>',
      more: LR + '#bayes'
    },
    'prior': {
      term: 'Prior, p(C<sub>k</sub>)',
      alias: 'a priori-sannsynlighet',
      def: '<p>Sannsynligheten for hver klasse <em>før</em> vi ser datapunktet: fordelingen av klassene i treningsdataene. Lett å beregne som andel av datapunktene i hver klasse.</p>',
      more: LR + '#bayes'
    },
    'evidens': {
      term: 'Evidens, p(x)',
      def: '<p>Fordelingen av selve dataene uavhengig av klasse. Vanskelig (kanskje umulig) å skrive ned, men siden den er lik for alle klasser kan vi ignorere den når vi bare sammenlikner klasser.</p>',
      more: LR + '#bayes'
    },
    'klasse-likelihood': {
      term: 'Likelihood, p(x|C<sub>k</sub>)',
      def: '<p>Den betingede fordelingen av dataene gitt klassen: én fordeling per klasse, med like mange dimensjoner som datasettet har features. Vanskelig å estimere når features er avhengige av hverandre.</p>',
      more: LR + '#bayes'
    },
    'posterior': {
      term: 'Posterior, p(C<sub>k</sub>|x)',
      def: '<p>Sannsynligheten for klasse <em>k</em> gitt et observert datapunkt <strong>x</strong>. Dette er det vi egentlig ønsker å estimere når vi klassifiserer.</p>',
      more: LR + '#bayes'
    },
    'naiv-bayes': {
      term: 'Naïv Bayes',
      def: '<p>Klassifikator som antar at alle features er uavhengige gitt klassen, slik at p(<strong>x</strong>|C<sub>k</sub>) blir et produkt av én fordeling per feature. «Naïv» fordi antakelsen sjelden holder helt, men den fungerer ofte overraskende bra. Gir ukalibrerte sannsynligheter.</p>',
      more: LR + '#bayes'
    },
    'kalibrert': {
      term: 'Kalibrert sannsynlighet',
      def: '<p>En predikert sannsynlighet som faktisk stemmer med frekvensen i virkeligheten (av de som får 0.8, overlever 80 %). Naïv Bayes gir ikke kalibrerte sannsynligheter, men rangeringen mellom klasser kan likevel være riktig.</p>',
      more: LR + '#bayes'
    },
    'simultanfordeling': {
      term: 'Simultanfordeling',
      def: '<p>Den felles sannsynlighetsfordelingen over flere features samtidig, f.eks. p(Sex, Age, Pclass | Survived). Krever mange datapunkter å estimere, og antall nødvendige punkter vokser eksponentielt med antall features.</p>',
      more: LR + '#avhengige-features'
    },
    'uavhengige-features': {
      term: 'Uavhengige features',
      def: '<p>Features der verdien til den ene ikke sier noe om verdien til den andre. Da kan simultanfordelingen skrives som et produkt av enkeltfordelinger. I Titanic-dataene er f.eks. Pclass og Sex <em>ikke</em> uavhengige.</p>',
      more: LR + '#avhengige-features'
    },
    'dimensjonsforbannelsen': {
      term: 'Dimensjonsforbannelsen',
      alias: 'curse of dimensionality',
      def: '<p>Antall datapunkter som trengs for å estimere en fordeling vokser eksponentielt med antall dimensjoner (features). Med 10 bins per akse og 10 punkter per bin trengs 10<sup>d+1</sup> punkter; for MNIST (d = 784) er det flere enn atomer i universet.</p>',
      more: LR + '#dimensjonsforbannelsen'
    },
    'mnist': {
      term: 'MNIST',
      def: '<p>Et mye brukt datasett med håndskrevne sifre i sort-hvitt, 28 × 28 = 784 piksler per bilde. Brukes i notatene som eksempel på høy dimensjonalitet.</p>',
      more: LR + '#dimensjonsforbannelsen'
    },
    'ubalanserte-data': {
      term: 'Ubalanserte data',
      alias: 'skjevfordeling',
      def: '<p>Et datasett der én klasse har mange færre datapunkter enn den andre. Modellen belønnes da for å predikere majoritetsklassen, og får høy accuracy uten å være nyttig. Recall på minoritetsklassen blir lav.</p>',
      more: LR + '#ubalanserte-data'
    },
    'prior-shift': {
      term: 'Prior probability shift',
      def: '<p>Når modellens prediksjon domineres av klassefordelingen p(C<sub>k</sub>) i stedet for av informasjonen i feature-verdiene. Skjer typisk ved sterkt ubalanserte data.</p>',
      more: LR + '#ubalanserte-data'
    },
    'undersampling': {
      term: 'Undersampling',
      def: '<p>Å trekke like mange datapunkter fra den overrepresenterte klassen som det finnes i den underrepresenterte. Gir balanserte klasser, men potensielt få datapunkter totalt, og risiko for underfit.</p>',
      more: LR + '#ubalanserte-data'
    },
    'oversampling': {
      term: 'Oversampling',
      def: '<p>Å kopiere instanser fra den underrepresenterte klassen til klassene er like store. Gir balanserte klasser, men mange duplikater, og risiko for overfit.</p>',
      more: LR + '#ubalanserte-data'
    },
    'underfit': {
      term: 'Underfit (undertilpasning)',
      def: '<p>Modellen er for enkel eller har fått for lite data til å fange mønstrene, og gjør det dårlig både på trenings- og testdata. Tegn: høyt tap på både trenings- og valideringsdata. Svarer til høy bias i bias–varians-dekomposisjonen. Kan også skje ved undersampling.</p>',
      more: RG + '#validering'
    },
    'overfit': {
      term: 'Overfit (overtilpasning)',
      def: '<p>Modellen har kapasitet til å tilpasse seg treningsdataene så godt (inkludert støy og duplikater) at det går utover generaliseringen. Tegn: treningstapet synker mens valideringstapet flater ut eller stiger. Svarer til høy varians. Kan skje ved for komplekse modeller, for dype trær eller oversampling.</p>',
      more: RG + '#validering'
    },
    'vektet-tapsfunksjon': {
      term: 'Vektet tapsfunksjon',
      def: '<p>Cross-entropy der de to leddene får hver sin vekt: ℒ = −w<sub>1</sub> y ln y<sub>pred</sub> − w<sub>0</sub>(1 − y) ln(1 − y<sub>pred</sub>). En høyere vekt på en klasse gjør feil på den klassen dyrere, slik at modellen prioriterer den.</p>',
      more: LR + '#ubalanserte-data'
    },

    /* ── 1.3 Beslutningstrær ── */
    'beslutningstre': {
      term: 'Beslutningstre',
      def: '<p>En modell som klassifiserer ved å splitte dataene i noder etter enkle kriterier på én feature om gangen, til man når en løvnode med en prediksjon. Bygges grådig: velg alltid splitten som reduserer usikkerheten mest.</p>',
      more: BT + '#noder'
    },
    'rotnode': {
      term: 'Rotnode',
      def: '<p>Starten på treet, der dataene med alle features kommer inn. Har et splitt-kriterium som sender hvert datapunkt videre til en av barnenodene.</p>',
      more: BT + '#noder'
    },
    'beslutningsnode': {
      term: 'Beslutningsnode',
      def: '<p>Enhver node under rotnoden som har ett eller flere splitt-kriterier. Splitter dataene videre på én feature.</p>',
      more: BT + '#noder'
    },
    'lovnode': {
      term: 'Løvnode',
      alias: 'leaf node',
      def: '<p>Nederste nivå i treet: en node som ikke splitter, men inneholder den predikerte verdien for datapunkter som havner der. Har den instanser fra flere klasser, returneres typisk den dominante klassen.</p>',
      more: BT + '#noder'
    },
    'trestump': {
      term: 'Trestump',
      alias: 'tree stump',
      def: '<p>Den minste byggeklossen i et beslutningstre: én rotnode og <em>n</em> løvnoder, for <em>n</em> mulige utfall. Vi holder oss til <em>n</em> = 2. Et helt tre er stumper satt sammen.</p>',
      more: BT + '#noder'
    },
    'splitt-kriterium': {
      term: 'Splitt-kriterium',
      def: '<p>En feature og en verdi (f.eks. «antall bananer > 2?») som deler dataene i to. Vi velger det kriteriet som reduserer usikkerheten mest, målt med log loss, Gini-urenhet eller entropi.</p>',
      more: BT + '#noder'
    },
    'gini': {
      term: 'Gini-urenhet',
      alias: 'Gini impurity',
      def: '<p>Gini(D) = 1 − Σ p<sub>i</sub><sup>2</sup>: sannsynligheten for at et tilfeldig datapunkt feilklassifiseres om det får et tilfeldig label i henhold til klassefordelingen. 0 når alle er samme klasse, 0.5 ved 50/50 (binært). Raskere å beregne enn entropi og standard i scikit-learn.</p>',
      more: BT + '#gini'
    },
    'informasjonsgevinst': {
      term: 'Informasjonsgevinst (ΔI)',
      def: '<p>Entropien før en splitt minus den forventede (vektede) entropien etter splitten. Vi velger den splitten som gir størst ΔI.</p>',
      more: BT + '#entropi'
    },
    'log-loss': {
      term: 'Log loss',
      def: '<p>Cross-entropy loss brukt som splitt-kriterium i beslutningstrær. Samme uttrykk som tapsfunksjonen for logistisk regresjon (binært) og den generaliserte versjonen for flere klasser.</p>',
      more: BT + '#noder'
    },
    'maks-dybde': {
      term: 'Maks dybde',
      alias: 'max_depth',
      def: '<p>En hyperparameter som stopper treet fra å splitte videre når det har nådd et gitt antall nivåer. Ett av tre stoppkriterier; begrenser hvor komplekst treet kan bli.</p>',
      more: BT + '#bygge'
    },
    'dominant-klasse': {
      term: 'Dominant klasse',
      def: '<p>Klassen med flest treningsdatapunkter i en løvnode. Den vanligste måten å bestemme hva en «uren» løvnode skal predikere.</p>',
      more: BT + '#bygge'
    },
    'sklearn': {
      term: 'scikit-learn (sklearn)',
      def: '<p>Python-biblioteket vi bruker til preprosessering (<code>LabelEncoder</code>, <code>MinMaxScaler</code>), datadeling (<code>train_test_split</code>) og ferdige modeller som <code>DecisionTreeClassifier</code>.</p>',
      more: BT + '#bygge'
    },
    'palmer-penguins': {
      term: 'Palmer Penguins',
      def: '<p>Et populært datasett med målinger av pingviner (bl.a. flipper length og body mass). Brukes i forelesningen som eksempel på et beslutningstre som predikerer pingvinkjønn.</p>',
      more: BT + '#bygge'
    },
    /* ── 1.4 Regresjon ── */
    'regresjon': {
      term: 'Regresjon',
      def: '<p>Veiledet læring der target er en <em>kontinuerlig</em> verdi i stedet for en klasse: skåren til en film, verdien til en bolig, sykefravær. Generelt estimering av én eller flere kontinuerlige verdier.</p>',
      more: RG + '#data-tap'
    },
    'lineaer-regresjonsmodell': {
      term: 'Lineær regresjonsmodell',
      alias: 'β-notasjon',
      def: '<p><em>f</em>(<em>x</em>) = β<sub>0</sub> + β<sub>1</sub>x<sub>1</sub> + … + β<sub>n</sub>x<sub>n</sub>: én parameter per feature pluss bias β<sub>0</sub>, altså <em>n</em> + 1 parametre. Samme form som <strong>w</strong>·<strong>x</strong> + <em>b</em> i logistisk regresjon, men uten sigmoid og med MSE som tapsfunksjon.</p>',
      more: RG + '#data-tap'
    },
    'beta0': {
      term: 'Bias-parameteren β<sub>0</sub>',
      alias: 'konstantledd, intercept',
      def: '<p>Der regresjonslinjen krysser <em>y</em>-aksen, funksjonsverdien i <em>x</em> = 0. Forflytter alle prediksjoner med en konstant: en «baseline» uten kjennskap til feature-verdiene. Har ingenting med bias til en læringsalgoritme å gjøre.</p>',
      more: RG + '#data-tap'
    },
    'stigningstall': {
      term: 'Stigningstall β<sub>1</sub>',
      def: '<p>Hvor mye <em>f</em>(<em>x</em>) endrer seg per enhet <em>x</em><sub>1</sub>. For lav β<sub>1</sub> gir negativ ∂ℒ/∂β<sub>1</sub>, for høy gir positiv, så gradient descent retter den opp.</p>',
      more: RG + '#data-tap'
    },
    'mse': {
      term: 'Mean squared error (MSE)',
      def: '<p>Den vanligste tapsfunksjonen for regresjon: gjennomsnittet av kvadrerte avvik mellom target og prediksjon, ofte med en faktor ½ som forsvinner under derivasjon. Har enheten til <em>y</em> i annen, så «høy» MSE må alltid tolkes relativt til skalaen på targets.</p>',
      more: RG + '#data-tap'
    },
    'gaussisk-stoy': {
      term: 'Gaussisk støy',
      alias: 'normalfordelt støy',
      def: '<p>Tilfeldige avvik trukket fra en normalfordeling med forventningsverdi μ (typisk 0) og standardavvik σ, lagt til den underliggende funksjonen når vi genererer eller observerer data.</p>',
      more: RG + '#polynom'
    },
    'feature-engineering': {
      term: 'Feature engineering',
      def: '<p>Alle operasjoner vi utfører på datasettet før modellering: feature selection, feature preprocessing og feature extraction. Å lage <em>x</em><sup>2</sup> fra <em>x</em> for å tilpasse en parabel med lineær regresjon er et eksempel. Kan gjøres i alle tilfeller, ikke bare veiledet læring eller regresjon.</p>',
      more: RG + '#polynom'
    },
    'feature-selection': {
      term: 'Feature selection',
      def: '<p>Utvelgelse av hvilke features som skal brukes, som da vi valgte å ikke ta med «Name» i Titanic-oppgaven.</p>',
      more: RG + '#polynom'
    },
    'feature-preprocessing': {
      term: 'Feature preprocessing',
      def: '<p>Preprosessering av features, som da vi skalerte «Age» til intervallet (0, 1) for Titanic-dataene.</p>',
      more: RG + '#polynom'
    },
    'feature-extraction': {
      term: 'Feature extraction',
      def: '<p>Utvinning av nye features fra eksisterende, som <em>x</em><sup>2</sup> fra <em>x</em>, eller kombinasjoner av flere features.</p>',
      more: RG + '#polynom'
    },
    'polynomialfeatures': {
      term: 'PolynomialFeatures',
      def: '<p>sklearn-transformasjon som genererer polynomiske features opp til en angitt grad. Skal tilpasses (<code>.fit</code>) på treningsdataene alene og deretter anvendes på testdataene, slik at analysen er uavhengig av testsettet.</p>',
      more: RG + '#polynom'
    },
    'polynomisk-regresjon': {
      term: 'Polynomisk regresjon',
      def: '<p>Lineær regresjon på genererte features <em>x</em>, <em>x</em><sup>2</sup>, …, <em>x</em><sup>M</sup>. Modellen er fortsatt lineær i parametrene β, det er features som er transformert. Graden <em>M</em> er en hyperparameter.</p>',
      more: RG + '#polynom'
    },
    'modellkompleksitet': {
      term: 'Modellkompleksitet',
      def: '<p>Hvor fleksibel modellen er, f.eks. polynomgrad eller tredybde. For lav kompleksitet gir underfit (høy bias), for høy gir overfit (høy varians). Mer kompleks gir ikke nødvendigvis lavere tap på nye data.</p>',
      more: RG + '#polynom'
    },
    'valideringsdata': {
      term: 'Valideringsdata',
      def: '<p>Den tredje delen av datasettet: brukes til å monitorere modellen under trening og justere hyperparametrene, slik at testdataene forblir urørt til den endelige rapporten. Lages ved å kjøre <code>train_test_split</code> to ganger.</p>',
      more: RG + '#validering'
    },
    'sgd': {
      term: 'Stochastic gradient descent (SGD)',
      alias: 'SGDRegressor',
      def: '<p>Gradient descent der hvert steg bruker ett datapunkt eller en liten gruppe i stedet for hele datasettet. <code>SGDRegressor</code> i sklearn har <code>partial_fit</code>, som lar oss trene én epoke om gangen og måle tap på valideringsdata underveis.</p>',
      more: RG + '#validering'
    },
    'early-stopping': {
      term: 'Early stopping',
      def: '<p>Et kriterium som stanser treningen når tapet på valideringsdataene ikke har minket innenfor en toleranse i løpet av de siste <em>n</em> epokene. Da trenger vi ikke bestemme antall epoker på forhånd.</p>',
      more: RG + '#validering'
    },
    'kryssvalidering': {
      term: 'Kryssvalidering',
      alias: 'cross validation',
      def: '<p>Å gjenta trening og testing på flere ulike inndelinger av datasettet, og bruke gjennomsnittet av testresultatene som estimat. Håndterer variansen som følger av én tilfeldig splitt, og lar oss bruke alle data til trening til sammen.</p>',
      more: RG + '#kryssvalidering'
    },
    'loocv': {
      term: 'Leave-one-out cross validation (LOOCV)',
      def: '<p>Kryssvalidering der ett datapunkt om gangen brukes til testing og de <em>n</em> − 1 andre til trening, gjentatt <em>n</em> ganger. Beste mulige estimat siden alle punkter brukes, men ressurskrevende: modellen tilpasses <em>n</em> ganger.</p>',
      more: RG + '#kryssvalidering'
    },
    'k-fold': {
      term: 'k-fold cross validation',
      def: '<p>Datasettet deles i <em>k</em> deler; i hver av <em>k</em> iterasjoner er én del testdata og resten treningsdata. Modellen tilpasses <em>k</em> ganger, og de <em>k</em> testresultatene gir estimatet. Mer utbredt enn LOOCV fordi det er billigere.</p>',
      more: RG + '#kryssvalidering'
    },
    'estimator': {
      term: 'Estimator',
      def: '<p>Læringsalgoritmen sett som en prosedyre som lager en modell fra et datasett. For logistisk og lineær regresjon (og nevrale nettverk) er gradient descent estimatoren. En estimator har både bias og varians over ulike trekninger av data.</p>',
      more: RG + '#bias-varians'
    },
    'irredusibel-stoy': {
      term: 'Irredusibelt støy (ε, σ²)',
      def: '<p>Avviket mellom den sanne funksjonen <em>F</em>(<em>x</em>) og observert <em>y</em>: måleapparat, eksterne faktorer. Antas normalfordelt med forventning 0 og varians σ². Ingen modell kan fjerne det; det er gulvet for forventet tap.</p>',
      more: RG + '#bias-varians'
    },
    'forventningsverdi': {
      term: 'Forventningsverdi E[·]',
      def: '<p>Gjennomsnittet av en tilfeldig variabel over dens fordeling. I bias–varians-analysen tas forventningen over ulike trekninger av treningsdatasettet 𝒟. Regneregler: E[c] = c, E[cX] = cE[X], E[X + Y] = E[X] + E[Y], og E[XY] = E[X]E[Y] for uavhengige X, Y.</p>',
      more: RG + '#bias-varians'
    },
    'bias-estimator': {
      term: 'Bias (til en læringsalgoritme)',
      def: '<p>E<sub>𝒟</sub>[<em>f</em>(<em>x</em>; 𝒟)] − <em>F</em>(<em>x</em>): det systematiske avviket mellom modellene algoritmen lager over mange treningsdatasett og den sanne verdien. En tendens til å alltid bomme i samme retning. Høy bias tyder på at modellen ikke klarer å fange sammenhengene (underfit). Har ingenting med konstantleddet β<sub>0</sub> å gjøre.</p>',
      more: RG + '#bias-varians'
    },
    'varians-estimator': {
      term: 'Varians (til en læringsalgoritme)',
      def: '<p>E<sub>𝒟</sub>[(E<sub>𝒟</sub>[<em>f</em>] − <em>f</em>(<em>x</em>; 𝒟))²]: hvor mye modellen varierer rundt sitt eget gjennomsnitt fra datasett til datasett. Høy varians betyr at algoritmen er for sensitiv til fluktuasjoner og støy i treningsdataene (overfit). Typisk for modeller med mange parametre.</p>',
      more: RG + '#bias-varians'
    },
    'bias-variance-tradeoff': {
      term: 'Bias–variance tradeoff',
      alias: 'bias–variance-dilemma',
      def: '<p>Forventet tap på et nytt datapunkt kan dekomponeres som Bias² + Varians + σ². Å redusere den ene komponenten øker typisk den andre: enkle modeller har høy bias og lav varians, komplekse modeller lav bias og høy varians. Målet er balansen som generaliserer best.</p>',
      more: RG + '#bias-varians'
    },
    'regresjonstre': {
      term: 'Regresjonstre',
      alias: 'DecisionTreeRegressor',
      def: '<p>Et beslutningstre brukt til regresjon: hver splitt deler datarommet i regioner, og løvnoden predikerer én verdi (gjennomsnittet av targets) per region. Godt egnet til trappeformede data. Uten begrensning på dybde overtilpasser det; dybden er hyperparameteren.</p>',
      more: RG + '#regresjonstraer'
    },
    'tolkbarhet': {
      term: 'Tolkbarhet',
      def: '<p>At mennesker kan forstå hvordan modellen kommer fram til prediksjonen. Regresjonsmodeller: størrelsen på parametrene angir viktigheten av hver variabel. Trær: splittkriteriene er forståelige, og tidlige splitter er viktigere enn sene. Gjelder ikke nevrale nettverk.</p>',
      more: RG + '#regresjonstraer'
    }    ,
    /* ── Eksamensbegreper utenfor notatene (1A/1C) ── */
    'batch-size': {
      term: 'Batch size',
      alias: 'minibatch',
      def: '<p>Antall treningsdatapunkter som brukes per iterasjon (parameteroppdatering) av treningen. Koden i notatene bruker hele datasettet per oppdatering; i praksis deles dataene i batcher. Iterasjoner per epoke = antall datapunkter / batch size. Ikke i notatene, men spurt på eksamen 2024.</p>',
      more: LR + '#trening'
    },
    'iterasjon': {
      term: 'Iterasjon',
      def: '<p>Én parameteroppdatering med gradient descent, basert på én batch. En epoke består av (antall datapunkter / batch size) iterasjoner. 10 000 datapunkter og batch size 500 gir 20 iterasjoner per epoke.</p>',
      more: LR + '#trening'
    },
    'induktivt-bias': {
      term: 'Induktivt bias',
      def: '<p>Antakelsene en modell gjør for å kunne generalisere fra treningsdata til usette data: lineær regresjon antar en rett linje uten vekselvirkninger, trær antar akseparallelle regioner, naïv Bayes antar uavhengige features. Uten slike antakelser er generalisering umulig. Ikke i notatene, men spurt på eksamen 2024.</p>',
      more: RG + '#bias-varians'
    },

    /* ── 1.5 Ensemble-modeller ── */
    'ensemble': {
      term: 'Ensemble',
      alias: 'ensemble learning',
      def: '<p>En samling modeller som kombineres slik at de kompenserer for hverandres svakheter. Som en gruppe eksperter der gruppens beslutning tar alle vurderingene med, men forkaster den som ikke deles av majoriteten. Kan settes sammen parallelt, sekvensielt eller hierarkisk.</p>',
      more: EN + '#ensemble'
    },
    'parallelt-ensemble': {
      term: 'Parallelt ensemble',
      def: '<p>Flere modeller trenes uavhengig av hverandre, og prediksjonene kombineres (aggregeres) til én. Diversitet fra ulike modelltyper, hyperparametre, random seeds, feature engineering eller utvalg av treningsdata. Bagging og random forest.</p>',
      more: EN + '#ensemble'
    },
    'sekvensielt-ensemble': {
      term: 'Sekvensielt ensemble',
      def: '<p>Modellene kommer etter hverandre, og hver modell opphever feilen begått av den foregående. Rekken kommer til sammen frem til én prediksjon. Boosting (AdaBoost, gradient boosting).</p>',
      more: EN + '#ensemble'
    },
    'hierarkisk-ensemble': {
      term: 'Hierarkisk ensemble',
      def: '<p>En eller flere modeller brukes til å kombinere prediksjonen fra en foregående parallellkombinasjon av flere modeller.</p>',
      more: EN + '#ensemble'
    },
    'inferens': {
      term: 'Inferens',
      def: '<p>Å bruke en trent modell til å gjøre prediksjoner. Skillet mellom trening og inferens er viktig, og særlig synlig i ensemble learning, der treningen kan være sekvensiell mens inferensen kjører hele ensemblet på ett datapunkt.</p>',
      more: EN + '#ensemble'
    },
    'aggregering': {
      term: 'Aggregering',
      def: '<p>Å slå sammen enkeltmodellenes prediksjoner til ensemblets prediksjon. Regresjon: gjennomsnittet. Klassifisering: klassen flertallet predikerer (direkte avstemning), eller en vektet avstemning.</p>',
      more: EN + '#bagging'
    },
    'bootstrapping': {
      term: 'Bootstrapping',
      alias: 'bootstrap',
      def: '<p>Å trekke datapunkter fra det samme datasettet <em>med tilbakelegging</em>, slik at samme punkt kan komme flere ganger, og slik lage flere ulike datasett av det ene vi har. Gir en fordeling av estimater, altså et mål på spredning, uten å samle mer data. Ikke det samme som kryssvalidering, som deler i ikke-overlappende delsett.</p>',
      more: EN + '#bagging'
    },
    'bagging': {
      term: 'Bagging',
      def: '<p><strong>B</strong>ootstrap + <strong>agg</strong>reger<strong>ing</strong>: tren én modell per bootstrap-trekning av treningsdataene, og aggreger prediksjonene ved gjennomsnitt eller avstemning. Modellene trenes på ulike data og blir forskjellige, og ensemblet får lavere varians.</p>',
      more: EN + '#bagging'
    },
    'random-forest': {
      term: 'Random forest',
      alias: 'tilfeldig skog',
      def: '<p>Bagging med beslutningstrær (eventuelt stumper). Trærne må være diverse og uavhengige: hvert tre trenes på sin bootstrap-trekning og på et tilfeldig utvalg av features, så korrelasjonen mellom trærne reduseres. Prediksjonene aggregeres.</p>',
      more: EN + '#random-forest'
    },
    'boosting': {
      term: 'Boosting',
      def: '<p>Algoritmer som iterativt trener svake modeller (for eksempel trestumper) og kombinerer dem sekvensielt til en sterk modell. Feilene begått av én modell gjør den påfølgende bedre («booster» den). AdaBoost og gradient boosting.</p>',
      more: EN + '#boosting'
    },
    'svak-modell': {
      term: 'Svak modell',
      alias: 'weak learner',
      def: '<p>En modell hvis prediksjoner bare er svakt korrelert med target, for eksempel en trestump. En sterk modell er vilkårlig sterkt korrelert med target. Boosting setter sammen svake modeller til en sterk.</p>',
      more: EN + '#boosting'
    },
    'adaboost': {
      term: 'AdaBoost',
      def: '<p>Boosting basert på vekting av datapunkter: alle starter med samme vekt, en modell trenes, og vektene økes for datapunktene modellen har størst tap på (feilklassifiserte), før neste modell trenes.</p>',
      more: EN + '#boosting'
    },
    'gradient-boosting': {
      term: 'Gradient boosting',
      alias: 'XGBoost, LightGBM, CatBoost',
      def: '<p>Boosting der hver ny modell predikerer pseudo-residualene, forskjellen mellom targets og ensemblets nåværende prediksjon: <code>new_ensemble = previous_ensemble - learning_rate * new_tree</code>. Gradient descent i rommet av trær, med gradient −(label − prediction).</p>',
      more: EN + '#boosting'
    },
    'pseudo-residual': {
      term: 'Pseudo-residualer',
      def: '<p>Forskjellen mellom targets og den forrige modellens (ensemblets) prediksjon, y − F(x). Det hvert nytt tre i gradient boosting tilpasses, slik at det modellerer den gjenværende feilen.</p>',
      more: EN + '#boosting'
    },
    'tabulaere-data': {
      term: 'Tabulære data',
      def: '<p>Data i tabellform med rader (datapunkter) og kolonner (features), den typen data dette kurset bruker. På tabulære data er det en god regel å alltid bruke en ensemble-modell som referanseverdi for hvor godt en modell kan gjøre det.</p>',
      more: EN + '#boosting'
    },

    /* ── 2 Nevrale nettverk ── */
    'parametrisk': {
      term: 'Parametrisk modellering',
      def: '<p>Funksjonsformen til f er gitt, og treningen tilpasser parametrene i funksjonen. Lineær og logistisk regresjon, og nevrale nettverk.</p>',
      more: NN + '#intro'
    },
    'ikke-parametrisk': {
      term: 'Ikke-parametrisk modellering',
      def: '<p>Formen til f er ikke gitt; treningen bygger modellen, for eksempel et tre med splittkriterier som deler opp datarommet. Dataene flyter gjennom uten å transformeres.</p>',
      more: NN + '#intro'
    },
    'nevralt-nettverk': {
      term: 'Nevralt nettverk',
      def: '<p>En parametrisk, ikke-lineær modell bygget av lag med noder, der hvert lag gjør en ikke-lineær transformasjon av dataene: a = g(W a). Trenes med gradient descent på en deriverbar tapsfunksjon, som logistisk regresjon.</p>',
      more: NN + '#arkitektur'
    },
    'perceptron': {
      term: 'Perceptron',
      alias: 'perseptron',
      def: '<p>Forgjengeren til moderne nevrale nettverk: én eller flere noder (TLU-er) som gir binær output f(x) = H(wx + b). Trenes med regelen w<sub>i</sub> ← w<sub>i</sub> + η(y<sub>i</sub> − ŷ<sub>i</sub>) siden Heaviside ikke kan deriveres. Kan lære AND, OR og NOT, men ikke XOR.</p>',
      more: NN + '#perceptron'
    },
    'node': {
      term: 'Node',
      alias: 'nevron',
      def: '<p>En beregningsenhet i et nevralt nettverk: vektet sum av inputene pluss bias, sendt gjennom en aktiveringsfunksjon. Noder i samme lag mottar ikke input fra hverandre.</p>',
      more: NN + '#perceptron'
    },
    'tlu': {
      term: 'Threshold logic unit (TLU)',
      def: '<p>Den opprinnelige noden i perceptronet: aktiv (output 1) hvis wx + b ≥ 0, ellers ikke aktiv (output 0). Heaviside-funksjonen som aktiveringsfunksjon.</p>',
      more: NN + '#perceptron'
    },
    'heaviside': {
      term: 'Heaviside-funksjonen',
      alias: 'stegfunksjon, step function',
      def: '<p>H(z) = 0 for z &lt; 0 og 1 for z ≥ 0. Den deriverte er 0 overalt og udefinert i ett punkt, så en tapsfunksjon som inneholder H kan ikke deriveres. Derfor kan ikke perceptronet trenes med gradient descent, og derfor byttes H mot sigmoid i moderne nettverk.</p>',
      more: NN + '#perceptron'
    },
    'vektmatrise': {
      term: 'Vektmatrise',
      def: '<p>Når et lag har flere noder, er vektene en matrise w<sub>ij</sub> (input i til node j) i stedet for en vektor. To features og tre klasser gir en 3 × 2-matrise (6 vekter) og 3 bias. Oppdateringen blir w<sub>ij</sub> ← w<sub>ij</sub> + η(y<sub>j</sub> − ŷ<sub>j</sub>)x<sub>i</sub>.</p>',
      more: NN + '#perceptron'
    },
    'logiske-operasjoner': {
      term: 'Logiske operasjoner',
      def: '<p>NOT, AND og OR kan gjøres av ett perceptron med riktige vekter: NOT (w, b) = (−1, 0.5); AND (1, 1, −1.5); OR (1, 1, −0.5). XOR krever to lag: OR og NAND i første, AND i andre.</p>',
      more: NN + '#logikk'
    },
    'lineaert-separerbar': {
      term: 'Lineært separerbar',
      def: '<p>At klassene kan skilles av én rett linje (et hyperplan) w·x + b = 0. Det er alt ett perceptron kan uttrykke. XOR er ikke lineært separerbart, og krever et skjult lag.</p>',
      more: NN + '#logikk'
    },
    'softmax': {
      term: 'Softmax',
      def: '<p>Aktiveringsfunksjon i output-laget for ikke-binær klassifisering: softmax(x)<sub>i</sub> = e<sup>x<sub>i</sub></sup> / Σ<sub>j</sub> e<sup>x<sub>j</sub></sup>. Sikrer at aktiveringene summerer til 1, så hver output-node (én per klasse) er predikert tilhørighet til sin klasse.</p>',
      more: NN + '#aktivering'
    },
    'relu': {
      term: 'ReLU',
      alias: 'rectified linear unit',
      def: '<p>ReLU(x) = max(0, x). Aktiveringsfunksjonen vi bruker i de skjulte lagene i dette kurset. Deriverbar overalt unntatt i 0, og billig å regne ut.</p>',
      more: NN + '#aktivering'
    },
    'mlp': {
      term: 'Multi layer perceptron (MLP)',
      alias: 'fully connected feed-forward nettverk',
      def: '<p>Nevralt nettverk med flere lag mellom input og output, der alle noder i et lag er koblet til alle noder i nabolagene (fully connected) og informasjon bare går fremover (feed-forward). Sigmoid/softmax ut for klassifisering, lineær ut for regresjon, ReLU i skjulte lag.</p>',
      more: NN + '#aktivering'
    },
    'arkitektur': {
      term: 'Arkitektur',
      def: '<p>Hvordan nodene i et nevralt nettverk er satt sammen: antall lag, noder per lag, forbindelser og aktiveringsfunksjoner. Konvolusjonslag for bilder og transformer-blokker for sekvenser er andre arkitekturer enn MLP.</p>',
      more: NN + '#arkitektur'
    },
    'lag': {
      term: 'Lag',
      alias: 'layer',
      def: '<p>Noder stablet i høyden som ikke mottar input fra hverandre. Informasjon går bare mellom noder i ulike lag. Hvert lag transformerer dataene til et nytt rom med like mange dimensjoner som laget har noder.</p>',
      more: NN + '#arkitektur'
    },
    'input-lag': {
      term: 'Input-lag',
      def: '<p>Det første laget, som mottar og sender data inn i nettverket. Må ha samme antall noder som dataene har features.</p>',
      more: NN + '#arkitektur'
    },
    'skjult-lag': {
      term: 'Skjult lag',
      alias: 'indre lag, hidden layer',
      def: '<p>Alle lagene mellom input- og output-laget. Vi står fritt til å velge antall lag, noder og aktiveringsfunksjoner (her ReLU).</p>',
      more: NN + '#arkitektur'
    },
    'output-lag': {
      term: 'Output-lag',
      def: '<p>Det siste laget, som representerer prediksjonen. I veiledet læring må det ha samme antall noder som targets: én node med sigmoid for binær klassifisering, én per klasse med softmax for flere klasser, lineær for regresjon.</p>',
      more: NN + '#arkitektur'
    },
    'fully-connected': {
      term: 'Fully connected',
      def: '<p>At alle nodene i hvert lag er koblet til alle nodene i det foregående og neste laget. Et lag med n inn og m ut har n · m vekter og m bias.</p>',
      more: NN + '#arkitektur'
    },
    'feed-forward': {
      term: 'Feed-forward',
      def: '<p>At informasjon bare sendes fremover i nettverket, fra input mot output, uten løkker tilbake.</p>',
      more: NN + '#arkitektur'
    },
    'aktivering': {
      term: 'Aktivering',
      def: '<p>Verdien a<sup>l</sup><sub>j</sub> = g(Σ<sub>i</sub> w<sup>l</sup><sub>ij</sub> a<sup>l−1</sup><sub>i</sub>) en node sender videre: den vektede summen av forrige lags aktiveringer, gjennom aktiveringsfunksjonen g. For input-laget er a<sup>0</sup><sub>i</sub> = x<sub>i</sub>. På matriseform for et helt lag: a = g(W a<sup>l−1</sup>).</p>',
      more: NN + '#arkitektur'
    },
    'backpropagation': {
      term: 'Backpropagation',
      def: '<p>Algoritmen som beregner hvordan hver vekt i nettverket påvirker tapet, ved å bruke kjerneregelen bakover fra output mot input, slik at gradient descent kan justere vektene for å minimere feilen. Kommer i notatene senere; spurt på eksamen både 2024 og 2025.</p>',
      more: NN + '#arkitektur'
    }
  };
})();
