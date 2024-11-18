/* Create a class called Rectangle.
Add properties:
width (e.g., 5)
height (e.g., 10)
Add methods:
area() - This method should return the area of the rectangle (width × height).
perimeter() - This method should return the perimeter of the rectangle (2 * (width + height)).
resize(newWidth, newHeight) - This method should change the width and height to new values provided as arguments.
 */

class Reactangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

const rectangle = new Reactangle(5, 10);
console.log(rectangle.area());
console.log(rectangle.perimeter());

rectangle.resize(2, 2);
console.log(rectangle.area());
console.log(rectangle.perimeter());