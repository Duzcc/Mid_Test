import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-top">
        {/* Logo */}
        <div className="logo-text">Anonime</div>

        {/* Menu */}
        <div className="nav-menu">
          <a href="#">Home</a>
          <a href="#">List anime</a>
        </div>

        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="Search anime or movie"
            className="search-input"
          />
        </div>
      </div>

      {/* Explore Section */}
      <div className="explore-section">
        <h2 className="explore-title">Explore</h2>
        <p className="explore-subtitle">What are you gonna watch today ?</p>
      </div>
    </header>
  );
};

export default Header;
