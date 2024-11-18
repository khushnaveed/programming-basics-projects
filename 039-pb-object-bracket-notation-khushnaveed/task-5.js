const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const newKey = "material";
const newValue = "wool";

product.material = newValue;
console.log(product);

let keys = Object.keys(product);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], ': ', product[keys[i]]);  
}