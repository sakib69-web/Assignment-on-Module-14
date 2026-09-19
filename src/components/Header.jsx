import React from 'react';

function Header() {
  return (
    <header className="site-header" id="header">
      <div className="header-container">
        <div className="brand-logo" id="site-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">DevSakib</span>
        </div>
        
        <nav className="nav-menu" aria-label="Main Navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#hero" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="nav-btn">Get in Touch</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
