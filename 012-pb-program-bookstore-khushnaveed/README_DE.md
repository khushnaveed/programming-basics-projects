# Der Buchladen

Du arbeitest als Entwickler in einem Online-Buchladen.
Das Verkaufsteam hat dir einige Daten über die Verkäufe der letzten 4 Monate geschickt und du musst einen Bericht für das Web vorbereiten.

Anweisungen:
- alle bereitgestellten Variablen sind auf 0 gesetzt, also um zu überprüfen, ob dein Code funktioniert, musst du sie auf verschiedene Werte ändern
- wenn du denkst, dass du zusätzliche Variablen benötigst, kannst du sie gerne erstellen
- jede Übung erwähnt die `if...else` Anweisung, aber in einigen Fällen musst du vielleicht auch die `if...else if...else` verwenden

## Aufgabe 1

Du möchtest überprüfen, ob der Gesamtumsatz innerhalb eines bestimmten Bereichs liegt.

- vervollständige die `if...else` Anweisung so, dass das Ergebnis `true` ist, wenn der Umsatz größer oder gleich 70 und kleiner oder gleich 99 ist

```javascript
let sales = 0;

if () {
  console.log("Der Umsatz beträgt: " + sales + ". Liegt er zwischen 70 und 99?", true);
} else {
  console.log("Der Umsatz beträgt: " + sales + ". Liegt er zwischen 70 und 99?", false);
}
```

## Aufgabe 2

Du erhältst einen Bericht über die Verkäufe aus der Sci-Fi-Abteilung und der Krimi-Abteilung.

Du möchtest überprüfen, ob die Verkäufe von mindestens einer der beiden Abteilungen innerhalb eines bestimmten Bereichs liegen, sonst sind das schlechte Nachrichten für den Laden 

- schreibe eine `if...else` Anweisung, die `true` ausgibt, wenn mindestens einer der 2 Verkaufsbeträge im Bereich zwischen 200 und 500 liegt, sonst `false`
- teste mit verschiedenen Werten

```javascript
let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 0;

if () {
  console.log("Hat mindestens eine Abteilung zwischen Sci-Fi und Krimi zwischen 200 und 500 Bücher verkauft?", true);
} else {
  console.log("Hat mindestens eine Abteilung zwischen Sci-Fi und Krimi zwischen 200 und 500 Bücher verkauft?", false);
}
```

## Aufgabe 3

Du erhältst auch den Bericht aus der Comicbuch-Abteilung.

Überprüfe, ob mindestens eine der drei Abteilungen genug verkauft hat.

- schreibe eine `if...else` Anweisung, die `true` ausgibt, wenn mindestens einer der 3 Verkaufsbeträge im Bereich zwischen 200 und 500 liegt, sonst `false`
- teste mit verschiedenen Werten

```javascript
let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 0;
let comicBookDepartmentSales = 0;
```

## Aufgabe 4

Dieses Jahr sind zwei Abteilungen in deinem Laden ziemlich gut gelaufen: Kochbücher und Zeichenbücher.

Du möchtest überprüfen, ob beide es geschafft haben, jeweils mehr als 300 Einheiten zu verkaufen.

- schreibe eine `if...else` Anweisung, die `true` ausgibt, wenn die 2 Verkaufsbeträge beide größer als 300 sind, sonst `false`
- teste mit verschiedenen Werten

```javascript
let cookingDepartmentSales = 0;
let drawingDepartmentSales = 0;
```

## Aufgabe 5

Du möchtest auch wissen, welche Abteilung zwischen den Kochbüchern und den Zeichenbüchern mehr verkauft hat.

- schreibe eine `if...else` Anweisung, die den Wert der größten Zahl und den Namen dieser Abteilung ausgibt
- teste mit verschiedenen Werten

Beispiel:
```plaintext
Eingabe: cookingDepartmentSales = 400, drawingDepartmentSales = 500 
Ausgabe: "Zeichenbuch-Abteilung", 500 
```

## Aufgabe 6

Du möchtest auch wissen, welche Abteilung zwischen den Sci-Fi-, Krimi- und Comicbüchern mehr verkauft hat.

Um die Dinge ein wenig einfacher zu halten, kannst du davon ausgehen, dass die 3 Werte niemals gleich sind.

- schreibe eine `if...else` Anweisung, die den Wert der größten Zahl und den Namen dieser Abteilung ausgibt
- teste mit verschiedenen Werten

## Aufgabe 7

Du möchtest überprüfen, ob die Verkäufe von Sci-Fi-, Krimi- und Comicbüchern zusammen die Verkäufe des gleichen Zeitraums im letzten Jahr übertroffen haben und ob sie das für dieses Jahr gesetzte Ziel erreicht haben.

- berechne die Summe der 3 Abteilungsverkäufe
- schreibe eine if...else Anweisung, die ausgibt:
    - ein trauriges Gesicht, wenn die Verkäufe geringer sind als die des letzten Jahres
    - "gut, aber wir können besser", wenn die Verkäufe größer sind als die Verkäufe des letzten Jahres, aber kleiner als das Ziel
    - "JAAAAAAA!", wenn die Verkäufe größer als das Ziel sind

```javascript
let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 0;
let comicBookDepartmentSales = 0;

let totalSalesLastYear = 0;
let totalSalesGoal = 0;
```

## Aufgabe 8

Die Marketingabteilung führt eine Promotion an den Wochenenden durch.

- schreibe eine if...else Anweisung, um den Preis der Bücher um 50% zu reduzieren, wenn der Tag Samstag oder Sonntag ist

```javascript
let day = "Montag";
let bookPrice = 16;
```