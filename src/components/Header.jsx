import React from 'react';
import { Camera, Sun, Moon, Search, X, Sparkles, Image as ImageIcon } from 'lucide-react';

/**
 * Header Component
 * Displays brand logo, statistics badge, live search bar, and dark mode toggle.
 *
 * @param {Object} props
 * @param {string} props.theme - Current theme ('light' or 'dark')
 * @param {Function} props.onToggleTheme - Theme toggle handler
 * @param {string} props.searchQuery - Current search query
 * @param {Function} props.onSearchChange - Search input change handler
 * @param {number} props.totalPhotos - Total loaded photos (100)
 * @param {number} props.filteredCount - Number of photos matching current filter/search
 */
const Header = ({
  theme,
  onToggleTheme,
  searchQuery,
  onSearchChange,
  totalPhotos = 100,
  filteredCount = 100,
}) => {
  return (
    <header className="site-header" id="site-header">
      <div className="header-container">
        {/* Brand Logo & Title */}
        <div className="brand-group">
          <div className="logo-badge" title="PhotoGallery Studio">
            <Camera className="logo-icon" size={24} strokeWidth={2.2} />
            <span className="logo-glow"></span>
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <h1 className="brand-title">PhotoGallery</h1>
              <span className="badge-pill version-badge">
                <Sparkles size={11} /> 100 Photos
              </span>
            </div>
            <p className="brand-subtitle">
              Curated API showcase using React + Vite &amp; Vanilla CSS
            </p>
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="header-search-wrapper">
          <div className="search-bar">
            <Search className="search-icon" size={18} />
            <input
              id="header-photo-search"
              type="text"
              placeholder="Search by photo title or ID..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search photos by title or ID"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => onSearchChange('')}
                title="Clear search"
                aria-label="Clear search input"
              >
                <X size={15} />
              </button>
            )}
          </div>
          {searchQuery && (
            <span className="search-results-pill">
              {filteredCount} found
            </span>
          )}
        </div>

        {/* Actions: Stats & Theme Toggle */}
        <div className="header-actions">
          <div className="stat-pill" title="Total photos loaded from JSONPlaceholder API">
            <ImageIcon size={14} className="stat-icon" />
            <span>
              <strong>{filteredCount}</strong>/{totalPhotos}
            </span>
          </div>

          <button
            type="button"
            id="theme-toggle-btn"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="theme-icon sun-icon" />
            ) : (
              <Moon size={20} className="theme-icon moon-icon" />
            )}
            <span className="theme-label-sr">Toggle Theme</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
