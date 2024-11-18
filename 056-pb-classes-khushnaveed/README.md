### Task 1: **Create a `Car` Class**
1. Create a class called `Car`.
2. Add properties:
   - `make` (e.g., "Toyota")
   - `model` (e.g., "Corolla")
   - `year` (e.g., 2022)ghgfhfgh
   - `mileage` (starts at 0)
3. Add methods:
   - `drive(distance)` - This method should increase the `mileage` by the given `distance` value.
   - `getInfo()` - This method should return a string containing the car's `make`, `model`, and `year`.

### Task 2: **Create a `Book` Class**
1. Create a class called `Book`.
2. Add properties:
   - `title` (e.g., "The Great Gatsby")
   - `author` (e.g., "F. Scott Fitzgerald")
   - `numPages` (e.g., 218)
   - `currentPage` (starts at 0)
3. Add methods:
   - `read(pages)` - This method should increase the `currentPage` by the number of `pages` passed to the method, but not allow `currentPage` to exceed `numPages`.
   - `bookmark()` - This method should return the current page.

### Task 3: **Create a `Rectangle` Class**
1. Create a class called `Rectangle`.
2. Add properties:
   - `width` (e.g., 5)
   - `height` (e.g., 10)
3. Add methods:
   - `area()` - This method should return the area of the rectangle (`width` × `height`).
   - `perimeter()` - This method should return the perimeter of the rectangle (`2 * (width + height)`).
   - `resize(newWidth, newHeight)` - This method should change the `width` and `height` to new values provided as arguments.

### Task 4: **Create a `BankAccount` Class**
1. Create a class called `BankAccount`.
2. Add properties:
   - `accountHolder` (e.g., "John Doe")
   - `balance` (starts at 0)
3. Add methods:
   - `deposit(amount)` - This method should increase the `balance` by the `amount` deposited.
   - `withdraw(amount)` - This method should decrease the `balance` by the `amount` withdrawn, but not allow the balance to go below 0.
   - `getBalance()` - This method should return the current balance.

### Task 5: **Create a `Student` Class**
1. Create a class called `Student`.
2. Add properties:
   - `name` (e.g., "Alice")
   - `age` (e.g., 20)
   - `gradeLevel` (e.g., 10)
   - `grades` (an array to hold multiple grade scores, starts empty)
3. Add methods:
   - `addGrade(score)` - This method should add a new grade to the `grades` array.
   - `getAverageGrade()` - This method should calculate and return the average grade from the `grades` array.
   - `getInfo()` - This method should return a string with the student's `name`, `age`, and `gradeLevel`.

### `covering real-world examples like managing tasks, timers, playlists, and more.`

### Task 6: **Create a `Clock` Class**
1. Create a class called `Clock`.
2. Add properties:
   - `hours` (e.g., 12)
   - `minutes` (e.g., 30)
   - `seconds` (e.g., 45)
3. Add methods:
   - `tick()` - This method should increase the `seconds` by 1. If `seconds` reaches 60, it should reset to 0 and increase the `minutes`. Similarly, if `minutes` reaches 60, it should reset and increase the `hours` (if `hours` reaches 24, it resets to 0).
   - `setTime(hours, minutes, seconds)` - This method should set the time to the given `hours`, `minutes`, and `seconds`.

### Task 7: **Create a `Movie` Class**
1. Create a class called `Movie`.
2. Add properties:
   - `title` (e.g., "Inception")
   - `director` (e.g., "Christopher Nolan")
   - `rating` (e.g., 8.8)
   - `duration` (e.g., 148) - in minutes
3. Add methods:
   - `getInfo()` - This method should return a string containing the movie's `title`, `director`, and `rating`.
   - `getDurationInHours()` - This method should return the movie duration in hours (convert minutes to hours and round to two decimal places).

### Task 8: **Create a `Person` Class**
1. Create a class called `Person`.
2. Add properties:
   - `firstName` (e.g., "John")
   - `lastName` (e.g., "Doe")
   - `age` (e.g., 25)
