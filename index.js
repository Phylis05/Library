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
  console.log(title);
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  console.log(myLibrary);
}