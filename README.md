# JavaScript – Logical Operators

## Klasseøvelse

I denne klasseøvelse arbejder vi videre med **JavaScript functions og conditionals** og introducerer samtidig **logical operators** samt forskellen på `let` og `const`.

Øvelsen gennemføres sammen på holdet, hvor underviseren gennemgår og skriver koden på storskærm. Du arbejder samtidig med projektet på din egen computer og følger øvelsen trin for trin.

Du får udleveret et lille projekt, hvor dele af koden allerede er skrevet. Undervejs færdiggør vi koden med udgangspunkt i kommentarerne i filerne.

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne øvelse skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Arbejd med øvelsen
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug det repository-navn, som din underviser har angivet.

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-logical-operators-discount
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-logical-operators-discount/
│
├── index.html
├── js/
│   └── script.js
└── README.md
```

---

# Øvelsen

I øvelsen arbejder vi med disse filer:

- `index.html`
- `js/script.js`

Læs kommentarerne i koden, inden du begynder at skrive.

---

## 4. Forbind JavaScript-filen med HTML-filen

Åbn:

```text
index.html
```

I filen finder du denne kommentar:

```html
<!-- Husk fra dag 1: skriv scriptet, der linker til js/script.js, herunder -->
```

Vi skal forbinde JavaScript-filen med HTML-dokumentet.

JavaScript-filen ligger i mappen:

```text
js/
```

og hedder:

```text
script.js
```

> **Vær opmærksom på filstien:** `script.js` ligger ikke i samme mappe som `index.html`, men i undermappen `js`.

Skriv det korrekte `<script>`-element på det angivne sted.

Gem derefter filen.

---

## 5. Åbn `js/script.js`

Start med at skrive:

```js
"use strict";
```

I filen finder du derefter funktionen:

```js
tjekRabat(brand, price)
```

Funktionen modtager to værdier:

- `brand` – bilmærket
- `price` – bilens pris

I øvelsen bygger vi videre på `if` og `else` og arbejder samtidig med:

```text
===
||
&&
let
```

---

## 6. Arbejd med `let` og `finalPrice`

I funktionen er denne variabel allerede oprettet:

```js
let finalPrice = price;
```

Vi bruger `let`, fordi værdien i `finalPrice` kan ændre sig, hvis bilen er omfattet af rabatten.

> Til sammenligning bruger vi `const`, når en værdi ikke skal ændres.

---

## 7. Brug logical operators i en `if/else`-struktur

Skriv selv `if/else`-strukturen inde i funktionen.

I øvelsen arbejder vi med:

- `===` – tjekker, om to værdier er helt ens
- `||` – betyder **eller**
- `&&` – betyder **og**

Rabatten gælder, hvis:

- bilmærket er **Volkswagen eller Skoda**
- **og** prisen er mindre end **300.000 kr.**

Hvis begge dele samlet set er opfyldt:

- træk **20.000 kr.** fra `finalPrice`
- udskriv mærket og den nye pris i Console

Hvis betingelsen ikke er opfyldt:

- behold den oprindelige pris
- udskriv mærket og prisen i Console

> Vær især opmærksom på, hvordan `||` og `&&` kombineres i den samme betingelse.

---

## 8. Test funktionen

I `script.js` findes allerede disse funktionskald:

```js
tjekRabat(`Volkswagen`, 250000);
tjekRabat(`Skoda`, 320000);
tjekRabat(`Tesla`, 200000);
```

Brug dem til at undersøge, hvordan funktionen reagerer på forskellige værdier.

Tænk blandt andet over:

- Hvilken bil opfylder hele betingelsen?
- Hvilken bil har det rigtige mærke, men en for høj pris?
- Hvilken bil har en lav nok pris, men det forkerte mærke?

---

## 9. Kontrollér resultatet i browseren

Åbn `index.html` med **Live Server**.

Åbn derefter browserens Developer Tools og gå til:

```text
Inspect → Console
```

Kontrollér, at de forskellige funktionskald giver det forventede resultat.

Hvis noget ikke virker:

1. Læs eventuelle fejlmeddelelser i Console.
2. Kontrollér syntaksen.
3. Kontrollér parenteser `{ }` og `( )`.
4. Kontrollér din `if/else`-struktur.
5. Kontrollér brugen af `===`, `||` og `&&`.
6. Gem filerne og test igen.

---

## 10. Prøv forskellen på `let` og `const`

Når øvelsen virker, skal du prøve følgende eksperiment:

Ret:

```js
let finalPrice = price;
```

til:

```js
const finalPrice = price;
```

Kør derefter koden igen og se, hvilken fejl du får i Console.

Overvej:

- Hvorfor opstår fejlen?
- Hvorfor kommer de efterfølgende funktionskald ikke med i outputtet, når fejlen opstår?

Når du har undersøgt fejlen, skal du ændre `const` tilbage til:

```js
let
```

---

## 11. Arbejd progressivt med commits

Du skal ikke vente med at committe, til hele øvelsen er færdig.

Lav commits løbende, når du har afsluttet en tydelig del af arbejdet.

Du kan eksempelvis lave commits efter:

```text
Forbundet JavaScript med index.html
```

```text
Tilføjet use strict
```

```text
Arbejdet med logical operators
```

```text
Færdiggjort tjekRabat-funktionen
```

```text
Testet let og const
```

Skriv selv korte og meningsfulde commit-beskeder, der beskriver, hvad du har ændret.

> Formålet er, at din Git-historik viser, hvordan du har arbejdet med øvelsen trin for trin.

---

## 12. Push til GitHub.com

Når du har lavet et commit i GitHub Desktop, skal du huske at klikke på:

**Push origin**

På den måde bliver dine ændringer sendt fra din computer til dit repository på GitHub.com.

Gå gerne ind på GitHub.com bagefter og kontrollér, at dine seneste commits kan ses.

---

# Når øvelsen er færdig

Kontrollér følgende:

- [ ] Jeg har oprettet mit eget repository med **Use this template**
- [ ] Jeg arbejder i mit eget repository
- [ ] Jeg har klonet projektet med GitHub Desktop
- [ ] Projektet er åbnet i Visual Studio Code
- [ ] `js/script.js` er forbundet korrekt med `index.html`
- [ ] Jeg har skrevet `"use strict";`
- [ ] Jeg har arbejdet med `let`
- [ ] Jeg har arbejdet med `===`
- [ ] Jeg har arbejdet med `||`
- [ ] Jeg har arbejdet med `&&`
- [ ] Jeg har færdiggjort funktionen `tjekRabat()`
- [ ] Jeg har testet koden i browserens Console
- [ ] Jeg har undersøgt forskellen på `let` og `const`
- [ ] Jeg har lavet løbende commits
- [ ] Jeg har pushet mine commits til GitHub.com

> **Husk:** Formålet er både at arbejde videre med **JavaScript functions og conditionals**, lære **logical operators** og træne workflowet mellem **GitHub.com → GitHub Desktop → Visual Studio Code → Commit → Push**.
