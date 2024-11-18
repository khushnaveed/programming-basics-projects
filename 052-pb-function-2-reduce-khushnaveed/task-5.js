/*
 Task 5
 */

const string = "read the friendly manual";

const result = string.split(" ").reduce((acc, items) => {
  return acc + items[0].toUpperCase();
}, "");

console.log(result);
