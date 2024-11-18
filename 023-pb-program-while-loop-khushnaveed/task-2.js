/**
 * Task 2
 */

let pin = "";

let i = 6;

while (pin.length < i) {
  let randomNumber = Math.floor(Math.random() * 10);
  pin = pin + randomNumber;
}

console.log(pin);
