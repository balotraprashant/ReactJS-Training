import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="header">
      <h1 className="header-title"><Link to="/">React Store</Link></h1>
      <nav className="header-nav">
        <ul>
          <li className="header-nav-item"><Link to="/cart">Cart ({cartItemsCount})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;