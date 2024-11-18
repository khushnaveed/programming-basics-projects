/*
Task 4

Write a function called `startsWithCapitalLetter` that takes
a string in input and returns:

- `true`: if the first character is an uppercase letter
- `false`: if the first character is NOT an uppercase letter

Assume that the input string always starts with a letter from
the alphabet and it can't be a number or a symbol.

For example:

startsWithCapitalLetter("Hello"); // true
startsWithCapitalLetter("javascript"); // false
startsWithCapitalLetter("Python"); // true

**HINT**:
How to check if a letter is uppercase?

let letter = "x";
letter === letter.toUpperCase(); // false

let capitalLetter = "Q";
capitalLetter === capitalLetter.toUpperCase(); // true
*/

function startsWithCapitalLetter(string) {
  let capitalLetter = string[0];

  return capitalLetter === capitalLetter.toUpperCase() ? true : false;
}


console.log(startsWithCapitalLetter("Hello"));
console.log(startsWithCapitalLetter("javascript"));
console.log(startsWithCapitalLetter("Python"));

