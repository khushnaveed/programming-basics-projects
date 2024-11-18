/* Task 12: Create a Counter Class
Create a class called Counter.
Add a property:
count (starts at 0)
Add methods:
increment() - This method should increase count by 1.
decrement() - This method should decrease count by 1 but not allow count to go below 0.
reset() - This method should reset count to 0.
getCount() - This method should return the current count.
 */

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count <= 0 ? "not allowed to go below 0" : (this.count -= 1);
  }

  reset() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }
}


const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
counter.reset()
console.log(counter.getCount());