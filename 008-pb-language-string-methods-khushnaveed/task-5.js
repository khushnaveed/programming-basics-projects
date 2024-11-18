// Task 5

let word = "fridge";

console.log(`Does the word ${word} contain the letter "q"?`, word.search("q"));

console.log(`Does the word ${word} contain the string "id"?`, word.search("id"));

console.log(`Does the word ${word} start with a vowel?`, word.at(0) == "a" ||  word.at(0) == "e" || word.at(0) == "i"  || word.at(0) == "o" || word.at(0) == "u" );