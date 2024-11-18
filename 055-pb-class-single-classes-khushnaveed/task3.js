/* Create a class called Person

The class should contain the following properties:

firstName
lastName
age
city
The class should contain the following methods:

introduce(): it returns a string like "Hello, my name is Rick Sanchez and I live in Berlin"
greet(person): it takes a string with the name of person in input and returns a message like "Hello Sophie, how are you?".
Bonus

Make the greet() method so that it picks a random greeting each time. Some options are "Hi", "Hey", "Hallo", "Yo", "Good morning"...

For example:

 */
class Person {
  constructor(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }
  introduce() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I live in ${this.city}`;
  }

  greet(person) {
    const greetings = ["Hi", "Hey", "Hallo", "Yo", "Good morning"];
    const random = greetings[Math.floor(Math.random() * greetings.length)];
    return `${random} ${person}, how are you?`;
  }
}

const person1 = new Person("Thomas", "Thomson", 29, "New York");

console.log(person1.introduce()); // Hello, my name is Thomas Thomson and I live in New York
console.log(person1.greet("John")); // Hi John, how are you?
console.log(person1.greet("Sophie")); // Hello Sophie, how are you?
console.log(person1.greet("Mike")); // Hallo Mike, how are you?
