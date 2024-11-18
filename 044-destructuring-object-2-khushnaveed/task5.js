/* Write a function that accepts an object with the properties title, author, and year. Use destructuring in the function's parameter list to extract these values and log them. */

const obj = {
    title: "abc",
    author: "xyz",
    year: 2024,
    abc: 21,
};

function function1({title, author, year}) {
    console.log(title);
    console.log(author);
    console.log(year);
}

function1(obj);