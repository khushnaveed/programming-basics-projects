# Array
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)



## Task 01

Fix the code below so that the array animals is printed to the console


```js
const animals = "giraffe", "cat", "dog", "mouse", "koala";

console.log(animals);
```


## Task 02

Complete the code below so that:

- the output of the first `console.log()` is Julia
- the output of the second `console.log()` is Tom
- the output of the third `console.log()` is Gina


```js
const people = [];

console.log(people[0]); // Julia
console.log(people[1]); // Tom
console.log(people[2]); // Gina
```


## Task 03

Complete the code below so that:

- the first `console.log()` outputs London
- the second `console.log()` outputs Berlin


```js
const cities = ["Berlin", "Leipzig", "London", "Rome", "Tokyo"];


console.log(); // London
console.log(); // Berlin 
```


## Task 04

Complete the code so that the console.log() outputs always the last item in the array, _without mutating the original array_, no matter how long is the array.

For example:

```js
["a", "b", "c", "d", "e"] => "e"
["a", "b", "c", "d", "e", "f"] => "f"
["a", "b", "c", "d", "e", "f", "g", "h", "i"] => "i"
```
The console.log() should be only one and work for every array


```js
const letters = ["a", "b", "c", "d", "e"];

console.log(letters[]);
```


## Task 05

Complete the code below:

- if the current length of the array is odd, we push just 1 "*"" 
- if the current length of the array is even, we push 2 "*""

In the end, the new array should always have an even number of items


```js
const array = ["*", "*", "*", "*", "*"];

let newArrayLength = ? array.push("*"): array.push("*", "*");

console.log(newArrayLength);
```


## Task 06

Complete the code below so that the variable `someDinosaurs` will contain a new array with only "triceratops" and "stegosaurus"

Expected output:

```plaintext
["triceratops", "stegosaurus"]
```


```js
const dinosaurs = [
  "t-rex",
  "brontosaurus",
  "triceratops",
  "stegosaurus",
  "brachiosaurus",
];

const someDinosaurs = ;

console.log(someDinosaurs);
```

## Task 7

Complete the code below so that `negativeNumbers` is an array containing only the last 4 elements from the array `numbers`.

Expected output:

```[-1, -2, -3, -4]```


```js
// don't touch this line
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4];

const negativeNumbers = numbers;

console.log(negativeNumbers);
```


## Task 08

Complete the code below so that the output in the console will be a string like the one below:

```plaintext
1-2-3-4-5
```


```js
const array = [1, 2, 3, 4, 5];

console.log(array);
```


## Task 09

Complete the code below so that the output in the console is an array like below:

```plaintext
["12", "35", "05"]
```


```js
let time = "12:35:05";

console.log();
```

## Task 10

Complete the code below so that the last item of the array is printed to the console

Expected output:
```plaintext
My favourite color is green
```

```javascript
const colors = ["red", "blue", "yellow", "brown", "green"];
const favouriteColor = colors[];

console.log(`My favourite color is ${favouriteColor}`)
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Task 01

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `animals` variable should store an array |

### Task 02

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `people` variable must store array containing elements in following order: Julia, Tom, Gina |

### Task 03

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | the first console.log() outputs London |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | the second console.log() outputs Berlin |

### Task 04

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | The last item of array in `letters` variable is printed to console |

### Task 05

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `newArrayLength` should always be an even number |

### Task 06

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `someDinosaurs` variable is printed as: [triceratops, stegosaurus] |

### Task 07

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | `negativeNumbers` array stores only negative numbers |

### Task 08

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | Prints the numbers in the array as a string concatenated with '-' |

### Task 09

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | Expected output: ['12', '35', '05'] |

### Task 10

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | Expected output: 'My favourite color is green' |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-language-array-basic)


[//]: # (autograding info end)