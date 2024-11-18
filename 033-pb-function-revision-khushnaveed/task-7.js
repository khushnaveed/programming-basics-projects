function numbersDivisibleBy3(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [3, 6, 9]
console.log(numbersDivisibleBy3([2, 4, 8])); // []
console.log(numbersDivisibleBy3([9])); // [9]
