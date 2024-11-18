
/* Create a Product class with the following properties:

type: the type of product, for example t-shirt, jeans, shoes...
color: a string representing the color of the product
price: a number with the price
The class has 1 method:

description: it returns a string with the description of the product, for example "A red t-shirt, 19.99€".
For example:
 */

class Product {
    constructor(type, color, price) {
        this.type = type;
        this.color = color;
        this.price = price;
    }
    description(){
        return `A ${this.color} ${this.type}, ${this.price}`
    }
}

const shirt = new Product("shirt", "red", 9.99);

console.log(shirt.description()); // A red shirt, 9.99€