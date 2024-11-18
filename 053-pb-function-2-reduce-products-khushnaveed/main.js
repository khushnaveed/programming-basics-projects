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
Task 1 

Use the `reduce()` method to get the total price of all the
products in the array
*/

let totalPrice = products.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log("Total price:", totalPrice);

/*
Task 2 

Use the `reduce()` method to get the total price of all the 
`red` products in the array 
*/

const redProducts = products.reduce((acc, product) => {
  return product.color === "red" ? acc + product.price : acc;
}, 0);

console.log("Red products:", redProducts);

/*
Task 3 

Use the `reduce()` method to count how many `jeans` are in 
the products array
*/

const jeansProducts = products.reduce((acc, product) => {
  return product.type === "jeans" ? acc + 1 : acc;
}, 0);

console.log("Jeans products:", jeansProducts);

/*
Task 4 

Use the `reduce()` method to count how many products that 
cost more than 15 there are
*/
null
const expensiveProductsCount = products.reduce((acc, product) => {
  return product.price > 15 ? acc + 1 : acc;
}, 0);

console.log("Products that cost more than 15€:", expensiveProductsCount);