// Task 4

const person = {
    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};

// Add a new property fullName to the object

//person["fullName"] = person.firstName + " " + person.lastName;
person.fullName = [person.firstName, person.lastName].join(' ');
console.log(person);