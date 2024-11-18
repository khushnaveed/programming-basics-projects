/*
 Task 6
 Use the reduce() method to combine the strings together and get an output like this:

Fruit salad: banana - apple - kiwi - mango - strawberries
 */

const fruits = ["banana", "apple", "kiwi", "mango", "strawberries"];

const newString = fruits.reduce((accumulator, items) => {
    if(accumulator){
        return accumulator + ' - ' + items;
    }
    return accumulator + items;
}, "");

console.log(`Fruit Salad: ${newString}`);