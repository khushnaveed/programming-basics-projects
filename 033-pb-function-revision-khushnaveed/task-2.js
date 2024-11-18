function endsWithIng(string) {
  return string.slice(-3) === "ing" || string.slice(-3) === "ING"  ? true : false;
}

console.log(endsWithIng("hello")); // false
console.log(endsWithIng("going")); // true
console.log(endsWithIng("ALAN TURING")); // true
console.log(endsWithIng("ding ding")); // true
console.log(endsWithIng("making of")); // false
