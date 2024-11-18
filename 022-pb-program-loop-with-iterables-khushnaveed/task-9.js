/*
Task 9

Given an array containing a list of prices, use a loop to add 
the euro sign € after each value

- save the modified values to a new array
- print the result to the console

Expected output:
[ '9.99€', '12.5€', '120€', '748€', '2.99€', '500€' ]
 */

const prices = [9.99, 12.5, 120, 748, 2.99, 500];

let euroPrice = [];

for (let i = 0; i < prices.length; i++) {
  euroPrice.push(prices[i] + `€`);
}

console.log(euroPrice);
