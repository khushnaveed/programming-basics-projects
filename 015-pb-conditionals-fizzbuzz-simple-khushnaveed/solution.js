let myNum = 11;

/* switch (true) {
  case myNum % 3 == 0 && myNum % 5 == 0:
    console.log("FizzBuzz");
    break;

  case myNum % 5 == 0:
    console.log("Buzz");
    break;

  case myNum % 3 == 0:
    console.log("Fizz");
    break;

  default:
    console.log(myNum);
}
 */

if (myNum % 3 === 0 && myNum % 5 === 0) {
  console.log("fIZZbUZZ");
} else if (myNum % 5 === 0) {
  console.log("BUzz");
} else if (myNum % 3 === 0) {
  console.log("Fizz");
} else console.log("invlaid number!");

console.log(process);