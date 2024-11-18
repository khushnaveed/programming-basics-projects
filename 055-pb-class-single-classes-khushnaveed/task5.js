/* Create a HTMLElement class called to represent a generic HTML element.

The class should contain the following properties:

element: a string representing the HTML element, for example div, span, h1...
id: a string with the element id.
default value: ""
classList: an array of strings containing the element's CSS classes
default value: []
The class has the following methods:

addCSSClass(className): it takes a class name in input. It checks whether the class is already inside the classList array. If it isn't, it adds it at the end of the classList array
removeCSSClass(className): it takes a class name in input and removes the matching class from the classList array.
showHTML(): it prints a string showing the HTML element with its id and classes, for example: "<section id="about-section" class="page-section container alt-bg">...</section>" */

class HTMLElement {
  constructor(element, id, classList = []) {
    this.element = element;
    this.id = id;
    this.classList = classList;
  }

  addCSSClass(className) {
    if(!this.classList.includes(className)){
        this.classList.push(className);
    }
  }

  removeCSSClass(className) {
   this.classList = this.classList.filter(classItem => classItem !== className);
  }

  showHTML() {
    return `<${this.element} id="${this.id}" class="${this.classList.join(' ')}"></.${this.element}>`
  }
}

const section = new HTMLElement("section", "about-section", []);
console.log(section.showHTML()); // <section id="about-section" class=""></section>

section.addCSSClass("page-section");
section.addCSSClass("container");
console.log(section.showHTML()); // <section id="about-section" class="page-section container"></section>

section.removeCSSClass("container");
console.log(section.showHTML()); // <section id="about-section" class="page-section"></section>

const div = new HTMLElement("div", "note", ["bg-yellow", "padding-5"]);
console.log(div.showHTML()); // <div id="note" class="bg-yellow padding-5"></div>
