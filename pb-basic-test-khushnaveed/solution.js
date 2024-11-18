// Create your solutions here

// Task 1
console.log("task 1");

function startsWithLosOrNew(string) {
    return string.slice(0,3).toLowerCase() === "los" || string.slice(0,3).toLowerCase() === "new";
}

console.log(startsWithLosOrNew("New York"));  // true
console.log(startsWithLosOrNew("newark"));  // true 
console.log(startsWithLosOrNew("London"));  // false
console.log(startsWithLosOrNew("Los Angeles"));  // true
console.log(startsWithLosOrNew("lOs Angeles"));  // true
console.log(startsWithLosOrNew("San Carlos"));  // false
console.log("__________________________________\n");

// Task 2 

console.log("task 2");

function isDivisibleBy100(integer) {
    return integer % 100 === 0;
}

console.log(isDivisibleBy100(1));  // false
console.log(isDivisibleBy100(1000));  // true
console.log(isDivisibleBy100(100));  // true
console.log("__________________________________\n");

// Task 3
console.log("task 3");

function isRaining(boolean) {
    return boolean ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}

console.log(isRaining(true));  // 'wet day - you need an umbrella'
console.log(isRaining(false));  // 'dry day - leave your umbrella at home'
console.log("__________________________________\n");

// Task 4
console.log("task 4");

function powerOf(integer) {
    /* let intPower = 1;
   for (let i = 0; i < integer; i++) {
    intPower *= integer;
   }
   return intPower; */
   return Math.pow(integer, integer);
}

console.log(powerOf(2));  // 4 
console.log(powerOf(3));  // 27
console.log(powerOf(4));  // 256
console.log(powerOf(5));  // 3125
console.log("__________________________________\n");

// Task 5
console.log("task 5");

function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

console.log(range(5, 10));  // [ 5, 6, 7, 8, 9, 10 ] 
console.log(range(10, 16));  // [ 10, 11, 12, 13, 14, 15, 16 ] 
console.log(range(1, 6));  // [ 1, 2, 3, 4, 5, 6 ] 
console.log(range(0, 3));  // [ 0, 1, 2, 3 ] 
console.log("__________________________________\n");
