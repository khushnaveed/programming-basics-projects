/* Task 2: Create a Book Class
Create a class called Book.
Add properties:
title (e.g., "The Great Gatsby")
author (e.g., "F. Scott Fitzgerald")
numPages (e.g., 218)
currentPage (starts at 0) 
Add methods:
read(pages) - This method should increase the currentPage by the number of pages passed to the method, but not allow currentPage to exceed numPages.
bookmark() - This method should return the current page.*/

class Book {
  constructor(title, author, numPages) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.currentPage = 0;
  }

  read(pages) {
    return pages + this.currentPage > this.numPages ? `${this.currentPage + pages} page not allowed - Maximum limit: ${this.numPages}`: (this.currentPage += pages);
  }

  bookmark() {
    return this.currentPage;
  }
}

const Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);

console.log(Book1.read(200));
console.log(Book1.bookmark());

console.log('________________');
console.log(Book1.read(20));
console.log(Book1.bookmark());