3. Add methods:
   - `getFullName()` - This method should return the person's full name (`firstName` + `lastName`).
   - `celebrateBirthday()` - This method should increase the `age` by 1 and return a birthday message like "Happy Birthday! You are now [age] years old."

### Task 9: **Create a `Calculator` Class**
1. Create a class called `Calculator`.
2. Add a property:
   - `result` (starts at 0)
3. Add methods:
   - `add(number)` - This method should add the given `number` to `result`.
   - `subtract(number)` - This method should subtract the given `number` from `result`.
   - `multiply(number)` - This method should multiply `result` by the given `number`.
   - `divide(number)` - This method should divide `result` by the given `number` (ensure no division by zero).
   - `reset()` - This method should reset `result` to 0.

### Task 10: **Create a `TaskManager` Class**
1. Create a class called `TaskManager`.
2. Add a property:
   - `tasks` (an array of task names, starts empty)
3. Add methods:
   - `addTask(task)` - This method should add a task to the `tasks` array.
   - `removeTask(task)` - This method should remove a task from the `tasks` array if it exists.
   - `getTasks()` - This method should return all tasks in the `tasks` array as a string.

### Task 11: **Create a `ShoppingCart` Class**
1. Create a class called `ShoppingCart`.
2. Add properties:
   - `items` (an array of item names, starts empty)
   - `totalPrice` (starts at 0)
3. Add methods:
   - `addItem(item, price)` - This method should add an item to the `items` array and increase the `totalPrice` by the item's `price`.
   - `removeItem(item, price)` - This method should remove an item from the `items` array and decrease the `totalPrice` by the item's `price`.
   - `getTotalPrice()` - This method should return the total price of all items in the cart.

### Task 12: **Create a `Counter` Class**
1. Create a class called `Counter`.
2. Add a property:
   - `count` (starts at 0)
3. Add methods:
   - `increment()` - This method should increase `count` by 1.
   - `decrement()` - This method should decrease `count` by 1 but not allow `count` to go below 0.
   - `reset()` - This method should reset `count` to 0.
   - `getCount()` - This method should return the current count.

### Task 13: **Create a `Playlist` Class**
1. Create a class called `Playlist`.
2. Add properties:
   - `name` (e.g., "Chill Vibes")
   - `songs` (an array to store song titles, starts empty)
3. Add methods:
   - `addSong(song)` - This method should add a song to the `songs` array.
   - `removeSong(song)` - This method should remove a song from the `songs` array if it exists.
   - `getSongs()` - This method should return a list of all song titles in the playlist.

### Task 14: **Create a `TemperatureConverter` Class**
1. Create a class called `TemperatureConverter`.
2. Add methods:
   - `celsiusToFahrenheit(celsius)` - This method should convert a temperature from Celsius to Fahrenheit.
   - `fahrenheitToCelsius(fahrenheit)` - This method should convert a temperature from Fahrenheit to Celsius.

### Task 15: **Create a `CounterTimer` Class**
1. Create a class called `CounterTimer`.
2. Add a property:
   - `seconds` (starts at 0)
3. Add methods:
   - `start()` - This method should increase `seconds` by 1 every second (Hint: You can simulate time passage with JavaScript `setInterval()`).
   - `stop()` - This method should stop the timer (Hint: Use `clearInterval()` to stop the timer).
   - `reset()` - This method should reset `seconds` to 0.

### Task 16: **Create a `Recipe` Class**
1. Create a class called `Recipe`.
2. Add properties:
   - `name` (e.g., "Pancakes")
   - `ingredients` (an array of ingredients, starts empty)
   - `instructions` (a string containing recipe steps)
3. Add methods:
   - `addIngredient(ingredient)` - This method should add an ingredient to the `ingredients` array.
   - `getIngredients()` - This method should return all the ingredients as a string.
   - `getInstructions()` - This method should return the `instructions` for preparing the dish.

---


### `These tasks cover defining classes, creating and manipulating properties, and using methods to interact with class instances.`



