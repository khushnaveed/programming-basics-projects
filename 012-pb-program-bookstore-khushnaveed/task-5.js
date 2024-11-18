/*
    Task 5:
    You also want to know which one between the cooking books and drawing books sold more.

    - write an if...else statement that prints the value of the largest number and the name of that department

    example: 
        - input: cookingDepartmentSales = 400, drawingDepartmentSales = 500 
        - output: "Drawing Department", 500 
    - test with different values
*/

let cookingDepartmentSales = 600;
let drawingDepartmentSales = 1000;

if (
  cookingDepartmentSales > 300 &&
  drawingDepartmentSales > 300 &&
  cookingDepartmentSales > drawingDepartmentSales
) {
  console.log(`
        input: cookingDepartmentSales = ${cookingDepartmentSales}, drawingDepartmentSales = ${drawingDepartmentSales} 
        output: "Cooking Department", ${cookingDepartmentSales} `);
} else {
  console.log(`
        input: cookingDepartmentSales = ${cookingDepartmentSales}, drawingDepartmentSales = ${drawingDepartmentSales} 
        output: "Drawing Department", ${drawingDepartmentSales} `);
}
