/* Destructure the second element of the first sub-array and assign it to a variable.
Destructure the third sub-array into separate variables for each value. */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/* let [, second] = matrix[0];
console.log(second);

let [one, two , three] = matrix[2]; */

let [[,second], , [one, two, three]] = matrix;
console.log(second);
console.log(one);
console.log(two);
console.log(three);