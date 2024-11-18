/* Write a function that accepts two numbers and a third optional parameter operation (default to "add"). If the operation is "add", return the sum; if it's "subtract", return the difference.
Call the function for both "add" and "subtract" cases to see the results. */

function calculate(num1, num2, operation = 'add') {
    if (operation == 'add'){
        return num1 + num2;
    }else if(operation == 'subtract'){
        return num1 - num2;
    }
}

console.log(calculate(1,2));
console.log(calculate(1, 2, 'subtract'));
console.log(calculate(1, 2, 'add'));