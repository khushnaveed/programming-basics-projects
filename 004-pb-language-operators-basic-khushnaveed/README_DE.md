# Grundlagen der Operatoren

## Aufgabe 1

Du hast einen Kaffee, ein Sandwich und einen Kuchen bestellt.

Ändere den untenstehenden Code so, dass `total` die Summe enthält, die du durch Zusammenzählen der 3 Preise bezahlen sollst.

```javascript
const coffeePrice = 2.5;
const sandwichPrice = 4.5;
const cakePrice = 5;

const total;

console.log(`Der Gesamtbetrag zum Bezahlen beträgt ${total}€`)
```

Erwartete Ausgabe:
```plaintext
Der Gesamtbetrag zum Bezahlen beträgt 12€
```

## Aufgabe 2 

Korrigiere den untenstehenden Code so, dass du weißt, wie viele ganze Kekse jeder deiner Freunde essen kann.

```javascript
const biscuits = 33;
const friends = 4;

const biscuitsPerPerson = Math.floor()

// ändere das hier nicht
console.log(`Jede Person kann ${biscuitsPerPerson} Kekse essen`);
```

Erwartete Ausgabe:
```plaintext
Jeder Freund kann 8 Kekse essen
```

## Aufgabe 3

Ändere den untenstehenden Code so, dass die Variable `isCakeEnough` `true` oder `false` ist, wenn die Stücke Kuchen ausreichen für die Anzahl der Freunde.

```javascript
const numberOfFriends = 4;
const slicesOfCake = 6;

const isCakeEnough;

console.log(`Gibt es genug Kuchen für alle? ${isCakeEnough}`);
```

Erwartete Ausgabe:
```plaintext
Gibt es genug Kuchen für alle? true
```

## Aufgabe 4

Vier Freunde gehen in ein Café und bestellen verschiedene Dinge zum Essen und Trinken.
Sie beschließen, die Gesamtsumme gleichmäßig aufzuteilen.

Korrigiere die Formel zur Berechnung des Betrags, den jede Person zahlen sollte.

```javascript
let coffeesTotal = 15;
let juicesTotal = 10;
let cakesTotal = 25;
let iceCreamTotal = 8;

let numberOfPeople = 4;

// ändere den Code hier
let totalPerPerson =
  coffeesTotal + cakesTotal + juicesTotal + iceCreamTotal / numberOfPeople;

console.log(`Jede Person sollte ${totalPerPerson}€ zahlen`);
```

Erwartete Ausgabe:
```plaintext
Jede Person sollte 14.5€ zahlen
```

## Aufgabe 5

Kommentiere den untenstehenden Code ein und korrigiere ihn, indem du `???` durch den richtigen Operator ersetzt, so dass jeder console.log() `true` ausgibt.

```javascript
const apples = 8;
const oranges = 6;

// console.log("1.", apples ??? 8);
// console.log("2.", apples ??? oranges);
// console.log("3.", oranges ??? "6");
// console.log("4.", oranges ??? apples);
// console.log("5.", apples ??? 10);
// console.log("6.", apples + oranges ??? 10);
// console.log("7.", apples - oranges ??? 2);
// console.log("8.", apples + oranges ??? 14);
// console.log("9.", apples + oranges ??? oranges + apples);
// console.log("10.", apples ??? oranges);
```

## Aufgabe 6
 
Kommentiere den untenstehenden Code ein und korrigiere ihn, indem du `???` durch den richtigen Operator ersetzt, so dass jeder console.log() `false` ausgibt.

```javascript
const apples = 8;
const oranges = 6;

// console.log("1.", apples ??? 8);
// console.log("2.", apples ??? oranges);
// console.log("3.", oranges ??? "6");
// console.log("4.", oranges ??? apples);
// console.log("5.", apples ??? 10);
// console.log("6.", apples + oranges ??? 10);
// console.log("7.", apples - oranges ??? 2);
// console.log("8.", apples + oranges ??? 14);
// console.log("9.", apples + oranges ??? oranges + apples);
// console.log("10.", apples ??? oranges);
```

## Aufgabe 7

Du fühlst dich besonders großzügig und beschließt, die Kekse gleichmäßig unter deinen Freunden aufzuteilen. 
Nachdem du die Kekse gleichmäßig unter deinen Freunden verteilt hast, sollten dir noch einige übrig bleiben. Diese kannst du essen.

Korrigiere den untenstehenden Code und ersetze `???` durch den richtigen Operator, um zu berechnen, wie viele Kekse du und deine Freunde jeweils essen können.

```javascript
const biscuits = 34;
const friends = 4;

const biscuitsForFriends = Math.floor();
const biscuitsForMe = biscuits ??? friends;

// ändere das hier nicht
console.log(`Jeder Freund kann ${biscuitsForFriends} Kekse essen`);
console.log(`Die für mich übrig gebliebenen Kekse sind: ${biscuitsForMe}`);
```

Erwartete Ausgabe:
```plaintext
Jeder Freund kann 8 Kekse essen
Die für mich übrig gebliebenen Kekse sind: 2
```
