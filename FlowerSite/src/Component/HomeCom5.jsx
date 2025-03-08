import React from 'react';
import '../Style/HomeCom5.css';

const ContactForm = () => {
  return (
    <div className="HomeCom5-contact-container">
      <h1 className="HomeCom5-contact-title">Let's Stay In Touch</h1>
      <p className="HomeCom5-contact-description">
        Plan a trip for the whole family—from family travel tips to family-friendly filters. We offer 24/7 support on social and through virtual agents onsite.
      </p>

      <div className="HomeCom5-contact-form-container">
        <form className="HomeCom5-contact-form">
          <div  className='HomeCom5-contact-form-inputs'>
            <label className="HomeCom5-contact-label">Email</label>
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="HomeCom5-contact-input"
            />
          </div>
          <div   className='HomeCom5-contact-form-inputs'>
            <label className="HomeCom5-contact-label">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="HomeCom5-contact-input"
            />
          </div>
          <div   className='HomeCom5-contact-form-inputs'>
            <label className="HomeCom5-contact-label">Message</label>
            <textarea
              placeholder="Enter your message"
              className="HomeCom5-contact-input"
            />
          </div>
          <button
            type="submit"
            className="HomeCom5-contact-submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;