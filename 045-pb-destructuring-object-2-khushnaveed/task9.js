/* Write a function that accepts an object representing a student with properties name, age, and subjects. Destructure the name and age, and use the rest operator to collect the remaining properties into a new object inside the function. */

const student = {
  name: "abc",
  age: 20,
  subjects: ["Programming", "english", "data science"],
};

function data({ name, age, ...rest }) {
  console.log(name);
  console.log(age);
  console.log(rest);
}

data(student);
