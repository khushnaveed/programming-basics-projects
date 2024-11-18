# Reduce

Löse die folgenden Aufgaben - viel Glück, viel Spaß!

## Aufgabe 1

Gegeben ist ein Array von Nummern. Verwende die `reduce` Methode, um die Summe nur der geraden Zahlen im Array zu berechnen.

Vervollständige den Code unten

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumIfEven = (accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}

const evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30
```

## Aufgabe 2

Gegeben ist ein Array von Nummern. Verwende die `reduce` Methode, um die Summe nur der geraden Zahlen im Array zu berechnen.

Vervollständige und korrigiere den Code unten

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumIfEven = (accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}

const evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30
```

## Aufgabe 3

Gegeben ist ein Array von Buchstaben. Verwende die `reduce` Methode, um diese alle zu einem String zu verketten.

Korrigiere den Code unten, um das richtige Ergebnis zu erhalten

```js
const letters = ["a", "b", "c"];

const result = letters.reduce((accumulator, currentValue) => accumulator + currentValue, "");

console.log(result); // "abc"
```

## Aufgabe 4

Gegeben ist ein Array von Objekten, bei dem jedes Objekt eine Bestellung mit zwei Eigenschaften darstellt:

- `id`: eine eindeutige numerische Kennung
- `amount`: eine Menge

```javascript
const orders = [
  {
    id: 1,
    amount: 250
  },
  {
    id: 2,
    amount: 400
  },
  {
    id: 3,
    amount: 100
  },
  {
    id: 4,
    amount: 325
  }
];
```

Verwende `reduce()`, um die Gesamtsumme aller Bestellungen zu erhalten.

```js
const totalAmount = orders.reduce((accumulator, order) => accumulator + order.amount, 0);

console.log(totalAmount); // 1075
```

## Aufgabe 5

Gegeben ist ein String:

```javascript
const string = "read the friendly manual";
```

Verwende die `reduce()` Methode, um einen neuen String zu erhalten, der nur die Initialen jedes Wortes in Großbuchstaben enthält.

Erwartetes Ergebnis:

```javascript
const initials = string.split(" ").reduce((accumulator, word) => accumulator + word.charAt(0).toUpperCase(), "");

console.log(initials); // RTFM
```

## Aufgabe 6

Gegeben ist ein Array mit Strings:

```javascript
const fruit = ["banana", "apple", "kiwi", "mango", "strawberries"];
```

Verwende die `reduce()` Methode, um die Strings zu kombinieren und ein Ergebnis wie dieses zu erhalten:

```plaintext
Fruit salad: banana - apple - kiwi - mango - strawberries
```

```js
const fruitSalad = fruit.reduce((accumulator, currentValue) => {
  return accumulator + (accumulator ? " - " : "Fruit salad: ") + currentValue;
}, "");

console.log(fruitSalad); // Fruit salad: banana - apple - kiwi - mango - strawberries
```

## Aufgabe 7

Gegeben ist ein Array von Preisen:

```javascript
const prices = ["19€", "109€", "60€", "12€"];
```

Verwende die `reduce()` Methode, um die Summe aller Zahlen im Array zu berechnen.

Erwartetes Ergebnis:

```javascript
const total = prices.reduce((accumulator, price) => accumulator + parseInt(price), 0);

console.log(total); // 200
```

## Aufgabe 8

Gegeben ist ein Array mit Person-Objekten:

```javascript
const users = [
  {name: "Jane Smith", age: 20, city: "New York"},
  {name: "Anne Annson", age: 24, city: "London"},
  {name: "Pete Peterson", age: 31, city: "New York"},
  {name: "Martha Marty", age: 38, city: "New York"},
  {name: "Renato Romolo", age: 36, city: "Rome"},
  {name: "Philip Flip", age: 36, city: "London"},
];
```

Verwende die `reduce()` Methode, um ein neues Objekt zu erstellen, bei dem die Benutzer nach Städten gruppiert sind.

Erwartetes Ergebnis:

```javascript
const groupedByCity = users.reduce((accumulator, user) => {
  if (!accumulator[user.city]) {
    accumulator[user.city] = [];
  }
  accumulator[user.city].push(user);
  return accumulator;
}, {});

console.log(groupedByCity);
// {
//   "New York": [
//     {name: "Jane Smith", age: 20, city: "New York"},
//     {name: "Pete Peterson", age: 31, city: "New York"},
//     {name: "Martha Marty", age: 38, city: "New York"},
//   ],
//   "London": [
//     {name: "Anne Annson", age: 24, city: "London"},
//     {name: "Philip Flip", age: 36, city: "London"},
//   ],
//   "Rome": [
//     {name: "Renato Romolo", age: 36, city: "Rome"},
//   ],
// }
```
