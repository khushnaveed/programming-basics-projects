/*
 Task 3
 */

const letters = ["a", "b", "c"];

const result = letters.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, "");

console.log(result); // "abc"
