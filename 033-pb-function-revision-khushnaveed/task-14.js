function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));  //12
console.log(sumEvenNumbers([100]));  //100
console.log(sumEvenNumbers([100, 1, 3]));  //100
console.log(sumEvenNumbers([-2, 4, 3]));  //2 