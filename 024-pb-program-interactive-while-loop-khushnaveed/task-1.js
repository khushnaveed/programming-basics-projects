import readlineSync from "readline-sync";

let result = 0;
let input;

do {
  input = +readlineSync.question("Type any number to add: ");
  if (input > 0) {
    result = result + input;
  }
} while (!(input < 0));

console.log("The total is: ", result);
