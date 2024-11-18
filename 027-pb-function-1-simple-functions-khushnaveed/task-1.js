/*
Task 1

Create 4 functions called:

- add: it takes 2 numbers in input and returns the result of their sum
- subtract: it takes 2 numbers in input and returns the result of their subtraction 
- multiply: it takes 2 numbers in input and returns the result of their multiplication
- divide: it takes 2 numbers in input and returns the result of their division

For example:

add(2, 4); // 6
subtract(2, 4); // -2
multiply(2, 4); // 8
divide(2, 4); // 0.5 

Call the functions with different values and print the result
to the console
*/
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}


console.log(add(2, 4));
console.log(subtract(2, 4));
console.log(multiply(2, 4));
console.log(divide(2, 4));