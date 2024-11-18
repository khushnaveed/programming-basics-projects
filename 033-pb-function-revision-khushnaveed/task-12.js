function reverseWords(array) {
    let newString = [];
    for (let i = 0; i < array.length; i++) {
        newString.push(array[i].split('').reverse().join(''));
    }
    return newString;
}

console.log(reverseWords(["cat", "shoe", "one", "sos", "hello"]));  // ["tac", "eohs", "eno", "sos", "olleh"]