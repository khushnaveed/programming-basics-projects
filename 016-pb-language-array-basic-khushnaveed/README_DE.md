# Array


## Aufgabe 01

Korrigiere den untenstehenden Code, sodass das Array `animals` in der Konsole ausgegeben wird


```js
const animals = "giraffe", "cat", "dog", "mouse", "koala";

console.log(animals);
```


## Aufgabe 02

Ergänze den untenstehenden Code, sodass:

- die Ausgabe des ersten `console.log()` Julia ist
- die Ausgabe des zweiten `console.log()` Tom ist
- die Ausgabe des dritten `console.log()` Gina ist


```js
const people = [];

console.log(people[0]); // Julia
console.log(people[1]); // Tom
console.log(people[2]); // Gina
```


## Aufgabe 03

Ergänze den untenstehenden Code, sodass:

- die erste `console.log()` Ausgabe London ist
- die zweite `console.log()` Ausgabe Berlin ist


```js
const cities = ["Berlin", "Leipzig", "London", "Rome", "Tokyo"];


console.log(); // London
console.log(); // Berlin 
```


## Aufgabe 04

Ergänze den Code so, dass `console.log()` immer das letzte Element im Array ausgibt, _ohne das ursprüngliche Array zu verändern_, egal wie lang das Array ist.

Zum Beispiel:

```js
["a", "b", "c", "d", "e"] => "e"
["a", "b", "c", "d", "e", "f"] => "f"
["a", "b", "c", "d", "e", "f", "g", "h", "i"] => "i"
```
Das `console.log()` sollte nur einmal vorkommen und für jedes Array funktionieren


```js
const letters = ["a", "b", "c", "d", "e"];

console.log(letters[]);
```


## Aufgabe 05

Ergänze den untenstehenden Code:

- wenn die aktuelle Länge des Arrays ungerade ist, fügen wir nur 1 "*" hinzu
- wenn die aktuelle Länge des Arrays gerade ist, fügen wir 2 "*" hinzu

Am Ende sollte das neue Array immer eine gerade Anzahl von Elementen haben


```js
const array = ["*", "*", "*", "*", "*"];

let newArrayLength = ? array.push("*"): array.push("*", "*");

console.log(newArrayLength);
```


## Aufgabe 06

Ergänze den untenstehenden Code, sodass die Variable `someDinosaurs` ein neues Array mit nur "triceratops" und "stegosaurus" enthält

Erwartete Ausgabe:

```plaintext
["triceratops", "stegosaurus"]
```


```js
const dinosaurs = [
  "t-rex",
  "brontosaurus",
  "triceratops",
  "stegosaurus",
  "brachiosaurus",
];

const someDinosaurs = ;

console.log(someDinosaurs);
```


## Aufgabe 07

Ergänze den untenstehenden Code, sodass `negativeNumbers` ein Array ist, das nur die letzten 4 Elemente aus dem Array `numbers` enthält.

Erwartete Ausgabe:

```[-1, -2, -3, -4]```


```js
// berühre diese Zeile nicht
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4];

const negativeNumbers = numbers;

console.log(negativeNumbers);
```


## Aufgabe 08

Ergänze den untenstehenden Code, sodass die Ausgabe in der Konsole folgendermaßen aussieht:

```plaintext
1-2-3-4-5
```


```js
const array = [1, 2, 3, 4, 5];

console.log(array);
```


## Aufgabe 09

Ergänze den untenstehenden Code, sodass die Ausgabe in der Konsole ein Array wie folgt ist:

```plaintext
["12", "35", "05"]
```


```js
let time = "12:35:05";

console.log();
```

## Aufgabe 10

Ergänze den untenstehenden Code, sodass das letzte Element des Arrays in der Konsole ausgegeben wird

Erwartete Ausgabe:
```plaintext
Meine Lieblingsfarbe ist grün
```

```javascript
const colors = ["red", "blue", "yellow", "brown", "green"];
const favouriteColor = colors[];

console.log(`Meine Lieblingsfarbe ist ${favouriteColor}`)
```