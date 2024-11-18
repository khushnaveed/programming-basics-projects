/* Destructure the username, email, and city properties into individual variables. */

const user = {
  username: "johndoe",
  info: {
    email: "johndoe@example.com",
    address: {
      city: "Los Angeles",
      state: "CA",
    },
  },
};

let {
  username,
  info: {
    email,
    address: { city },
  },
} = user;

console.log(username);
console.log(email);
console.log(city);