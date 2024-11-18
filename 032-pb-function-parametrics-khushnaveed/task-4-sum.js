const sum = (...arg) => {
    let sumResult = 0;
    for (let i = 0; i < arg.length; i++) {
        sumResult+= arg[i];
    }
    return sumResult;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70