import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation'; // Import the Navigation component

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    async function fetchBooks(query) {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items || []);
      setSelectedBook(null); // Clear selected book when new search is made
    }

    fetchBooks('harry potter'); // Initial fetch
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = async (query) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setBooks(data.items || []);
    setSelectedBook(null); // Clear selected book when new search is made
  };

  return (
    <div className="App">
      <Navigation onSearch={handleSearch} /> {/* Use the Navigation component here */}
      <BookList books={books} onBookClick={handleBookClick} />
      {selectedBook && <BookDetail book={selectedBook} />}
    </div>
  );
}

export default App;
