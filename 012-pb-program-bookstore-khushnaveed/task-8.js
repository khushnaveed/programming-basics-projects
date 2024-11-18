/*
    Task 8:
    The marketing team is running a promotion on weekends.

    - write an if...else statement to apply a 50% discount to the price of books 
    if the day is Saturday or Sunday

*/

let day = "Saturday";
let bookPrice = 16;

if(day == "Saturday" || day == "Sunday"){
    let discount = (bookPrice/100)*50;
    let discountPrice = bookPrice - discount
    console.log(`Discount price = ${discountPrice}`);
}else{
    console.log("No discount");
}