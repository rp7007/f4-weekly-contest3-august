import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
  
    const handleSearch = () => {
      onSearch(query); // Call onSearch with the query
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button onClick={handleSearch}>Search</button> {/* Call handleSearch when button is clicked */}
      </div>
    );
  }
  

export default SearchBar;
