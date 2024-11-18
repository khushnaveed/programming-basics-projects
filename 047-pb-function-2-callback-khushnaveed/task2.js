/* Create a function called myFilter that takes an array and a callback function in input.

The function returns a new array containing only certain items, depending on the result of the callback.

Write also the functions to use as callbacks so that in the examples below, given the input on the left we get the output on the right.

Examples:

strings that contain "green": ["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"] => ["green shirt", "green hat"]

numbers larger equal than 100: [9.99, 100, 299.99, 27.99, 2.99, 99.99] => [100, 299.99]

even numbers: [1, 2, 3, 4, 5, 6] => [2, 4, 6] */

function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]))
        result.push(array[i]);
  }
  return result;
}

function green(string) {
  return string.includes("green");
}

function large(number) {
    return number >= 100;
}

function even(number) {
    return number % 2 === 0;
}

console.log(myFilter(["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"], green ));
console.log(myFilter([9.99, 100, 299.99, 27.99, 2.99, 99.99], large));
console.log(myFilter([1, 2, 3, 4, 5, 6], even));

