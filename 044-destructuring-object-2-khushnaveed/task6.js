/* Destructure the first, second, and third elements into variables, providing a default value of "green" for the third element. */

const colors = ["red", "blue"];

let [first, second, third = "green"] = colors;

console.log(first);
console.log(second);
console.log(third);