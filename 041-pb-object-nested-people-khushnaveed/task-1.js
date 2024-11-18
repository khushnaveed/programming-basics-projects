/* 
Task 1

Given the object below
*/

let person = {
  name: "Petra Morin",
  address: {
    delivery: {
      street: "371-7636 Nulla Road",
      zip: "83-315",
      country: "Germany",
    },
    billing: {
      street: "123-999 Fake Street",
      zip: "12345",
      country: "Germany",
    },
  },
  hobbies: ["drums", "skating", "comics"],
  languages: [
    {
      name: "German",
      level: 5,
    },
    {
      name: "English",
      level: 4,
    },
    {
      name: "Spanish",
      level: 2,
    },
  ],
};

/*
Task 1.1

Print the zip code of the billing address to the console

Expected output:

12345
*/

console.log(person.address.billing.zip);

/*
Task 1.2

Print the last of the hobbies

Expected output:
comics
*/

console.log(person.hobbies[person.hobbies.length-1]);

/*
Task 1.3

Print the name and the level of the second spoken language 

Expected output:
English: 4
*/

console.log(person.languages[1].name + ': ' + person.languages[1].level);

/*
Task 1.4

Print all the information relative to the delivery address.

Expected output:
Street: 371-7636 Nulla Road
Zip: 83-315
Country: Germany
*/

for (const items in person.address.delivery) {
  console.log(items, ': ' , person.address.delivery[items]);
}

/*
Task 1.5

Using a loop, print all the hobbies, each on a separate line

Expected output:
Hobbies: 
- drums
- skating
- comics
*/
console.log("\nHobbies:");
for (let i = 0; i < person.hobbies.length; i++) {
  console.log(person.hobbies[i]);
}

/*
Task 1.6

Using a loop, list all known languages with a level smaller than 5, together with their 
level.

Expected output:

English: 4
Spanish: 2
*/


for (const key in person.languages) {
  if(person.languages[key].level < 5)
    console.log(person.languages[key].name + ': ' + person.languages[key].level);
}