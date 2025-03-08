import React from 'react';
import '../Style/HomeCom5.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Stay In Touch</h1>
      <p className="contact-description">
        Plan a trip for the whole family—from family travel tips to family-friendly filters. We offer 24/7 support on social and through virtual agents onsite.
      </p>

      <div className="contact-form-container">
        <form className="contact-form">
          <div  className='contact-form-inputs'>
            <label className="contact-label">Email</label>
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="contact-input"
            />
          </div>
          <div   className='contact-form-inputs'>
            <label className="contact-label">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="contact-input"
            />
          </div>
          <div   className='contact-form-inputs'>
            <label className="contact-label">Message</label>
            <textarea
              placeholder="Enter your message"
              className="contact-input"
            />
          </div>
          <button
            type="submit"
            className="contact-submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;