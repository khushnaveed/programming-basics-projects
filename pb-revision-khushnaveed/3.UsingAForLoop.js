/* Create a for loop that prints the numbers from 1 to 15.
Modify the loop to print only odd numbers between 1 and 15.
Inside the loop, multiply each odd number by 3 and log the result to the console. */

for (let i = 1; i <= 15; i++) {
    if(i % 2 == 1)
        console.log(i*3);
}