import React from 'react';
import './Header.css'; // Make sure to import your CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="a3-removebg-preview.png"/>
      </div>
      <div className="header-right">
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/sell">Sell with Us</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button type="button">Search</button>
        </div>
        <div className="user-actions">
          <button>Login</button>
          <button>Cart</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
