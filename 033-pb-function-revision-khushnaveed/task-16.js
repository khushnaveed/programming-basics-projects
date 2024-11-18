function sumEvenOdd(array) {
    let newArray = [];
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            sumEven = sumEven + array[i];
        } else{
            sumOdd = sumOdd + array[i];
        }        
    }
    newArray.push(sumEven);
    newArray.push(sumOdd);

    return newArray;
}

console.log(sumEvenOdd([1, 2, 3, 4, 5, 6]));   // [12, 9]
console.log(sumEvenOdd([0, -2, 11]));   // [-2, 11]
console.log(sumEvenOdd([1, 3, 15]));   // [0, 19]