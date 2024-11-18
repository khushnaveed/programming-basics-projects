/*
 Task 4
 */

const cities = [
  "Berlin",
  "London",
  "Messina",
  "Los Angeles",
  "Madrid",
  "Tokyo",
  "Sidney",
  "New Delhi",
  "La Plata",
];

for (let i = 0; i < cities.length; i++) {
  if (cities[i].includes("L") || cities[i].includes("l")) {
    console.log(cities[i]);
  }
}
