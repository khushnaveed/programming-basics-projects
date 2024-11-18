/* Destructure the title, author, and price properties into separate variables.
Use the rest operator to collect the remaining properties into a new object. */

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction",
  price: 10,
};

let { title, author, price, ...rest } = book;

console.log(title);
console.log(author);
console.log(price);
console.log(rest);
