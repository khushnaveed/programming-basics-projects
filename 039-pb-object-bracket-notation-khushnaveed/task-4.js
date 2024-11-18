const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"],
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys = ["type", "brand", "id", "material", "details"];

for (let i = 0; i < keys.length; i++) {
  if (keys[i] in product) {
    console.log(keys[i], ": ", product[keys[i]]);
  } else {
    console.log(`The product doesn't have a "${keys[i]}" property`);
  }
}
