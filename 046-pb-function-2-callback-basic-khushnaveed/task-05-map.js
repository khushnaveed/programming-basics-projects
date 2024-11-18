/**
 * The myMap() function below takes an array and a function in input
 *
 * Write the 3 functions and complete the calls to myMap() in order to get the expected output
 *
 */

function myMap(items, callback) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(callback(items[i]));
  }
  return result;
}
function add(number) {
  return number + 900;
}
function divide(number) {
  return number/2;

}
function reverse(string) {
   return string.split("").reverse().join("");
}

console.log(myMap([1, 2, 3], add)); // expected output: [901, 902, 903]
console.log(myMap([2, 4, 10], divide)); // expected output: [1, 2, 5]
console.log(myMap(["Rufus", "Lisa", "July"], reverse)); // expected output: ["sufuR", "asiL", "yluJ"]
