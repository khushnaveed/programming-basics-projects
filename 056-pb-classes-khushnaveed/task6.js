/* Task 6: Create a Clock Class
Create a class called Clock.
Add properties:
hours (e.g., 12)
minutes (e.g., 30)
seconds (e.g., 45)
Add methods:
tick() - This method should increase the seconds by 1. If seconds reaches 60, it should reset to 0 and increase the minutes. Similarly, if minutes reaches 60, it should reset and increase the hours (if hours reaches 24, it resets to 0).
setTime(hours, minutes, seconds) - This method should set the time to the given hours, minutes, and seconds. */

class Clock {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  tick() {
    this.seconds += 1;

    if (this.seconds == 60) {
      this.seconds = 0;
      this.minutes += 1;
    }

    if (this.minutes == 60) {
      this.minutes = 0;
      this.hours += 1;
    }

    if (this.hours == 24) {
      this.hours = 0;
    }

    /* console.log(this.hours, this.minutes, this.seconds); */
  }

  setTime(hour, minute, second) {
    this.hours = hour;
    this.minutes = minute;
    this.seconds = second;

    return `Hours: ${hour} \nMinutes: ${minute} \nSeconds: ${second}`;
  }
}

const clock = new Clock(12, 59, 59);
clock.tick();

console.log(clock.setTime(24, 0, 59));
clock.tick();

console.log(clock.setTime(9, 0, 59));
clock.tick();