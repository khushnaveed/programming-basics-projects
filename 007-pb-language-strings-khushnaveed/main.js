/**
 * Task 1
 *
 * Using the bracket notation, print the initial of each word in the sentence below
 * to the console.
 *
 * Use a single console.log()
 *
 * Expected output: I w a d a s n
 *
 */

const sentence = "It was a dark and stormy night";
const separateWord = sentence.split(" ");
console.log(separateWord[0][0], separateWord[1][0], separateWord[2][0], separateWord[3][0], separateWord[4][0], separateWord[5][0], separateWord[6][0]);

/**
 * Task 2
 *
 * There 4 constant variables containing the pieces of a famous song's lyrics.
 *
 * Create a new constant variable containing the 4 pieces concatenated together
 * and then print the result to the console
 *
 * Expected output: What would you think if I sang out of tune?
 *
 * (Pay attention to the spaces)
 *
 */

const lyricsPart1 = "What";
const lyricsPart2 = "would you think";
const lyricsPart3 = "if I sang";
const lyricsPart4 = "out of tune?";

console.log(lyricsPart1, lyricsPart2, lyricsPart3, lyricsPart4);
/**
 * Task 3
 *
 * Solve Task 2 again, this time using a template literals (the string with backticks).
 *
 * Create a new variable for it
 *
 */

const lyrics = `${lyricsPart1} ${lyricsPart2} ${lyricsPart3} ${lyricsPart4}`;
console.log(lyrics);

/**
 * Task 4
 *
 * Using the bracket notation get the initial of the words in the sentence below
 * to form the string "hello".
 *
 * Concatenate these initials and assign them to a new variable called "greeting"
 *
 * Print the result to the console
 *
 * Expected output: hello
 */

const words = "here everyone likes lemons and oranges";
const separateWords = words.split(" ");
/* console.log(separateWords);
const first = separateWords.at(0);
const second = separateWords.at(1);
const third = separateWords.at(2);
const fourth = separateWords.at(3);
const fifth = separateWords.at(5);
console.log(first.at(0) + second.at(0) + third.at(0) + fourth.at(0) + fifth.at(0)); */
console.log(separateWords[0][0] + separateWords[1][0]+ separateWords[2][0] + separateWords[3][0] + separateWords[5][0]);


/**
 * Task 5
 *
 * Create 3 variables containing:
 * - your name
 * - your country of origin
 * - the city you live in
 *
 * Use template literals (the backticks) to form a sentence and print it to the console
 *
 * Example output: Hello, my name is Carlo, I come from Italy and I live in Berlin.
 *
 */

let firstName = "Khush Bakht";
let country = "Pakistan";
let city = "Berlin";

const wholeSentance = `Hello, my name is ${firstName}, I came from ${country} and I live in ${city}.`;
console.log(wholeSentance);