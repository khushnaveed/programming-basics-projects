/* Task 15: Create a CounterTimer Class
Create a class called CounterTimer.
Add a property:
seconds (starts at 0)
Add methods:
start() - This method should increase seconds by 1 every second (Hint: You can simulate time passage with JavaScript setInterval()).
stop() - This method should stop the timer (Hint: Use clearInterval() to stop the timer).
reset() - This method should reset seconds to 0.
 */

class CounterTimer {
  seconds = 0;
  interval = 0;

  start() {
    this.interval = setInterval(() => {
      this.seconds += 1;
      console.log(this.seconds);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.seconds = 0;
  }
}

const timer = new CounterTimer();

timer.start();

setTimeout(() => {
  timer.stop();
}, 5000);
