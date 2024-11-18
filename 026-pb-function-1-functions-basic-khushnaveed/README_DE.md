# Grundlagen der Funktionen


## Aufgabe 01

Korrigiere den untenstehenden Code, um das erwartete Ergebnis in der Konsole zu erhalten

Erwartete Ausgabe: 7


```javascript
function add() {
    return a + b;
}

let result = add(2, 5);

console.log(result);
```


## Aufgabe 02

Korrigiere und vervollständige den untenstehenden Code, damit das richtige Ergebnis in der Konsole ausgegeben wird


```javascript
function isEven(number) {
  number % 2 === 0;
}

console.log(isEven(2)); // true
console.log(isEven(9)); // false
console.log(isEven(20)); // true
```
 
## Aufgabe 03

Vervollständige den untenstehenden Code, damit das richtige Ergebnis in der Konsole angezeigt wird

```javascript
function getNumbersUntil(number) {
    const list = [];
    for (let i = 0; i < number; i++) {
        list.push(i);
    }
}

const list1 = getNumbersUntil(10);
const list2 = getNumbersUntil(8);
const list3 = getNumbersUntil(20);

console.log(list1); // [0, 1, 2, 3, ..., 9]
console.log(list2); // [0, 1, 2, 3, ..., 7]
console.log(list3); // [0, 1, 2, 3, ..., 19]
```

## Aufgabe 04

Korrigiere und vervollständige den untenstehenden Code, damit das richtige Ergebnis in der Konsole ausgegeben wird

```javascript
function double(number) {
  number * 2;
} 

console.log(double(9)); // 18
```

## Aufgabe 05

Korrigiere den untenstehenden Code, damit er die korrekten Werte ausgibt


```javascript
function capitalize() {
  string[0].toUpperCase() + string.slice(1);
};

console.log(capitalize("table")); // Table
console.log(capitalize("cat")); // Cat
console.log(capitalize("hello")); // Hello
```


## Aufgabe 06

Korrigiere den untenstehenden Code, damit er die richtigen Werte in die Konsole ausgibt 


```javascript
function haveEqualLength() {
  string1.length === string2.length;
}

console.log(haveEqualLength("cat", "dog")); // true
console.log(haveEqualLength("house", "bookshelf")); // false
console.log(haveEqualLength("JavaScript", "Python")); // false
console.log(haveEqualLength("hello", "mouse")); // true 
```

## Aufgabe 07

Korrigiere den untenstehenden Code, damit er die erwartete Ausgabe in die Konsole ausgibt

Die Funktion leadingZero nimmt eine einzelne Zahl als Eingabe und gibt einen String zurück:

- wenn die eingegebene Zahl kleiner oder gleich 9 ist, gibt sie diese mit einer 0 davor zurück
- ansonsten gibt sie die gleiche Zahl zurück

```javascript
function leadingZero(n) {
  number <= 9 ? `0${number}` : `${number}`;
}

console.log(leadingZero(8)); // 08
console.log(leadingZero(0)); // 00
console.log(leadingZero(10)); // 10
console.log(leadingZero(7)); // 07
console.log(leadingZero(2)); // 02
```

## Aufgabe 08

Korrigiere den untenstehenden Code, damit er die korrekte Ausgabe ausgibt

Die Funktion letterReplacer() nimmt 3 Strings als Eingabe und gibt einen neuen String zurück, der der erste übergebene String ist, in dem jedes Auftreten von "target" durch "replaceWith" ersetzt wird

Zum Beispiel

```plaintext
letterReplace("ooo", "o", "i") => iii
letterReplace("road", "r", "t") => toad
letterReplace("house", "h", "m") => mouse
```


```javascript
function letterReplacer(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === target) {
      newString += replaceWith;
    } else {
      newString += string[i];
    }
  }
}

console.log(letterReplacer("cat", "c", "b")); // bat
console.log(letterReplacer("legend", "e", "3")); // l3g3nd
console.log(letterReplacer("mouse", "m", "h")); // house
```


## Aufgabe 09

Korrigiere den untenstehenden Code, um das erwartete Ergebnis in der Konsole zu erhalten


```javascript
function isDivisibleBy(divisor, number) {
  return number % divisor === 0;
}

console.log(isDivisibleBy(4, 2)); // true
console.log(isDivisibleBy(9, 2)); // false
console.log(isDivisibleBy(12, 3)); // true
```


## Aufgabe 10

Korrigiere den untenstehenden Code, damit er den erwarteten Wert zurückgibt

```javascript
const onlyNumbers = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResult.push(array[i]);
    }
  }

  return arrayResult;
};

console.log(onlyNumbers([1, 2, "a", "b", "c", 3])); // [1, 2, 3]
```