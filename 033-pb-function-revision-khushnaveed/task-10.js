function cutStrings(array, number) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].slice(0, number) + '...');     
    }
    return newArray;
}

console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10));  // ["Hello my n...", "Today is q...", "Cats are t...", "This movie..."]
console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2));  // ["He...", "To...", "Ca...", "Th..."]