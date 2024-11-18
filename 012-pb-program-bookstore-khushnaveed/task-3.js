/*
    Task 3:
    You also receive the report from the Comic Book department.
    Similar to Task 2, check that at least one of the three departments sold enough.

    - write an if...else statement that prints true if at least one of the 3 sales amount is in the range between 200 and 500, false otherwise
    - test with different values
*/

let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 400;
let comicBookDepartmentSales = 0;

if ( (sciFiDepartmentSales > 200 && sciFiDepartmentSales < 500) || (crimeDepartmentSales > 200 && crimeDepartmentSales < 500) || (comicBookDepartmentSales > 200 && comicBookDepartmentSales < 500) ) {
    console.log("Did at least one department between Sci-Fi, Crime and comic book sell between 200 and 500 books?", true);
  } else {
    console.log("Did at least one department between Sci-Fi, Crime and comic book sell between 200 and 500 books?", false);
  }
  
  