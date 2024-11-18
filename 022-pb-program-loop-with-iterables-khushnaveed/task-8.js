/*
 Task 8
 */

const quote = "Possessions never meant anything to me";
const vowels = "aeiou";

for (let i = 0; i < quote.length; i++) {
  for (let a = 0; a < vowels.length; a++) {
    if (quote[i].includes(vowels[a])) {
      console.log(quote[i]);
    }
  }
}
