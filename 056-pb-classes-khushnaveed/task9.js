/* Task 9: Create a Calculator Class
Create a class called Calculator.
Add a property:
result (starts at 0)
Add methods:
add(number) - This method should add the given number to result.
subtract(number) - This method should subtract the given number from result.
multiply(number) - This method should multiply result by the given number.
divide(number) - This method should divide result by the given number (ensure no division by zero).
reset() - This method should reset result to 0. */

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    return this.result += number;
  }

  subtract(number) {
    return this.result -= number;
  }

  multiply(number) {
    return this.result *= number ;
  }
  divide(number) {
    return number == 0 ? "No division by 0" : this.result /= number;
  }

  reset() {
    this.result = 0;
  }
}

const calculate = new Calculator();

console.log(calculate.add(100));
console.log(calculate.add(100));
console.log(calculate.subtract(5));
console.log(calculate.divide(5));
console.log(calculate.multiply(4));
calculate.reset();
