/*
Task 1

Create some objects (at least 3) for different animals:

- a cat
- a dog
- a fish
- a bird
- whatever else you want

For each animal, add the following properties:

- `type`: the type of animal
- `name`: the name of the animal
- `color`: the color of the animal

*/

const catobj = {
    type : "persian",
    name : "leo",
    color : "light grey",
    describe,
};

const dogobj = {
    type : "libra",
    name : "buddy",
    color : "light brown",
    describe,
}

const birdobj = {
    type : "owl",
    name : "smarty",
    color : "black",
    describe,
}

console.log(catobj);
console.log(birdobj);
console.log(dogobj);

/*
Task 2

Create a function `describe` and add it as a method to every animal you created.

The function returns a description of the animal.

For example:
Missy is a blue fish
*/

function describe() {
    return `${this.name} is a ${this.color} ${this.type}`;
}

console.log(catobj.describe());
console.log(dogobj.describe());
console.log(birdobj.describe());


/*
Task 3

Add a method `speak` to each animal which returns a different 
sound depending on the animal  

For example:
console.log(dog.speak()); // woof woof
console.log(cat.speak()); // meow
console.log(fish.speak()); // blub blub

*/

catobj.speak = function(){
    return "meow!";
}

dogobj.speak = function(){
    return "woof!";
} 

birdobj.speak = function(){
    return "hoot!"
}

console.log(catobj.speak());
console.log(dogobj.speak());
console.log(birdobj.speak());