/* Destructure the array of users and extract the id and name from the first user into separate variables. */

const data = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
};

let { id, name } = data.users[0];

console.log(id);
console.log(name);

