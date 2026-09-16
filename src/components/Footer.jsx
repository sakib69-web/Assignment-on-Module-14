import React from 'react';

function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">DevSphere</span>
            </div>
            <p className="footer-tagline">
              Crafting responsive, performant, and delightful web experiences with React JS and Vite.
            </p>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-heading">Technologies</h5>
            <ul className="footer-links">
              <li><span>React 19</span></li>
              <li><span>Vite Bundler</span></li>
              <li><span>Modern CSS3</span></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-heading">Connect</h5>
            <div className="footer-social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="mailto:hello@example.com" className="social-pill" aria-label="Email">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} DevSphere. All Rights Reserved.
          </p>
          <p className="footer-subtext">
            Designed & Developed with ❤️ for Ostad Module 14 Assignment.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
