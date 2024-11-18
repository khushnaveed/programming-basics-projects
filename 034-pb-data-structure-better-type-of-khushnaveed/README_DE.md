# Bessere Art Von

Erstelle eine Funktion namens `betterTypeOf`, die einen einzelnen Parameter namens `value` akzeptiert und den Typ dieses Wertes zurückgibt.

Zum Beispiel:

```javascript
betterTypeOf(1); // 'number'
betterTypeOf("hello"); // 'string'
betterTypeOf(true); // 'boolean'
betterTypeOf(""); // 'string'
betterTypeOf([1, 2, 3]); // 'array'
betterTypeOf(["a", "b", "c"]); // 'array'

const person = {
    fullName: "Sandy Smith",
    age: 28
};

betterTypeOf(person); // "object"
```

Achte besonders auf die Fälle, in denen der Wert ein Array ist.
