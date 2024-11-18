// Task 3

let firstName = "jimmy";
let lastName = "cORRigAn";
let city = "LONDON";
let job = "painter";

firstName = firstName.at(0).toUpperCase() + firstName.toLowerCase().slice(1);
lastName = lastName.at(0).toUpperCase() + lastName.toLowerCase().slice(1);
city = city.at(0).toUpperCase() + city.toLowerCase().slice(1);
job = job.at(0).toUpperCase() + job.toLowerCase().slice(1);

console.log("First name: ", firstName);
console.log("Last name:", lastName);
console.log("City:", city);
console.log("Job:", job);