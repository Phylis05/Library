const addBooks = document.querySelector('.add-books');
const bookList = document.querySelector('.book-list');
const title = (document.querySelector('[name=title]')).value;
const author = (document.querySelector('#author')).value;
const pages = document.querySelector('#pages').value;

addBooks.addEventListener('submit', addBookToLibrary);