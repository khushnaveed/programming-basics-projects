/*
Task 2

**IMPORTANT**: try to use a combination standard operators 
and also the possible shorthand versions

For example:
+
+=
++

*/

// This variable contains the total that you'll calculate at the end
let total = 0;

/*
Step 1

Assign 3 prices to the variables below
*/

let pencilPrice = 10;
let penPrice = 20;
let paperPrice = 30;

/* 
Step 2

Create 3 variables to store the quantity of each product and set them to 0
*/

let pencilQuantity = 0;
let penQuantity = 0;
let paperQuantity = 0;

/*
Step 3

You decide to buy 2 pencils and 1 pen.
Increase the quantity for these products accordingly.
*/
pencilQuantity += 2;
penQuantity += 1;

/*
Step 4

After some thought, you realise you need 3 more pens.
Increment the current quantity by 3
*/

penQuantity += 3;

/*
Step 5

You also decide to buy 50 sheets of paper.
Increase the value of the variable accordingly
*/

paperQuantity += 50;

/*
Step 6

On a second thought, you probably don't need so many pens
Remove 2 from the current quantity
*/

penQuantity -= 2;

/*
Step 7

And probably you need one more pencil
Increase the quantity by 1
*/

pencilQuantity += 1;

/*
Step 8

50 sheets of paper are too many
Reduce the quantity by half
*/

paperQuantity /= 2;

/*
Step 9

It's time to calculate the total:
Using the price and quantity for each product, calculate how much you're going 
to spend
*/

total = (pencilPrice*pencilQuantity) + (penPrice*penQuantity) + (paperPrice*paperQuantity);

/* 
Step 10

Print the result to the console
*/

console.log(total);