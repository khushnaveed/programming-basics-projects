/*
Task 2

Given an array of numbers, use the reduce method to calculate the sum of only
the even numbers in the array

Complete and fix the code below
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumIfEven(accumulator, currentValue) {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}

let evenNumbersSum = numbers.reduce(sumIfEven, 0);

console.log(evenNumbersSum); // 30