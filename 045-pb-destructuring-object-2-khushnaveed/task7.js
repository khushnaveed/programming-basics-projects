/* Call the function by passing an object that includes price and tax, and destructure those parameters inside the function to compute and return the total amount (price + tax - discount).
 */

const obj = { price: 50, tax: 0.5 };

function calculateTotal({ price, tax = 0.1, discount = 0 }) {
  // Implementation here
  let total = price + tax - discount;
  return total;
}

console.log(calculateTotal(obj));
