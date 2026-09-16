import React from 'react';

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Welcome to My React Journey</span>
        </div>

        <h1 className="hero-title">
          Welcome to <span className="gradient-text">My Website</span>
        </h1>

        <p className="hero-description">
          This is my first modern React website built with Vite. Experience fast performance,
          modular component architecture, and responsive design crafted from the ground up.
        </p>

        <div className="hero-actions">
          <a href="#about" className="btn btn-primary" id="hero-learn-more-btn">
            Learn More
            <span className="btn-arrow">→</span>
          </a>
          <a href="#contact" className="btn btn-secondary" id="hero-contact-btn">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-pill">
            <span className="stat-icon">⚛️</span>
            <span className="stat-label">React JS</span>
          </div>
          <div className="stat-pill">
            <span className="stat-icon">⚡</span>
            <span className="stat-label">Vite Fast HMR</span>
          </div>
          <div className="stat-pill">
            <span className="stat-icon">🎨</span>
            <span className="stat-label">Pure CSS Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
