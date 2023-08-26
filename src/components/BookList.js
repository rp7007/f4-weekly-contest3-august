import React from 'react';
import './BookList.css';

function BookList({ books, onBookClick }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div
          key={book.id}
          className="book-item"
          onClick={() => onBookClick(book)}
        >
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <h3>{book.volumeInfo.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default BookList;
