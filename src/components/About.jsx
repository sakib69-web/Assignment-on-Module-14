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
      description: 'Superfast builds and instant hot module replacement for a seamless development workflow.'
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
            <h3 className="about-heading">আমাদের লক্ষ্য ও প্রযুক্তি পরিচিতি</h3>
            <p className="about-text">
              এটি আমার প্রথম <strong>React JS</strong> Website। আমি React JS এবং Vite ব্যবহার করে এই Website তৈরি করেছি।
              এই Project-এর মাধ্যমে আমি Component-ভিত্তিক আর্কিটেকচার এবং আধুনিক CSS ডিজাইন সম্পর্কে বিস্তারিত শিখছি।
              প্রতিটি অংশকে পৃথক মডিউলে বিভক্ত করে কোডকে পরিচ্ছন্ন ও পুনরায় ব্যবহারযোগ্য করাই এই প্রজেক্টের মূল লক্ষ্য।
            </p>
            <p className="about-text">
              This website serves as a practical milestone showcasing core React fundamentals,
              component hierarchy, stateful logic, and bespoke responsive styling without relying on heavy frameworks.
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
