/* Create an array of your five favorite foods.
Use a for loop to print each food in the array.
Modify the loop to print each food in uppercase.
Use a while loop to print each food, starting from the last item going backwards. */

let foods = ["fries", "pizza", "cake", "salad", "pasta"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i].toUpperCase());
}

console.log("__________\n");

let a = foods.length -1;
while ( a >= 0) {
  console.log(foods[a]);
  a--;
}
