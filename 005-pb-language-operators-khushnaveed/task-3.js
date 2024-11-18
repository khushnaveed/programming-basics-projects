/*
Task 3
*/

let videoGamePrice = 59;
let birthdayPresent = 10;
let moneyTotal = 36;
const savings = Math.random() * 10;
const pocketMoney = Math.random() * 15;

let Total = savings + pocketMoney + birthdayPresent;

console.log(`I have a total of ${moneyTotal}€`);
console.log(`The videogame costs ${videoGamePrice}€`);
console.log(`Can I afford to buy the videogame? ${moneyTotal < Total}`);
