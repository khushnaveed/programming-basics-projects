/*
Task 2

Create 3 functions called:

- isDivisbleBy3: it takes a number in input and returns:
    - `true`: if the number is divisible by 3
    - `false`: if the number is not divisible by 3
- isDivisbleBy5: same, with number 5
- isDivisbleBy7: same, with number 7

Call the functions with different values and output the result
to the console


For example:
isDivisbleBy3(9);  // true
isDivisbleBy3(8);  // false

isDivisbleBy5(9);  // false
isDivisbleBy5(10);  // true

isDivisbleBy7(21);  // true
isDivisbleBy7(10);  // false

**NOTE**: to know if a number is divisible by another number,
you have to check if the remainder of the division is equal to 0
*/

function isDivisbleBy3(number){
 return number % 3 === 0 ? true : false;
}

function isDivisbleBy5(number) {
 return number % 5 === 0 ? true : false;
}

function isDivisbleBy7(number) {
 return number % 7 === 0 ? true : false;
}

console.log(isDivisbleBy3(9));   
console.log(isDivisbleBy3(8));  

console.log(isDivisbleBy5(9));  
console.log(isDivisbleBy5(10));  

console.log(isDivisbleBy7(21));  
console.log(isDivisbleBy7(10));   