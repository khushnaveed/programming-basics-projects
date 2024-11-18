/* Write a function that uses a for loop to print numbers from 1 to 10.
Inside the function, add a while loop that continues printing numbers until it reaches 20. */

function print() {

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    let a = 11;
    while (a <= 20) {
        console.log(a);
        a++;
    }
}


print();