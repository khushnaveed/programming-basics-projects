const getIndexOf = function (array, item) {
  return array.includes(item) ? array.indexOf(item) : "-1";
};

console.log(getIndexOf(["apple", "pear", "banana"], "kiwi")); // -1
console.log(getIndexOf(["apple", "pear", "banana"], "banana")); // 2
console.log(getIndexOf(["apple", "pear", "banana"], "apple")); // 0
