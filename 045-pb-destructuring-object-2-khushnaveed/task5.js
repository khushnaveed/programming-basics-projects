/* Destructure the productName and manufacturer properties into variables.
Destructure the warranty object, with a default value of "1 year" for the period property if it's missing. */

const product = {
  productName: "Laptop",
  details: {
    manufacturer: "Tech Corp",
    warranty: { period: "2 years" },
  },
};

let {
  productName,
  details: {
    manufacturer,
    warranty: { period = "1 year" },
  },
} = product;


console.log(productName);
console.log(manufacturer);
console.log(period);