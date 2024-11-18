/* Create a while loop that counts up from 1 to 20 and prints each number.
Modify the loop to stop when the number reaches 13.
Create another while loop that logs the numbers from 50 down to 25.
 */

let i = 1;
while (i <= 20) {
    console.log(i);
    if(i === 13){
        break;
    }
    i++;
} 

console.log("_____________________\n");

let a = 50;
while (a >= 25) {
  console.log(a);
  a--;
}
