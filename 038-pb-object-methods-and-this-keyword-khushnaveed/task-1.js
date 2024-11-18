// Target array
const people = []

// Source data
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"]
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"]
const ages = [18, 27, 31, 44]
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"]

// Your code here!

for (let i = 0; i < firstNames.length; i++) {
    const person = {
        firstName: firstNames[i],
        lastName: lastNames[i],
        age: ages[i],
        city: cities[i],
        fullName: `${firstNames[i]} ${lastNames[i]}`, 
        profession: "Unknown", 
    };
    
    people.push(person); // Add the person object to the people array
}

console.log(people);