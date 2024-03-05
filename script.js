const myLibrary = [];

class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }
}

function displayBooks() {
    myLibrary.forEach((book) => {
        
    });
}

function addBookToLibrary() {
    const book_name = document.getElementById('book-name').value;
    const author_name = document.getElementById('author-name').value;
    const pages = document.getElementById('pages').value;
    const new_book = new Book(book_name, author_name, pages);

    myLibrary.push(new_book);
}
const shelf = document.querySelector('.shelf');
const add_btn = document.getElementById('submit');
add_btn.addEventListener('click', addBookToLibrary);
