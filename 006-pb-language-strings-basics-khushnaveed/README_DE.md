# Grundlagen von Strings

## Aufgabe 1

Ändere den untenstehenden Code so, dass der erste und der letzte Buchstabe des Strings in der Konsole ausgegeben werden.

```javascript
const string = "hello world";
const firstCharacter = string[1];
const lastCharacter = string[string.length];

// ändere das nicht
console.log(firstCharacter + lastCharacter)
```

Erwartete Ausgabe:
```plaintext
hd
```


## Aufgabe 2

Ändere den untenstehenden Code so, dass das `!` in der Konsole ausgegeben wird.

```javascript
const string = "abc!def";

console.log(string[string.length]);
```

Erwartete Ausgabe:
```plaintext
!
```

## Aufgabe 3

Ändere den untenstehenden Code so, dass das Wort "help" ohne Leerzeichen zwischen den Buchstaben in der Konsole ausgegeben wird.

```javascript
const letter1 = "h";
const letter2 = "e";
const letter3 = "l";
const letter4 = "p";

console.log(letter1, letter2, letter3, letter4);
```

Erwartete Ausgabe:
```plaintext
help
```


## Aufgabe 4

Ändere die `poem` Variable so, dass das Gedicht auf 4 separaten Zeilen erscheint.

```javascript
const poem = "Roses are red Violets are blue I am a programmer And so are you!";

console.log(poem);
```

Erwartete Ausgabe:

```plaintext
Roses are red
Violets are blue
I am a programmer
And so are you!
```


## Aufgabe 5

Ändere den Code innerhalb der Konsole so, dass der letzte Buchstabe jeder Buchstabenfolge ausgegeben wird.

```javascript
const sequence1 = "aslkfjdfsalfjeoih";
const sequence2 = "sfaif9aujfw04sldknfae";
const sequence3 = "dslakfhs28rhf***hflsdjfs04rl";
const sequence4 = "ffsla*°ljfsf2304rl";
const sequence5 = "gad9hldsaòldsaiflfslaho";

console.log(
  sequence1[0] + sequence2[0] + sequence3[0] + sequence4[0] + sequence5[0]
);
```

Erwartete Ausgabe:
```plaintext
hello
```
