function searchBooks() {
let search = document.getElementById('book-input').value;
let APIKey = 'AIzaSyAQJEX3YhzH9M0DHADg28yEA4cCot0Aq0k';
let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${APIKey}`;
fetch(url)
.then(response => response.json())
.then(data => displayBooks(data.items));
}
function displayBooks(books) {
    let bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach(book => {
        let bookItem = document.createElement('div');
        let title = book.volumeInfo.title;
        let authors = book.volumeInfo.authors.join(', ');
        bookItem.innerHTML = `
            <p>Название: ${title}</p>
            <p>Автор: ${authors}</p>
            <button onclick="openBuyForm()">Купить</button>
            <hr>
        `;
        bookList.appendChild(bookItem);
    });
}
function openBuyForm() {
    document.getElementById('buy-form').style.display = 'block';
}