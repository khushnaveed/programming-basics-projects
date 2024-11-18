# Klasse

## Aufgabe 1

Erstelle eine Klasse namens `Product` mit den folgenden Eigenschaften:

- `type`: der Typ des Produkts, zum Beispiel T-Shirt, Jeans, Schuhe...
- `color`: ein String, der die Farbe des Produkts repräsentiert
- `price`: eine Zahl, die den Preis angibt

Die Klasse hat eine Methode:

- `description`: sie gibt einen String mit der Beschreibung des Produkts zurück, zum Beispiel `"Ein rotes T-Shirt, 19,99€"`.

Zum Beispiel:

```js
const shirt = new Product("shirt", "red", 9.99);

console.log(shirt.description()); // Ein rotes Shirt, 9,99€
```

## Aufgabe 2

Erstelle eine Klasse namens `Rectangle`

Die Klasse enthält 3 Eigenschaften:

- `width`
- `height`
- `color`

Die Klasse enthält die folgenden Methoden:

- `perimeter`: berechnet und gibt den Umfang des Rechtecks zurück
- `area`: berechnet und gibt die Fläche des Rechtecks zurück
- `description`: gibt einen String zurück, der das Rechteck beschreibt, indem die Farbe, Höhe und Breite angegeben werden. Zum Beispiel: `"Das ist ein grünes Rechteck, 3cm breit und 4cm hoch"`

Zum Beispiel:

```js
const rectangle1 = new Rectangle(3, 4, "green");

console.log(rectangle1.perimeter()); // 14
console.log(rectangle1.area()); // 12
console.log(rectangle1.description()); // Das ist ein grünes Rechteck, 3cm breit und 4cm hoch
```

## Aufgabe 3

Erstelle eine Klasse namens `Person`

Die Klasse sollte die folgenden Eigenschaften enthalten:

- `firstName`
- `lastName`
- `age`
- `city`

Die Klasse sollte die folgenden Methoden enthalten:

- `introduce()`: gibt einen String zurück wie `"Hallo, mein Name ist Rick Sanchez und ich lebe in Berlin"`
- `greet(person)`: nimmt einen String mit dem Namen einer Person als Eingabe und gibt eine Nachricht zurück wie `"Hallo Sophie, wie geht es dir?"`.

**Bonus**

Mache die `greet()` Methode so, dass sie jedes Mal einen zufälligen Gruß auswählt. Einige Optionen sind "Hi", "Hey", "Hallo", "Yo", "Guten Morgen"...

Zum Beispiel:

```js
const person1 = new Person("Thomas", "Thomson", 29, "New York");

console.log(person1.introduce()); // Hallo, mein Name ist Thomas Thomson und ich lebe in New York
console.log(person1.greet("John")); // Hi John, wie geht es dir?
console.log(person1.greet("Sophie")); // Hallo Sophie, wie geht es dir?
console.log(person1.greet("Mike")); // Hallo Mike, wie geht es dir?
```

## Aufgabe 4

Erstelle eine Klasse namens `Song`, um ein Lied zu repräsentieren.

Die Klasse sollte die folgenden Eigenschaften enthalten:

- `title`: Titel des Liedes
- `artist`: Künstler des Liedes
- `duration`: Dauer des Liedes, als String mit Minuten und Sekunden, so: `3:24`

Die Klasse hat die folgenden Methoden:

- `info()`: gibt einen String mit Informationen über das Lied zurück
- `durationInSeconds()`: gibt eine Zahl zurück, die die Dauer des Liedes in Sekunden angibt

Zum Beispiel:

```js
const song = new Song("Last Nite", "The Strokes", "3:13");

console.log(song.info()); // Last Nite von The Strokes (3:13)
console.log(song.durationInSeconds()); // 193
```

## Aufgabe 5

Erstelle eine Klasse namens `HTMLElement`, um ein generisches HTML-Element zu repräsentieren.

Die Klasse sollte die folgenden Eigenschaften enthalten:

- `element`: ein String, der das HTML-Element repräsentiert, zum Beispiel `div`, `span`, `h1`...
- `id`: ein String mit der ID des Elements.
  - Standardwert: `""`
- `classList`: ein Array von Strings, die die CSS-Klassen des Elements enthalten
  - Standardwert: `[]`

Die Klasse hat die folgenden Methoden:

- `addCSSClass(className)`: nimmt einen Klassennamen als Eingabe. Sie überprüft, ob die Klasse bereits im `classList`-Array enthalten ist. Wenn nicht, fügt sie sie am Ende des `classList`-Arrays hinzu
- `removeCSSClass(className)`: nimmt einen Klassennamen als Eingabe und entfernt die entsprechende Klasse aus dem `classList`-Array.
- `showHTML()`: gibt einen String aus, der das HTML-Element mit seiner `id` und seinen `class`es zeigt, zum Beispiel: `"<section id="about-section" class="page-section container alt-bg">...</section>"`

Zum Beispiel:

```js
const section = new HTMLElement("section", "about-section", []);
console.log(section.showHTML()); // <section id="about-section" class=""></section>

section.addCSSClass("page-section");
section.addCSSClass("container");
console.log(section.showHTML()); // <section id="about-section" class="page-section container"></section>

section.removeCSSClass("container");
console.log(section.showHTML()); // <section id="about-section" class="page-section"></section>

const div = new HTMLElement("div", "note", ["bg-yellow", "padding-5"]);
console.log(div.showHTML()); // <div id="note" class="bg-yellow padding-5"></div>
```
