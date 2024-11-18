/**
 * Task 3
 *
 * Use a loop to create a string with only the even numbers between 0 to 9, then print it to
 * the console
 *
 * Expected output:
 * 02468
 */

let evenString = "";

for (let i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    evenString += i;
  }
}

console.log(evenString);