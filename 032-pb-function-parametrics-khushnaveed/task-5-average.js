const average = (...arg) => {
  let averageResult = 0;
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  averageResult = sum / arg.length;
  return averageResult;
};

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14
