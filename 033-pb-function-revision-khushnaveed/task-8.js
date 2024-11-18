function onlyLongWords(string) {
    let returnString = [];
    let newString = string.split(" "); 
    for (let i = 0; i < newString.length; i++) {
        if (newString[i].length >=5)
            returnString.push(newString[i]);        
    }
    return returnString.join(" ");
}

console.log(onlyLongWords("Welcome to Wikipedia the free encyclopedia that anyone can edit"));  // "Welcome Wikipedia encyclopedia anyone"
console.log(onlyLongWords("The cat is on the table"));  // "table"
console.log(onlyLongWords("not many long ones here"));  // ""