import React from 'react';

function About() {
  const highlights = [
    {
      icon: '🧩',
      title: 'Modular Components',
      description: 'Building clean, reusable React components including Header, Hero, About, and Footer.'
    },
    {
      icon: '⚡',
      title: 'Vite Ecosystem',
      description: 'Superfast builds and instant hot module replacement for an efficient development workflow.'
    },
    {
      icon: '🎨',
      title: 'Modern CSS Design',
      description: 'Crafting responsive layouts using Flexbox, CSS variables, and modern visual aesthetics.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-subtitle">Get to Know Us</span>
          <h2 className="section-title">About This Website</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-card">
          <div className="about-content">
            <h3 className="about-heading">My Journey & Project Mission</h3>
            <p className="about-text">
              This is my first <strong>React JS</strong> website. I built this application using modern 
              React JS and Vite. Through this project, I am deepening my understanding of component-driven 
              architecture, modern CSS styling, and responsive web design principles.
            </p>
            <p className="about-text">
              Breaking down the user interface into independent, reusable modules makes the codebase clean, 
              scalable, and easy to maintain. It serves as a strong foundation for building more complex, 
              interactive web applications in the future.
            </p>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-icon">{item.icon}</div>
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
