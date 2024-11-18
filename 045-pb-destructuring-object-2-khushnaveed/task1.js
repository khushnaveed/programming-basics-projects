/* Destructure the fullName property into a variable called name.
Destructure the salary property into a variable called income. */

const employee = {
  id: 101,
  fullName: "John Smith",
  department: "Sales",
  salary: 50000,
};

let { fullName: name, salary: income } = employee;

console.log(name);
console.log(income);
