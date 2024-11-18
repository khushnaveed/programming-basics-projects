# Reine Funktionen

## Aufgabe 1

Die untenstehende Funktion ist auf den globalen Bereich angewiesen.

Verwandle sie in eine reine Funktion, sodass das `console.log()` unten das korrekte Ergebnis liefert

```js
let n = 8;

function square() {
    return Math.pow(n, 2);
}

console.log(square(4)); // Erwartete Ausgabe: 16
console.log(square(5)); // Erwartete Ausgabe: 25
console.log(square(3)); // Erwartete Ausgabe: 9
```

## Aufgabe 2

Die untenstehende Funktion ist auf den globalen Bereich angewiesen.

Verwandle sie in eine reine Funktion, sodass das `console.log()` unten das korrekte Ergebnis liefert

```js
let string = "hello";

function convertToUpperCase() {
    return string.toUpperCase();
} 

console.log(convertToUpperCase("hi")); // Erwartete Ausgabe: "HI"
console.log(convertToUpperCase("javascript")); // Erwartete Ausgabe: 'JAVASCRIPT'
console.log(convertToUpperCase("yo!")); // Erwartete Ausgabe: 'YO!'
```

## Aufgabe 3

Die untenstehende Funktion ist auf den globalen Bereich angewiesen.

Verwandle sie in eine reine Funktion, sodass das `console.log()` unten das korrekte Ergebnis liefert

```js
let string = "hey";

function addDot() {
    return string + ".";
}

console.log(addDot('Well well well')); // Well well well.
console.log(addDot('yes')); // yes.
console.log(addDot('No')); // No.
```

## Aufgabe 4

Die untenstehende Funktion ist auf den globalen Bereich angewiesen.

Verwandle sie in eine reine Funktion, sodass das `console.log()` unten das korrekte Ergebnis liefert

```js
let sum = 0;

function add(a, b) {
    sum = a + b;
}

console.log(add(1, 2)); // 3
console.log(add(5, 3)); // 8
console.log(add(8, 1)); // 9
```

## Aufgabe 5

Die untenstehende Funktion ist auf den globalen Bereich angewiesen.

Verwandle sie in eine reine Funktion, sodass das `console.log()` unten das korrekte Ergebnis liefert

```js
const numbers = [1, 2, 3, 4, 5];
let result = 0;

function sumNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
}

console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([4, 5, 6])); // 15
console.log(sumNumbers([1, 1, 1])); // 3
```