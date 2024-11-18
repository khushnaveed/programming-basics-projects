## JavaScript destructuring with both objects and arrays:

1. **Object Destructuring with Renaming:**
   Given the object:
   ```javascript
   const employee = { id: 101, fullName: "John Smith", department: "Sales", salary: 50000 };
   ```
   - Destructure the `fullName` property into a variable called `name`.
   - Destructure the `salary` property into a variable called `income`.

2. **Destructuring Nested Arrays:**
   Given the array:
   ```javascript
   const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
   ];
   ```
   - Destructure the second element of the first sub-array and assign it to a variable.
   - Destructure the third sub-array into separate variables for each value.

3. **Combining Rest with Destructuring:**
   Given the object:
   ```javascript
   const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction", price: 10 };
   ```
   - Destructure the `title`, `author`, and `price` properties into separate variables.
   - Use the rest operator to collect the remaining properties into a new object.

4. **Destructuring Function Return Values:**
   Write a function that returns an array with three values: a name, an age, and a country. Use array destructuring to extract these values when calling the function.

5. **Nested Object Destructuring with Default Values:**
   Given the object:
   ```javascript
   const product = { 
      productName: "Laptop", 
      details: { 
         manufacturer: "Tech Corp", 
         warranty: { period: "2 years" } 
      } 
   };
   ```
   - Destructure the `productName` and `manufacturer` properties into variables.
   - Destructure the `warranty` object, with a default value of `"1 year"` for the `period` property if it's missing.

6. **Array Destructuring with Default and Skipping:**
   Given the array:
   ```javascript
   const scores = [45, 78];
   ```
   - Destructure the second element into a variable.
   - Assign default values of `50` and `60` to the first and third elements, respectively, while skipping the second.

7. **Destructuring from Function Arguments:**
   Given the function:
   ```javascript
   function calculateTotal({ price, tax = 0.1, discount = 0 }) {
      // Implementation here
   }
   ```
   - Call the function by passing an object that includes `price` and `tax`, and destructure those parameters inside the function to compute and return the total amount (price + tax - discount).

8. **Array Destructuring in a Loop:**
   Given the array of arrays:
   ```javascript
   const coordinates = [
      [1, 2],
      [3, 4],
      [5, 6]
   ];
   ```
   - Use a loop to iterate over the array and destructure each pair of coordinates into separate `x` and `y` variables within the loop body.

9. **Object Destructuring with Functions and Rest Operator:**
   Write a function that accepts an object representing a student with properties `name`, `age`, and `subjects`. Destructure the `name` and `age`, and use the rest operator to collect the remaining properties into a new object inside the function.

10. **Combining Array and Object Destructuring:**
    Given the following data structure:
    ```javascript
    const data = {
       users: [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" }
       ]
    };
    ```
    - Destructure the array of users and extract the `id` and `name` from the first user into separate variables.
    - 
