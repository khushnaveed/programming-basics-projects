const isItemInArray = function(array, item) {
   return array.includes(item);
}


console.log(isItemInArray(["apple", "pear", "banana"], "kiwi")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "mango")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "apple")); // true
