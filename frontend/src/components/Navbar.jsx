import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Added Link import
import './Navbar.css';

// 1. Importing your real images from the assets folder!
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png';
import userIcon from '../assets/user.png';
import cartIcon from '../assets/cart.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-container">
      
      {/* LEFT SIDE: Your Real Logo */}
      <div className="nav-left">
        <img src={logo} alt="RAYDOJ Logo" className="real-logo" />
        <h1 className="brand-name">RAYDOJ</h1>
      </div>

      {/* MOBILE BUTTON */}
      <button className="hamburger-btn" onClick={toggleMenu}>
        ☰
      </button>

      {/* RIGHT WRAPPER */}
      <div className={`nav-links-wrapper ${isMenuOpen ? 'active' : ''}`}>
        
        {/* MIDDLE: Links */}
        <ul className="nav-middle">
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About us</a></li>
        </ul>

        {/* RIGHT SIDE: Search & Real Icons */}
        <div className="nav-right">
          
          <div className="search-box">
            <input type="text" placeholder="search" />
            <button className="search-btn">
              <img src={searchIcon} alt="Search" className="nav-icon search-icon-size" />
            </button>
          </div>

          <div className="icon-group">
            <button className="icon-btn">
              <img src={userIcon} alt="User" className="nav-icon" />
            </button>
            
            {/* 2. Wrapped the cart button with Link */}
            <Link to="/cart">
              <button className="icon-btn">
                <img src={cartIcon} alt="Cart" className="nav-icon" />
              </button>
            </Link>
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;