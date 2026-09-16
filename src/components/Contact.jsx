import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-subtitle">Reach Out Anytime</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-col">
            <h3 className="contact-info-title">Let's start a conversation</h3>
            <p className="contact-info-desc">
              Have questions about this React project, suggestions, or want to collaborate?
              Feel free to send a message or connect through the details below.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="contact-detail-icon">📧</span>
                <div>
                  <h4 className="detail-label">Email Address</h4>
                  <p className="detail-value">contact@devsphere.dev</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon">📍</span>
                <div>
                  <h4 className="detail-label">Location</h4>
                  <p className="detail-value">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="contact-detail-icon">💼</span>
                <div>
                  <h4 className="detail-label">Work Status</h4>
                  <p className="detail-value">Available for React & Frontend Roles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon">🎉</div>
                <h4 className="success-title">Message Sent Successfully!</h4>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. We received your note and will get back to you shortly at <strong>{formData.email}</strong>.
                </p>
                <button type="button" onClick={handleReset} className="btn btn-primary btn-reset">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-textarea"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
