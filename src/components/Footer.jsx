import React from 'react';
import { Camera, ArrowUp, Code2, Heart, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

/**
 * Footer Component
 * Displays project credentials, tech stack badges, quick links, and a scroll-to-top button.
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-top-accent"></div>
      <div className="footer-container">
        {/* Brand & Purpose Column */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <div className="footer-logo">
              <Camera size={20} />
            </div>
            <span className="footer-brand-title">PhotoGallery</span>
          </div>
          <p className="footer-desc">
            A responsive, aesthetic photo showcase web application demonstrating
            asynchronous data fetching with React hooks, modular component hierarchy,
            and CSS styling.
          </p>
          <div className="tech-tags">
            <span className="tech-tag"><Code2 size={12} /> React 19</span>
            <span className="tech-tag"><Layers size={12} /> Vite</span>
            <span className="tech-tag"><CheckCircle2 size={12} /> Native fetch()</span>
            <span className="tech-tag">Zero Axios</span>
            <span className="tech-tag">Modern CSS</span>
          </div>
        </div>

        {/* API Information Column */}
        <div className="footer-col api-col">
          <h4 className="footer-heading">API Source</h4>
          <ul className="footer-links">
            <li>
              <a
                href="https://jsonplaceholder.typicode.com/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <span>JSONPlaceholder Photos</span>
                <ExternalLink size={13} />
              </a>
            </li>
            <li>
              <span className="api-note">
                • Displaying first 100 photos
              </span>
            </li>
            <li>
              <span className="api-note">
                • Album IDs: 1 &amp; 2 (50 photos each)
              </span>
            </li>
            <li>
              <span className="api-note">
                • Realtime dynamic filter &amp; search
              </span>
            </li>
          </ul>
        </div>

        {/* Assignment & Student Details Column */}
        <div className="footer-col assignment-col">
          <h4 className="footer-heading">Course Info</h4>
          <div className="assignment-badge-box">
            <p className="course-name">MERN Stack Web Development</p>
            <p className="assignment-title">Assignment on Module 15</p>
            <span className="ostad-tag">Ostad Academy</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Scroll-to-Top and Copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} PhotoGallery. Crafted with{' '}
            <Heart size={14} className="heart-icon" /> for Module 15 Assignment.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            title="Scroll back to top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
