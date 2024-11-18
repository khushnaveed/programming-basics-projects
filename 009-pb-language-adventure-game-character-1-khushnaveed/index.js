import readlineSync from "readline-sync";

console.log("Welcome brave adventurer!");
console.log("");
const characterName = readlineSync.question("What is your name? ");

console.log(">", characterName);
console.log("");
const characterType = readlineSync.question(`And tell me, ${characterName}, are you a warrior or a wizard? `);
console.log(">", characterType);
console.log("");
const characterAge = readlineSync.question(`How old are you, ${characterName} the ${characterType}? `);
console.log(">", characterAge);
console.log("");
const characterWeapon = readlineSync.question(`Which weapon you like to use in a fight? `);
console.log(">", characterWeapon);
console.log("");
console.log("So, just to recap:");
console.log("");
console.log("Name:", characterName);
console.log("Type:", characterType);
console.log("Age:", characterAge);
console.log("Weapon:", characterWeapon);
console.log("");
console.log("Have fun on your adventure!");