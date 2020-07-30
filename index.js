import {
  addBooks, bookList, title, author, pages,
} from './dom.js';

const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

render(myLibrary);

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = false;
  this.info = function () {
    return `${title} was written by ${author}, ${pages} pages`;
  };
}

function addBookToLibrary(e) {
  e.preventDefault();
  const newBook = new Book(title.value, author.value, pages.value);
  myLibrary.push(newBook);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  render(myLibrary);
}

function render(myLibrary = []) {
  bookList.innerHTML = myLibrary.map((book, index) => `<div>
              <p>
               ${book.title}
              <button data-status="${status}" data-index="${index}">
                ${(book.status == 0) ? 'Mark as Read' : 'Mark as Unread'}
              </button>
              <button data-status="delete" data-index="${index}">
                Delete
              </button>
              </p>
              
            </div>`).join('');
}

function deleteBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  render(myLibrary);
}

function editBookInLibrary(e) {
  const { index, status } = e.target.dataset;
  if (status === 'delete') {
    deleteBookFromLibrary(index);
  } else {
    changeStatus(index);
  }
}

function changeStatus(index) {
  myLibrary[index].status = !myLibrary[index].status;
  render(myLibrary);
}

addBooks.addEventListener('submit', addBookToLibrary);
bookList.addEventListener('click', editBookInLibrary);
