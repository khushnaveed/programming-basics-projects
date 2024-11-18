function durationInHours(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(Math.trunc(array[i] / 60));        
    }
    return newArray;
}

console.log(durationInHours([120, 60, 80, 90, 100]));  // [2, 1, 1, 1, 1]
console.log(durationInHours([50, 20, 180]));  // [0, 0, 3]