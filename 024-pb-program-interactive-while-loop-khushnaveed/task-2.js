import readlineSync from "readline-sync";

let input = "";
let animal = [
  [`cat`, `dog`, `giraffe`],
  [`Meow`, `Woof! Woof!`, `Sorry, don't know that one`],
];

do {
  input = readlineSync.question("Enter an animal: ");

  let i = 0;

  while (i < animal[0].length) {
    if (input === animal[0][i]) {
      console.log(animal[1][i]);
      break;
    }
    i++;
  }
  
} while (!(input == "STOP"));
