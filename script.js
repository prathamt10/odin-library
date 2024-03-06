const myLibrary = [];
let index = new Map();

class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const book_card = document.createElement('div');
        const book_name_div = document.createElement('div');
        const book_author_div = document.createElement('div');
        const book_pages_div = document.createElement('div');

        const remove_btn = document.createElement('button');
        remove_btn.id = 'remove';
        index.set(remove_btn, myLibrary.indexOf(book))
        remove_btn.addEventListener('click', (e) => {
            removeBook(e.target);
        });

        book_name_div.textContent = 'Book: ' + book.name;
        book_author_div.textContent = 'Author: ' + book.author;
        book_pages_div.textContent = 'Pages: ' + book.pages;
        remove_btn.textContent = 'Remove';

        book_card.appendChild(book_name_div);
        book_card.appendChild(book_author_div);
        book_card.appendChild(book_pages_div);
        book_card.appendChild(remove_btn);

        book_card.classList.add('book-card');
        shelf.appendChild(book_card);
        console.log(book.name);
    });
}

function removeBook(rmv_btn) {
    myLibrary.splice(index.get(rmv_btn), 1);
    shelf.innerHTML = '';
    index.clear();

    displayBooks();
}

function addBookToLibrary() {
    const book_name = document.getElementById('book-name').value;
    const author_name = document.getElementById('author-name').value;
    const pages = document.getElementById('pages').value;
    if (book_name === '' || author_name === '' || pages === '') {
        alert('Please fill the required fields.');
        return;
    }
    const new_book = new Book(book_name, author_name, pages);
    myLibrary.push(new_book);

    document.getElementById('book-name').value = '';
    document.getElementById('author-name').value = '';
    document.getElementById('pages').value = '';
    
    index.clear();
    shelf.innerHTML = '';
    displayBooks();
}

const shelf = document.querySelector('.shelf');
const submit_btn = document.getElementById('submit');
submit_btn.addEventListener('click', addBookToLibrary);
