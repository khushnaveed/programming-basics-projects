/*
 Task 8
 Use the reduce() method to create a new object where users are grouped by city

{
  "New York": [
    {name: "Jake Smith", age: 20, city: "New York"},
    {name: "Pete Peterson", age: 31, city: "New York"},
    {name: "Martha Marty", age: 38, city: "New York" },
  ],
  "London": [
    {name: "Anne Annson", age: 24, city: "London"},
    {name: "Philip Flip", age: 36, city: "London"},
  ],
  "Rome": [
    {name: "Renato Romolo", age: 36, city: "Rome"},
  ],
}
 */

const users = [
  { name: "Jake Smith", age: 20, city: "New York" },
  { name: "Anne Annson", age: 24, city: "London" },
  { name: "Pete Peterson", age: 31, city: "New York" },
  { name: "Martha Marty", age: 38, city: "New York" },
  { name: "Renato Romolo", age: 36, city: "Rome" },
  { name: "Philip Flip", age: 36, city: "London" },
];

const group = users.reduce((accumulator, user) => {
  if (!accumulator[user.city]) {
    accumulator[user.city] = [];
  }
  accumulator[user.city].push(user);
  return accumulator;
}, {});


console.log(group);