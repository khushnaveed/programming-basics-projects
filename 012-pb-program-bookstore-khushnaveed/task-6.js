/*
    Task 6:
    You also want to know which one between the sci-fi, crime and comic books sold more.

    - write an if...else statement that prints the value of the largest number and the name of that department
    - test with different values
*/

let sciFiDepartmentSales = 5500;
let crimeDepartmentSales = 800;
let comicBooksDepartmentSales = 7700;

if (sciFiDepartmentSales > crimeDepartmentSales && sciFiDepartmentSales > comicBooksDepartmentSales){
    console.log(`
          input: sci-fi = ${sciFiDepartmentSales}, crime = ${crimeDepartmentSales}, comic books = ${comicBooksDepartmentSales}
          output: "sci-fi", ${sciFiDepartmentSales} `);
  } else if(crimeDepartmentSales > sciFiDepartmentSales && crimeDepartmentSales > comicBooksDepartmentSales) {
    console.log(`
        input: sci-fi = ${sciFiDepartmentSales}, crime = ${crimeDepartmentSales}, comic books = ${comicBooksDepartmentSales}
        output: "crime", ${crimeDepartmentSales} `);
  } else if(comicBooksDepartmentSales > sciFiDepartmentSales && comicBooksDepartmentSales > crimeDepartmentSales){
    console.log(`
        input: sci-fi = ${sciFiDepartmentSales}, crime = ${crimeDepartmentSales}, comic books = ${comicBooksDepartmentSales}
        output: "comic book", ${comicBooksDepartmentSales} `);
  } else{
    console.log("Sales are low!")
  }
  