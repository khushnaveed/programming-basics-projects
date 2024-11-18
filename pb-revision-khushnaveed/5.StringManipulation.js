/* Create a string that contains a sentence about your favorite hobby (e.g., "I love playing basketball").
Use string methods to:
Convert the entire string to lowercase.
Find and print the length of the string.
Extract the word "basketball" from the string (or the word of your hobby).
Replace the word "playing" with "enjoying". */

let sentence = "I love playing basketball";

console.log(sentence.toLowerCase());

console.log(sentence.length);

let hobby = sentence.substring(sentence.indexOf("basketball"), sentence.indexOf("basketball") + "basketball".length);
console.log(hobby);

console.log(sentence.replace("playing", "enjoying"));