# Funktionsausdrücke


## Aufgabe 01

Schreibe die untenstehende Funktionsdeklaration als einzeiligen Pfeilfunktionsausdruck um.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));
console.log(add(6, 3));
console.log(add(4, 10));
```


## Aufgabe 02

Schreibe die untenstehende Funktionsdeklaration als einzeiligen Pfeilfunktionsausdruck um.

```javascript
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(2)); // true
console.log(isEven(9)); // false
console.log(isEven(20)); // true
```
 
## Aufgabe 03

Schreibe die untenstehende Funktion als Funktionsausdruck um.

```javascript
function getNumbersUntil(number) {
    const result = [];
    for (let i = 0; i < number; i++) {
        result.push(i);
    }
    return result;
}

const list1 = getNumbersUntil(10);
const list2 = getNumbersUntil(8);
const list3 = getNumbersUntil(20);

console.log(list1); // [0, 1, 2, 3, ..., 9]
console.log(list2); // [0, 1, 2, 3, ..., 7]
console.log(list3); // [0, 1, 2, 3, ..., 19]
```

## Aufgabe 04

Schreibe die untenstehende Pfeilfunktion als normale Funktionsdeklaration um.

```javascript
const double = number => number2 * 2;

console.log(double(9)); // 18
```

## Aufgabe 05

Schreibe die untenstehende Funktionsdeklaration als Funktionsausdruck um.

```javascript
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
};

console.log(capitalize("table")); // Table
console.log(capitalize("cat")); // Cat
console.log(capitalize("hello")); // Hello
```


## Aufgabe 06

Schreibe die untenstehende Funktion als Pfeilfunktionsausdruck um.

```javascript
function haveEqualLength(string1, string2) {
  return string1.length === string2.length;
}

console.log(haveEqualLength("cat", "dog")); // true
console.log(haveEqualLength("house", "bookshelf")); // false
console.log(haveEqualLength("JavaScript", "Python")); // false
console.log(haveEqualLength("hello", "mouse")); // true
```

## Aufgabe 07

Die Funktion leadingZero nimmt eine einzelne Zahl als Eingabe und gibt einen String zurück:

- Wenn die Eingabezahl kleiner oder gleich 9 ist, gibt sie diese mit einer 0 davor zurück
- Andernfalls gibt sie die gleiche Zahl zurück

Schreibe sie als Funktionsausdruck um.

```javascript
const leadingZero = n => n <= 9 ? `0${n}` : `${n}`;

console.log(leadingZero(8)); // 08
console.log(leadingZero(0)); // 00
console.log(leadingZero(10)); // 10
console.log(leadingZero(107)); // 107
console.log(leadingZero(2)); // 02
```