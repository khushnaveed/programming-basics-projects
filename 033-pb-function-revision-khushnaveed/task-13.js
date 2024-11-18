function countConsonants(string) {
  let numberOfConsonants = 0;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "i" &&
      string[i] !== "o" &&
      string[i] !== "u" &&
      string[i] !== " "
    )
      numberOfConsonants += 1;
  }
  return numberOfConsonants;
}

console.log(countConsonants("hello")); // 3
console.log(countConsonants("aeiou")); // 0
console.log(countConsonants("be right back")); // 8
console.log(countConsonants("JavaScript")); // 7
