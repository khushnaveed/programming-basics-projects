/* Task 1: Create a Car Class
Create a class called Car.
Add properties:
make (e.g., "Toyota")
model (e.g., "Corolla")
year (e.g., 2022)ghgfhfgh
mileage (starts at 0)
Add methods:
drive(distance) - This method should increase the mileage by the given distance value.
getInfo() - This method should return a string containing the car's make, model, and year. */

class Car {
  constructor(make, model, year, milage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.milage = 0;
  }

  drive(distance) {
    return (this.milage += distance);
  }

  getInfo() {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

const car1 = new Car("Toyota", "Corolla", 2022);
console.log(car1.getInfo());
console.log(car1.drive(10));
