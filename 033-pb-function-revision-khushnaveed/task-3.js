function startsWithThe(string) {
    let newString = string.slice(0,3).toLowerCase();
    return newString.slice(0,3) === "the" ? true : false;
  }

console.log(startsWithThe("hello")); // false
console.log(startsWithThe("theremin"));//  true
console.log(startsWithThe("The Clash"));  // true
console.log(startsWithThe("ding ding"));  // false 
console.log(startsWithThe("making of"));  // false