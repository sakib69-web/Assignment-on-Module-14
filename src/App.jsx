import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import './App.css';

/**
 * Main Application Component
 * Manages global theme (dark/light) with localStorage persistence,
 * search query state synchronization across Header and PhotoGallery,
 * and renders Header, PhotoGallery, and Footer.
 */
function App() {
  // Theme state: checks localStorage, system preference or defaults to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('photoverse_theme');
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Global search query synchronized between Header and PhotoGallery
  const [searchQuery, setSearchQuery] = useState('');

  // Total and filtered counts reported by PhotoGallery
  const [photoCounts, setPhotoCounts] = useState({ total: 100, filtered: 100 });

  // Synchronize data-theme attribute on document root and persist
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('photoverse_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleCountChange = (total, filtered) => {
    setPhotoCounts({ total, filtered });
  };

  return (
    <div className="app-layout">
      {/* Background Ambient Glow Effects */}
      <div className="ambient-blob blob-1" aria-hidden="true"></div>
      <div className="ambient-blob blob-2" aria-hidden="true"></div>

      {/* Header with Search and Theme Toggle */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalPhotos={photoCounts.total}
        filteredCount={photoCounts.filtered}
      />

      {/* Main Content Area: Photo Gallery */}
      <main className="main-content">
        <PhotoGallery
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCountChange={handleCountChange}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
