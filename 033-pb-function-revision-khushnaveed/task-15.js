function countByColor(array) {
    let newArray = [];
    let redObj = 0;
    let yellowObj = 0;
    let greenObj = 0;

    for (let i = 0; i < array.length; i++) {
        const color = array[i].toLowerCase();
        
        if (color.startsWith("red")) {
            redObj++;
        } else if (color.startsWith("yellow")) {
            yellowObj++;
        } else if (color.startsWith("green")) {
            greenObj++;
        }
    }

    newArray.push(redObj);
    newArray.push(yellowObj);
    newArray.push(greenObj);

    return newArray;
}

console.log(countByColor(["Red pen", "Yellow shirt"]));  // [1, 1, 0]
console.log(countByColor(["Red pen", "Yellow shirt", "Green salad"]));  // [1, 1, 1]
console.log(countByColor(["Pink hair", "Blue sky"]));  // [0, 0, 0]
console.log(countByColor(["Yellow table", "Yellow piano", "Green guitar"]));  // [0, 2, 1