import readlineSync from "readline-sync";

const greetings = ["hi", "hello", "hola"];
let input;
let len = greetings.length;
let randomNumber;

do {
  input = readlineSync.question("Enter a name: ");

  if (input !== "STOP" && input !== "") {
    randomNumber = Math.floor(Math.random() * len);
    console.log(greetings[randomNumber] + ", " + input);
  } 

} while (!(input == "STOP"));
