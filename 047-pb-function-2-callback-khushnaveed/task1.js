/* Create a function called myMap that takes an array and a callback function in input.

Inside, it applies the callback function to every element of the array.

It returns a new array containing the values from the original array modified depending on the result of the callback.

The function should work with different kind of inputs and different callbacks.

Also write the functions to use as callbacks so that in the examples below, given the input on the left we get the output on the right */

/* doubles the number: [1, 2, 3] => [2, 4, 6]

uppercase strings: ["dish", "fork", "table"] => ["DISH", "FORK", "TABLE"]

capitalize strings: ["pizza", "beer", "fries"] => ["Pizza", "Beer", "Fries"] */

function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function doubles(number) {
  return number * 2;
}

function uppercase(strings) {
  return strings.toUpperCase();
}
function capitalize(strings) {
  return strings[0].toUpperCase() + strings.slice(1);
}

console.log(myMap([1, 2, 3], doubles));
console.log(myMap(["dish", "fork", "table"], uppercase));
console.log(myMap(["pizza", "beer", "fries"], capitalize));
