/* Task 16: Create a Recipe Class
Create a class called Recipe.
Add properties:
name (e.g., "Pancakes")
ingredients (an array of ingredients, starts empty)
instructions (a string containing recipe steps)
Add methods:
addIngredient(ingredient) - This method should add an ingredient to the ingredients array.
getIngredients() - This method should return all the ingredients as a string.
getInstructions() - This method should return the instructions for preparing the dish.
 */

class Recipe {
  constructor(name, intructions) {
    this.name = name;
    this.ingredients = [];
    this.intructions = intructions;
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  getIngredients() {
    return this.ingredients;
  }

  getInstructions() {
    return this.intructions;
  }
}

const recipe = new Recipe("Pancakes", "Recipe instructions for a pancake");

recipe.addIngredient("milk");
recipe.addIngredient("suger");
recipe.addIngredient("flour");
console.log(recipe.getIngredients());
console.log(recipe.getInstructions());
