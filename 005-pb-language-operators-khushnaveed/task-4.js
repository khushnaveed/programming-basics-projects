/*
Task 4

*/
let coin = 1;
let pieces = 10;
let nephews = 3;
let allNephewsCoins = 0;
let remainingCoins = 0;

let eachNephewsCoins = Math.floor(pieces / nephews);
allNephewsCoins = eachNephewsCoins*3;

remainingCoins = pieces % allNephewsCoins ;

console.log(`Coins each nephew will get ${eachNephewsCoins}`);
console.log(`Coins Uncle Brook will get ${remainingCoins}`);