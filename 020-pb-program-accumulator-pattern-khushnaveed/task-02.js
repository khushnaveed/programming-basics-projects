/**
 * Task 2 
 * 
 * Use a loop to create a string with the numbers from 0 to 9, then print it to
 * the console
 * 
 * Expected output:
 * 0123456789
 */


let numberString = "";

for(let i = 0; i < 10 ; i++){
    numberString+=i;
}

console.log(numberString);