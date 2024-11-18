/* Create a class called Rectangle

The class contains 3 properties:

width
height
color
The class contains the following methods:

perimeter: calculates and returns the perimeter of the rectangle
area: calculates and returns the area of the rectangle
description: returns a string describing the rectangle, stating the color, height and width. For example: "This is a green rectangle 3cm wide and 4cm high"
For example:
 */

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  perimeter() {
    const perimeterRectangle = 2 * (this.width + this.height);
    return perimeterRectangle;
  }

  area() {
    const areaRectangle = this.width * this.height;
    return areaRectangle;
  }

  description() {
    return `This is a ${this.color} rectangle ${this.width}cm and a ${this.height}cm high`;
  }
}

const rectangle1 = new Rectangle(3, 4, "green");

console.log(rectangle1.perimeter()); // 14
console.log(rectangle1.area()); // 12
console.log(rectangle1.description()); // This is a green rectangle 3cm wide and 4cm high
