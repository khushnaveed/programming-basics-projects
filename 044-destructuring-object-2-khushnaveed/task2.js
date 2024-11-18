/*
Destructure the first and second elements into separate variables.
Destructure the rest of the numbers into a new array. */

const numbers = [10, 20, 30, 40, 50];

let [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);
