# Grundlagen des Akkumulator-Musters

## Aufgabe 1

Korrigiere den untenstehenden Code, sodass alle Buchstaben im Array in `result` zusammengefügt werden.

```js
const letters = ["a", "b", "c"];

let result = "";

for (let i = 0; i < letters.length; i++) {
    result += letters;
}

console.log(result);
```

Erwartete Ausgabe:
```plaintext
abc
```
## Aufgabe 2

Korrigiere den untenstehenden Code, um die Summe aller Zahlen im Array zu berechnen und das Ergebnis in der Konsole auszugeben.

```js
const numbers = [1, 2, 3, 4, 5];

let result = 0;

for (let i = 0; i < ; i++) {
    result += numbers[i];
}

console.log(result);
```

Erwartete Ausgabe:
```plaintext
15
```

## Aufgabe 3

Korrigiere den untenstehenden Code, sodass `result` die Summe nur der geraden Zahlen enthält.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = 0;

for (let i = 0; i < numbers.length; i++) {
    if () {
        result += numbers[i];
    }
}

console.log(result);
```

Erwartete Ausgabe:
```plaintext
20
```

Aufgabe 4

Korrigiere den untenstehenden Code, sodass `result` nur Tiere enthält, die den Buchstaben "o" enthalten.

```js
const animals = ["cat", "mouse", "dog", "giraffe", "koala"];

const result = [];

for (let i = 0; i < animals.length; i++) {
  if (animals[i].includes("o")) {
    result.push();
  }
}

console.log(result);
```

Erwartete Ausgabe:
```plaintext
[ 'mouse', 'dog', 'koala' ]
```

## Aufgabe 5

Ergänze den untenstehenden Code, sodass `result` die Liste der Namen enthält, bei denen der erste Buchstabe großgeschrieben ist.

```js
const people = ["sophia", "peter", "julia", "mike", "martha"];

const result = [];

for (let i = 0; i < people.length; i++) {
  const capitalisedName = people[i][0].toUpperCase() + people[i].slice(1);
}

console.log(result);
```

Erwartete Ausgabe:
```plaintext
[ 'Sophia', 'Peter', 'Julia', 'Mike', 'Martha' ]
```