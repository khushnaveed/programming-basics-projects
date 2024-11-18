/* Task 1: From an array of numbers [10, 15, 20, 25, 30], filter out the numbers that are less than 20.
Expected Output: [20, 25, 30] */

const numberArray = [10, 15, 20, 25, 30];
const lessNum = numberArray.filter((item) => item < 20);
console.log(lessNum);

/* Task 2: Given an array of words ["tree", "car", "bicycle", "plane"], create a new array that only includes words longer than 3 characters.
Expected Output: ["tree", "bicycle", "plane"] */

const words = ["tree", "car", "bicycle", "plane"];
const charArray = words.filter((item) => item.length > 3);
console.log(charArray);

/* Task 3: From an array of ages [12, 25, 30, 40, 50], filter out ages that are below 30.
Expected Output: [30, 40, 50] */

const ages = [12, 25, 30, 40, 50];
const below30 = ages.filter((item) => item < 30);
console.log(below30);

/* Task 4: Given an array of numbers [1, -5, 10, -2, 7], create a new array that contains only the positive numbers.
Expected Output: [1, 10, 7] */

const numbers = [1, -5, 10, -2, 7];
const positiveArray = numbers.filter((item) => item > 0);
console.log(positiveArray);

/* Task 5: From an array of temperatures in Fahrenheit [32, 45, 50, 60, 72], filter out temperatures below 50.
Expected Output: [50, 60, 72] */

const temperatures = [32, 45, 50, 60, 72];
const temperatures50 = temperatures.filter((item) => item < 50);
console.log(temperatures50);

/* Task 6: Given an array of exam scores [50, 65, 85, 40, 95], filter out scores below 60 (passing scores).
Expected Output: [65, 85, 95] */

const scores = [50, 65, 85, 40, 95];
const below60 = scores.filter((item) => item < 60);
console.log(below60);

/* Task 7: You have an array of objects representing students:
Filter out the students with grades below 60.
Expected Output:
[
  { name: "John", grade: 85 },
  { name: "Alice", grade: 92 }
] */

const students = [
  { name: "John", grade: 85 },
  { name: "Alice", grade: 92 },
  { name: "Bob", grade: 58 },
];
const students60 = students.filter((item) => item.grade < 60);
console.log(students60);

/* Task 8: From an array of product prices [15, 30, 45, 60], filter out prices greater than 40.
Expected Output: [15, 30]*/

const prices = [15, 30, 45, 60];
const prices40 = prices.filter((item) => item > 40);
console.log(prices40);

/* Task 9: Given an array of strings ["apple", "banana", "pear", "grape"], create a new array that only includes strings containing the letter "a".
Expected Output: ["apple", "banana", "grape"] */

const fruits = ["apple", "banana", "per", "grape"];
const fruitsA =fruits.filter((item)=> item.includes('a'));
console.log(fruitsA);

/* Task 10: From an array of booleans [true, false, true, false, true], filter out the false values.
Expected Output: [true, true, true] */

const booleans = [true, false, true, false, true];
const filter = booleans.filter((item) => item );
console.log(filter);