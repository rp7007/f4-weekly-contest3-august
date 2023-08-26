import React from 'react';
import './Navigation.css';
import logo from '../images/logo.png';
import text from '../images/KeazoNBOOKS.png';
import SearchBar from './SearchBar';

function Navigation({ onSearch }) {
  return (
    <nav className="navigation">
      <div className="left">
        <img className="logo" src={logo} alt="Logo" />
        <img className="text" src={text} alt="Logo" />
        {/* <span className="brand-name">KeazonBooks</span> */}
      </div>
      <div className="center">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="right">
        <span className="icon">🛒</span>
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
      </div>
    </nav>
  );
}

export default Navigation;
