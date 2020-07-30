import { addBooks, bookList, title, author, pages } from './dom.js';

let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = false;
  this.info = function() {
    return `${title} was written by ${author}, ${pages} pages`;
  };
}

function addBookToLibrary(e) {
  e.preventDefault();
  const newBook = new Book(title.value, author.value, pages.value);
  myLibrary.push(newBook);
  render(myLibrary);
}

function render(myLibrary) {
  bookList.innerHTML = myLibrary.map((book) => {
    console.log(book.title);
     return `${book.title}`;
  }).join('');
}

addBooks.addEventListener('submit', addBookToLibrary);
