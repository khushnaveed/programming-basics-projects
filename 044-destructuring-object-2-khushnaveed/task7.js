/* Destructure the first and third elements of the array into variables, skipping the second one. */

const fruits = ["apple", "banana", "cherry", "date"];

let [first, , third] = fruits;

console.log(first);
console.log(third);