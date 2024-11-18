
1. **Object Destructuring:**
   Given the object:
   ```javascript
   const person = { name: "Alice", age: 25, city: "New York", occupation: "Engineer" };
   ```
   - Destructure the `name` and `age` properties into individual variables.
   - Assign a default value of `"Unknown"` to the `city` property in case it's not present in the object.

2. **Array Destructuring:**
   Given the array:
   ```javascript
   const numbers = [10, 20, 30, 40, 50];
   ```
   - Destructure the first and second elements into separate variables.
   - Destructure the rest of the numbers into a new array.

3. **Nested Object Destructuring:**
   Given the object:
   ```javascript
   const user = { 
      username: "johndoe", 
      info: { 
         email: "johndoe@example.com", 
         address: { 
            city: "Los Angeles", 
            state: "CA" 
         } 
      }
   };
   ```
   - Destructure the `username`, `email`, and `city` properties into individual variables.

4. **Swap Values Using Destructuring:**
   Given the variables:
   ```javascript
   let a = 5;
   let b = 10;
   ```
   - Swap the values of `a` and `b` using array destructuring.

5. **Function Parameter Destructuring:**
   Write a function that accepts an object with the properties `title`, `author`, and `year`. Use destructuring in the function's parameter list to extract these values and log them.

6. **Destructuring with Default Values:**
   Given the array:
   ```javascript
   const colors = ["red", "blue"];
   ```
   - Destructure the first, second, and third elements into variables, providing a default value of `"green"` for the third element.

7. **Skipping Elements in Array Destructuring:**
   Given the array:
   ```javascript
   const fruits = ["apple", "banana", "cherry", "date"];
   ```
   - Destructure the first and third elements of the array into variables, skipping the second one.
