/**
 * Task 3
 */

let pin = "";

/* let i = 1;

while (i <= 4) {
  let randomNumber = Math.floor(Math.random() * 10);
  if (!pin.includes(randomNumber)) {
    pin = pin + randomNumber;
    i++;
  }
}

console.log(pin); */

let randomNumber;

for (let i = 0; i < 4; i++) {

  randomNumber = Math.floor(Math.random() * 10);

  while (pin.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 10);
  }

  pin = pin + randomNumber;
}

console.log(pin);
