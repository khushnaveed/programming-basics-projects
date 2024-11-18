const howManyArgs = (...howManyArgs) => {
    return howManyArgs.length;
};

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1