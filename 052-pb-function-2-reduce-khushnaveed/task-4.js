/*
 Task 4
 */

const orders = [
  {
    id: 1,
    amount: 250,
  },
  {
    id: 2,
    amount: 400,
  },
  {
    id: 3,
    amount: 100,
  },
  {
    id: 4,
    amount: 325,
  },
];

const totalAmount = orders.reduce((accumulator, curretnValue) => {
  return accumulator + curretnValue.amount;
}, 0);

console.log(totalAmount);