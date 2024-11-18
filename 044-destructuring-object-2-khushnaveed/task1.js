/* Destructure the name and age properties into individual variables.
Assign a default value of "Unknown" to the city property in case it's not present in the object. */

const person = { 
    name: "Alice", 
    age: 25, 
    city: "New York", 
    occupation: "Engineer" 
};

let {name, age, city = "Unknown"} = person;

console.log(name);
console.log(age);