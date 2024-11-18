/*
Task 7

Write a function called getRandomLetter that returns a random
letter of the alphabet (from a to z) every time is called

For example:

getRandomLetter(); // f
getRandomLetter(); // z 
getRandomLetter(); // h 
getRandomLetter(); // d 

**HINT**
You can start by using a string with all the available letters:

```js
"abcdefghijklmnopqrstuvwxyz"
```
  return Math.floor(Math.random() * (number + 1));

*/

function getRandomLetter() {
  let letters = "abcdefghijklmnopqrstuvwxyz";

  return letters[Math.floor(Math.random() * letters.length)];
}

console.log(getRandomLetter());
