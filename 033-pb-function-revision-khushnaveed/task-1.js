function isNumberInRange(number, min, max) {
  return number > min && number < max ? true : false;
}
console.log(isNumberInRange(2, 0, 5)); // true
console.log(isNumberInRange(10, 0, 5)); // false
console.log(isNumberInRange(100, 50, 500)); // true
console.log(isNumberInRange(-1, -50, 50)); // true
console.log(isNumberInRange(0, -50, 50)); // true
