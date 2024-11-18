function addLeadingZero(array) {
    let arrayString = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].toString().length == 1){
            arrayString.push('0'+ array[i]);
        }
        else{
            arrayString.push(array[i].toString());
        }        
    }
    return arrayString;
}

console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12])); //  ["00", "01", "02", "03", "10", "11", "12"]
console.log(addLeadingZero([1, 100]));  // ["01", "100"]
console.log(addLeadingZero([1, 2, 3]));  // ["01", "02", "03"]