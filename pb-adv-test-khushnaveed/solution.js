/* Task 1 */
const profileData = {
  firstName: "Khush Bakht",
  lastName: "Naveed",
  age: 27,
  city: "Berlin",
};



/* Task 2 */
profileData.details = () => {
  return `${profileData.firstName} ${profileData.lastName} is ${profileData.age} years old and lives in ${profileData.city}`;
};

console.log(profileData.details());



/* Task 3 */
function wordConverter(words, suffix) {
  let newArray = words.map((word) => word + suffix);
  return newArray;
}

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));



/* Task 4 */
function calculateHours(hours) {
  let totalHours = 0;

  hours.forEach((element) => {
    let eachDayHour = element.end - element.start;
    totalHours += eachDayHour;
  });

  return totalHours;
}

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];

console.log(calculateHours(hourTracking));



/* Task 5 */
class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;
  }

  spaceNeeded() {
    return this.number * 2;
  }

  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course`;
  }
}

const course = new Course("Syed Naqvi", "Web Development", 8);
console.log(course.spaceNeeded());
console.log(course.details());



/* Task 6 */
function validPin(pin) {
  return (
    pin !== isNaN &&
    parseInt(pin) > 0 &&
    !pin.includes(".") &&
    pin.length == 4 &&
    parseInt(pin[pin.length - 1]) % 2 == 0 &&
    pin[0] !== pin[pin.length - 1]
  );
}

console.log(validPin("1234"));
console.log(validPin("1235")); // last number should be even
console.log(validPin("12ww")); // should only consist of numbers
console.log(validPin("12.4")); // should only consist of numbers
console.log(validPin("-234")); // should only consist of numbers
console.log(validPin("12345")); // should be 4 digits, not 5
console.log(validPin("2222")); // first and last digits should be different
console.log(validPin("2224"));
