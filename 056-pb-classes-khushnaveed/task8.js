/* Task 8: Create a Person Class
Create a class called Person.
Add properties:
firstName (e.g., "John")
lastName (e.g., "Doe")
age (e.g., 25)
Add methods:
getFullName() - This method should return the person's full name (firstName + lastName).
celebrateBirthday() - This method should increase the age by 1 and return a birthday message like "Happy Birthday! You are now [age] years old." */

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  celebrateBirthday() {
    this.age += 1;
    return `Happy Birthday! You are now ${this.age} years old.`
  }
}

const person = new Person("kbn" , "naveed" , 27)

console.log(person.getFullName());
console.log(person.celebrateBirthday());