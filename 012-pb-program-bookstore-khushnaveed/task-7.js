/*
    Task 7:
    You want to check if the sales of sci-fi, crime and comic books all together surpassed the sales 
    of the same period last year and if they reached the set goal for this year.

    - calculate the sum of the 3 department sales
    - write an if...else statement that prints:
        - a sad face, if sales are less than the ones from last year
        - "good, but we can do better", if sales are greater than the sales from last year, but less than the goal
        - "YEEEEEEESSSS!", if sales are greater than the goal

*/

let sciFiDepartmentSales = 2000;
let crimeDepartmentSales = 2000;
let comicBookDepartmentSales = 4000;

let total = sciFiDepartmentSales + crimeDepartmentSales + comicBookDepartmentSales;

let totalSalesLastYear = 5000;
let totalSalesGoal = 7000;

if(total < totalSalesLastYear){
    console.log(":(");
}else if(total > totalSalesLastYear && total < totalSalesGoal){
    console.log("good, but we can do better");
}else if(total > totalSalesGoal){
    console.log("YEEEEEEEESSS!");
}else{
    console.log("invalid sales!");
}