/*  Write a function that returns an array with three values: a name, an age, and a country. Use array destructuring to extract these values when calling the function.
 */


const obj ={
    name: "khush",
    age: 27,
    country: "Germany",
};

function arrayVal({name, age, country}) {
    let array = [name, age, country]
    return array;
}

console.log(arrayVal(obj));