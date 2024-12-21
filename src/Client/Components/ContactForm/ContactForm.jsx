import React from "react";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h3 className="contact-form-title">Contact Info</h3>
      <p className="contact-form-description">
        Fill in the form below and we'll follow up with you
      </p>

      <form className="contact-form">
        <div className="contact-form-grid">
          <div>
            <label htmlFor="firstName" className="contact-form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="contact-form-input"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="contact-form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="contact-form-input"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="contact-form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="contact-form-input"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="contact-form-label">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="contact-form-textarea"
            placeholder="Your message here..."
          />
        </div>

        <button type="submit" className="contact-form-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
