/* Create an array that holds the names of five of your friends.
Perform the following actions:
Add a new friend to the end of the array.
Remove the first friend from the array.
Print the third friend in the array.
Print the length of the array. */

let names = ["ana", "khush", "rebecca", "john", "ben"];
console.log(names);

names.push("anthony");
console.log(names);

names.shift();
console.log(names);

console.log(names[2]);

console.log(names.length);