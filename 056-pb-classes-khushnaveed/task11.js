/* Task 11: Create a ShoppingCart Class
Create a class called ShoppingCart.
Add properties:
items (an array of item names, starts empty)
totalPrice (starts at 0)
Add methods:
addItem(item, price) - This method should add an item to the items array and increase the totalPrice by the item's price.
removeItem(item, price) - This method should remove an item from the items array and decrease the totalPrice by the item's price.
getTotalPrice() - This method should return the total price of all items in the cart. */

class ShoppingCart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }
  addItem(item, price) {
    this.items.push(item);
    this.totalPrice += price;
  }

  removeItem(item, price) {
    this.items = this.items.filter((element) => element !== item);
    this.totalPrice -= price;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}

const cart = new ShoppingCart();

cart.addItem("apple", 20);
cart.addItem("banana", 30);
cart.removeItem("apple", 20);
console.log(cart.getTotalPrice());
