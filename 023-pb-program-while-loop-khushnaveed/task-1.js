/**
 * Task 1
 */

const items = ["pen", "chair", "cup", "laptop", "glass", "book"];

let i = 3;
while (items.length > 3) {
  items.pop();
  console.log("The item book was removed from the list.");
}

console.log("Remaining Items :", items);
