/* ask 5: Create a Student Class
Create a class called Student.
Add properties:
name (e.g., "Alice")
age (e.g., 20)
gradeLevel (e.g., 10)
grades (an array to hold multiple grade scores, starts empty)
Add methods:
addGrade(score) - This method should add a new grade to the grades array.
getAverageGrade() - This method should calculate and return the average grade from the grades array.
getInfo() - This method should return a string with the student's name, age, and gradeLevel.
 */

class Student {
  constructor(name, age, gradeLevel, grades = []) {
    this.name = name;
    this.age = age;
    this.gradeLevel = gradeLevel;
    this.grades = grades;
  }

  addGrade(score) {
    this.grades.push(score);
  }

  getAverageGrade() {
    let total =  this.grades.reduce((sum, item) => sum + item ,0);
    return this.grades.length == 0 ? 0 : total / this.grades.length; 
  }

  getInfo() {
    return `${this.name} ${this.age} ${this.gradeLevel}`;
  }
}

const student = new Student("khush", 27, 10, [2, 4]);

student.addGrade(6);
console.log(student.getAverageGrade());
console.log(student.getInfo());
