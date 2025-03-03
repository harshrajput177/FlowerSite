import React from 'react';
import '../../Style/AboutUs-CSS/AboutCom1.css';

const AboutHousing = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-content">
        <h1 className="aboutUs-title">About Housing</h1>
        <p className="aboutUs-description">
          Javascript writing capital markets. Figma using Tik-Toker libertarian. Protocol
          writing, inflated B2B SaaS series product Hunt posting digital.
        </p>
        <button className="aboutUs-contact-button">Contact Us</button>
      </div>
      <div className="aboutUs-image-container">
        <img
          src="https://images.pexels.com/photos/2082081/pexels-photo-2082081.jpeg"
          alt="Family"
          className="aboutUs-image"
        />
        <div className="aboutUs-decorative-shape"></div>
      </div>
    </div>
  );
};

export default AboutHousing;