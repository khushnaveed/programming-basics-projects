function cheaperThan(array, number) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < number){
            newArray.push(array[i]);
        }        
    }
    return newArray;
}

console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20));  // [19.99, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90));  // [19.99, 29.87, 12.99, 5.00, 2.90]
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0));  // []
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 5));  // [2.9]