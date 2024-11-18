import readlineSync from "readline-sync";

let randomNumber; // this a random number computer will generate
let randomNumberGuess; // this is from the user
let availableGuesses = 0; //
let totalGuesse = 5; //5 is the number of gueeses user have


while(availableGuesses < totalGuesse) {

  randomNumber = Math.floor(Math.random() * 5);
  console.log(randomNumber);

  randomNumberGuess = readlineSync.question("Enter a number between 1 and 5: ");

  if(randomNumberGuess == randomNumber){
    console.log("Your guess:", randomNumber);
    console.log("original:", randomNumber);
    console.log("Congratulations! you won!");
    break;
  
  } else if (randomNumberGuess !== randomNumber && randomNumberGuess < randomNumber) {
    console.log("Your guess:", randomNumberGuess);
    console.log("original:", randomNumber);
    console.log("Wrong! Try with a higher number");
    availableGuesses++;
    console.log("Remaining guesses:", totalGuesse-availableGuesses);
    console.log("___________________________________");

  } else if (randomNumberGuess !== randomNumber && randomNumberGuess > randomNumber) {
    console.log("Your guess:", randomNumberGuess);
    console.log("original:", randomNumber);
    console.log("Wrong! Try with a lower number");
    availableGuesses++;
    console.log("Remaining guesses:", totalGuesse-availableGuesses);
    console.log("___________________________________");
  }

}
