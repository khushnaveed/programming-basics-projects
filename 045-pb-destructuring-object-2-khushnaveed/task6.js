/* Destructure the second element into a variable.
Assign default values of 50 and 60 to the first and third elements, respectively, while skipping the second. */

const scores = [45, 78];

let [, second] = scores;
console.log(second);

let [first = 50, , third = 60] = scores;
console.log(first);
console.log(third);