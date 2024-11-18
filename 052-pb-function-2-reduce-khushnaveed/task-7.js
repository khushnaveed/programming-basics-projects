/*
 Task 7
 */

const prices = ["19€", "109€", "60€", "12€"];

const price = prices.reduce((accumulator, item) => {
  let Price1 = parseInt(item.replace("€", ""));
  return accumulator + Price1;
}, 0);

console.log(price);

/* return acc + Number (currentPrice.replace ('€', '')); */

