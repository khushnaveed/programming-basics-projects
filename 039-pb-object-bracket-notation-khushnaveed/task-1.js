const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

let key = "color";
console.log(product[key]);

/* Bonus:
What happens if you use a property name that doesn't exist in the object? What is the output? */

let key2 = "size";
console.log(product[key2]); 