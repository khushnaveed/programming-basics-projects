function isFirstLetterLowercase(string) {
    return string !== "" && string[0] === string[0].toLowerCase()
}


console.log(isFirstLetterLowercase("hello"));  // true
console.log(isFirstLetterLowercase("Hello"));  // false
console.log(isFirstLetterLowercase("Bianca"));  // false
console.log(isFirstLetterLowercase("jim"));  // true
console.log(isFirstLetterLowercase(""));  // false
console.log(isFirstLetterLowercase("A"));  // false 