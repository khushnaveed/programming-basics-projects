function wordsThatEndWithIng(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].slice(-3).toLowerCase() === "ing") {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"]));  // ["working", "ping"]
console.log(wordsThatEndWithIng(["table", "jeans", "small"]));  // []
console.log(wordsThatEndWithIng(["walking", "ing"]));  // ["walking", "ing"]