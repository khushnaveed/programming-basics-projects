/* Task 1: Given an array of numbers [1, 2, 3, 4, 5], create a new array where each number is doubled.
Expected Output: [2, 4, 6, 8, 10] */

const array1 = [1, 2, 3, 4, 5];
const array2 = array1.map((item) => item + item);
console.log(array2);

/* Task 2: Convert an array of strings ["red", "green", "blue"] to uppercase.
Expected Output: ["RED", "GREEN", "BLUE"] */

const strArray = ["red", "green", "blue"];
const strArray2 = strArray.map((item) => item.toUpperCase());
console.log(strArray2);

/* Task 3: Given an array of birth years [1990, 2000, 2010], create an array of ages assuming the current year is 2024.
Expected Output: [34, 24, 14] */

const birthYears = [1990, 2000, 2010];
const birthYears2 = birthYears.map((item) => 2024 - item);
console.log(birthYears2);

/* Task 4: Given an array of distances in kilometers [10, 20, 30, 40], convert each distance to miles (1 km = 0.621371 miles).
Expected Output: [6.21371, 12.42742, 18.64113, 24.85484] */

const distanceKm = [10, 20, 30, 40];
const distanceMiles = distanceKm.map((item) => item * 0.621371);
console.log(distanceMiles);

/* Task 5: Given an array of objects representing items:
Create a new array with just the names of the items.
Expected Output: ["Book", "Pen"] */

const obj = [
  { name: "Book", quantity: 2 },
  { name: "Pen", quantity: 5 },
];
const obj2 = obj.map((item) => item.name);
console.log(obj2);

/* Task 6: From an array of decimal numbers [1.2, 2.5, 3.7, 4.8], create a new array with each number rounded to the nearest integer.
Expected Output: [1, 3, 4, 5] */

const decimalNum = [1.2, 2.5, 3.7, 4.8];
const nearestInt = decimalNum.map((item) => Math.round(item));
console.log(nearestInt);

/* Task 7: Given an array of numbers [5, 10, 15], subtract 3 from each number.
Expected Output: [2, 7, 12]*/

const numberArray = [5, 10, 15];
const subtractArray = numberArray.map((item) => item - 3);
console.log(subtractArray);

/* Task 8: Given an array of sentences ["hello world", "javascript is fun", "coding"], capitalize the first letter of each sentence.
Expected Output: ["Hello world", "Javascript is fun", "Coding"] */

const sentenceArray = ["hello world", "javascript is fun", "coding"];
const capitalizeArray = sentenceArray.map(
  (item) => item[0].toUpperCase() + item.slice(1)
);
console.log(capitalizeArray);

/* Task 9: From an array of objects representing cars:
Create a new array with a string in the format "Brand - Model" for each car.
Expected Output: ["Toyota - Camry", "Honda - Civic"] */

const cars = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Honda", model: "Civic" },
];
const cars2 = cars.map((item) => `${item.brand} - ${item.model}`);
console.log(cars2);

/* Task 10: Given an array of Boolean values [true, false, true], create a new array where each value is converted to its opposite (negate each value).
Expected Output: [false, true, false] */

const booleanArray = [true, false, true];
const booleanArrayOpposite = booleanArray.map((item) => !item);
console.log(booleanArrayOpposite);