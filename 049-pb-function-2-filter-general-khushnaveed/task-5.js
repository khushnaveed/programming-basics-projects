const products = [
  {
    type: "t-shirt",
    color: "white",
    price: 19.99,
  },
  {
    type: "jeans",
    color: "blue",
    price: 39,
  },
  {
    type: "hat",
    color: "red",
    price: 9,
  },
  {
    type: "t-shirt",
    color: "yellow",
    price: 19,
  },
  {
    type: "t-shirt",
    color: "red",
    price: 29,
  },
{
    type: "jeans",
    color: "blue",
    price: 19,
  },
  {
    type: "shirt",
    color: "yellow",
    price: 19,
  },
  {
    type: "shoes",
    color: "green",
    price: 49,
  },
  {
    type: "sandals",
    color: "brown",
    price: 12,
  },
  {
    type: "jeans",
    color: "grey",
    price: 22,
  },
  {
    type: "hat",
    color: "red",
    price: 19,
  },
];


/*
Use filter() so that the variable `tShirtsCheaperThan10` contains
only t-shirts that cost less than 10
*/

const tShirtsCheaperThan10 = products.filter((products) => products.type === 't-shirt' && products.price < 10);
console.log("t-shirts cheaper than 10:", tShirtsCheaperThan10);