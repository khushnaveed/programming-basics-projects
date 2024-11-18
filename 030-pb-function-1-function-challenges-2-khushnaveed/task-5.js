const removeVowels = (string) => {
  let vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result = result + string[i];
    }
  }
  return result;
};

console.log(removeVowels("table")); // "tbl"
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"
