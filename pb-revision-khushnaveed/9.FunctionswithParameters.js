/* Write a function that takes two parameters, firstName and lastName, and returns the full name as a single string.
Write a function that takes two numbers as parameters and returns their sum.
Write a function that accepts a number as a parameter and prints all numbers from 1 up to that number using a for loop. */

function func1(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(func1("khush", "bakht"));


function func2(num1, num2) {
    return num1 + num2;
}
console.log(func2(5,5));


function func3(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }   
}
func3(4);