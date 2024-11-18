/*
Task 5

Write a function called `capitalise` that takes a string in 
input and returns the same string with:

- the first letter transformed to upper case
- the rest of the string to lower case

For example:

capitalise("hello"); // Hello
capitalise("wE pUt tHe FUN in fUnCtIOns"); // We put the fun in functions
capitalise("BERLIN"); Berlin

**HINT**
We can use slice() to get the string without the first character

let s = "hello world";
s.slice(1); // ello world

*/

function capitalise(string) {
  let firstLetter = string[0].toUpperCase();
  let remainingLetters = string.slice(1).toLowerCase();
  return firstLetter + remainingLetters;
}

console.log(capitalise("hello"));
console.log(capitalise("wE pUt tHe FUN in fUnCtIOns"));
console.log(capitalise("BERLIN"));
