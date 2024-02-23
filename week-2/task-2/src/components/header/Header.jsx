import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title"><Link to="/">React Store</Link></h1>
      <nav className="header-nav">
        <ul>
          <li className="header-nav-item"><Link to="/products">Products</Link></li>
          <li className="header-nav-item"><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;