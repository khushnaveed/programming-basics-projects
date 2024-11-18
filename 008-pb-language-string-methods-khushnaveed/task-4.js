// Task 4

let word = "JavaScript";



console.log(`Does the word ${word} start with the letter "c"?`, (word.toLowerCase().at(0) || word.toUpperCase().at(0)) == "c");
console.log(`Does the word ${word} start with the letter "j"?`, (word.toLowerCase().at(0) || word.toUpperCase().at(0)) == "j");

console.log(`Does the word ${word} end with the letter "y"?`, (word.toLowerCase().at(word.length-1) || word.toUpperCase().at(0)) == "y");
console.log(`Does the word ${word} end with the letter "t"?`, (word.toLowerCase().at(word.length-1) || word.toUpperCase().at(0)) == "t");

console.log(`Are the first 4 letters in the word ${word} equal to "abcd"?`, (word.toLowerCase().substring(0,4) || word.toUpperCase().at(0)) == "abcd");
console.log(`Are the first 4 letters in the word ${word} equal to "java"?`, (word.toLowerCase().substring(0,4) || word.toUpperCase().at(0)) == "java");

console.log(`Are the last 5 letters in the word ${word} equal to "cript"?`, (word.toLowerCase().substring(5) || word.toUpperCase().at(0)) == "cript");