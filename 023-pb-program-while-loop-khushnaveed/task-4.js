/**
 * Task 4
 */

let pin = "";
let characters = "abcdefghijklmnopqrstuvwxyz!+?*";
let randomNumber;

for (let i = 1; i <= 6; i++) {
  randomNumber = Math.floor(Math.random() * 30);

  while (pin.includes(characters[randomNumber])) {
    randomNumber = Math.floor(Math.random() * 30);
  }
  pin = pin + characters[randomNumber];
}

console.log(pin);
