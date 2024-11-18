/* Create an array of 10 numbers.
Use a for loop to calculate the sum of all numbers in the array.
Use a while loop to print only the numbers greater than 5 from the array. */

let array = [5, 6, 7, 8, 9, 10, 11, 15, 1, 4];

let sum = 0;
for (let i = 0; i < array.length; i++) {
   sum = sum + array[i];
}
console.log(sum);

let a = 0;
let number = [];
while (a < array.length ) {
    if(array[a] > 5)
        number.push(array[a]);

    a++;
}

console.log(number);