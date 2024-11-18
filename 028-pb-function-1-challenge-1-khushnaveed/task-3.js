/**
 * Task 3
 *
 * Create a function that takes a string in input
 * and returns the same string with the first and last character capitalised
 *
 * If the input string is an empty string, it returns an empty string
 */

function capitaliseFirstAndLast(string) {
  if (string === "") return "";

  let firstLetter = string[0].toUpperCase();
  let lastLetter = string[string.length - 1].toUpperCase();
  let middleLetters = string.slice(1, -1);

  return firstLetter + middleLetters + lastLetter;
}

console.log(capitaliseFirstAndLast("table")); // TablE
console.log(capitaliseFirstAndLast("cat")); // CaT
console.log(capitaliseFirstAndLast("js")); // JS
console.log(capitaliseFirstAndLast("")); // ""
