/*
Task 4

Create some objects (at least 3) for different persons, specifying:

- `name`
- `age`
- `city`
- `profession`
*/

const person1 = {
    name : "Khush",
    age : 27,
    city : "Berlin",
    profession : "Web Dev",
}

const person2 = {
    name : "Luis",
    age : 30,
    city : "Schweinfurt",
    profession : "Web Dev Pro",
}

const person3 = {
    name : "Royce",
    age : 35,
    city : "Heidelburg",
    profession : "Web Dev Pro+",
}

console.log(person1);
console.log(person2);
console.log(person3);

/*
Task 5

Add a method `introduce` to each object that returns a string
with the person introducing themselves

For example:

console.log(person1.introduce()); // My name is Steve, I am 
37 years old. I live in Tokyo where I work as a UX Designer
*/

person1.introduce = function(){
    return `My name is ${this.name}, I am ${this.age} years old. I live in ${this.city} where I work as a ${this.profession}.`;
}

person2.introduce = function(){
    return `My name is ${this.name}, I am ${this.age} years old. I live in ${this.city} where I work as a ${this.profession}.`;
} 

person3.introduce = function(){
    return `My name is ${this.name}, I am ${this.age} years old. I live in ${this.city} where I work as a ${this.profession}.`;
}

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());


/*
Task 6

Add a method `greet` to the objects from task 5.

The method should take another person object in input and it 
should return a message of one person greeting the other.

For example:

// assuming that person2 is Cindy
console.log(person1.greet(person2)); // Hello Cindy, how are you?
*/


person1.greet = function(anotherPerson){
    return `Hello ${anotherPerson.name}, how are you?`;
}

person2.greet = function(anotherPerson){
    return `Hello ${anotherPerson.name}, how are you?`;
} 

person3.greet = function(anotherPerson){
    return `Hello ${anotherPerson.name}, how are you?`;
}

console.log(person1.greet(person2));
console.log(person2.greet(person3));
console.log(person3.greet(person1));