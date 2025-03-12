import React from 'react';
import '../../Style/ContactUs-CSS/ContactUs_1.css';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUsComponent = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Any questions or remarks? Just write us a message!</p>
      <div className="contact-form">
        <input type="email" placeholder="Enter a valid email address" className="contact-input" />
        <input type="text" placeholder="Enter your Name" className="contact-input" />
        <button className="contact-button">SUBMIT</button>
      </div>

      <div className='outerPart-Contact-info'>
        <div className="contact-info">
          <div className="info-item">
            <DirectionsWalkIcon className="info-icon  about-icon" />
            <h3>ABOUT DECORATION</h3>
            <p>We specialize in event decoration, <br />adding beauty with flowers<br /> Whether it's a wedding, birthday, anniversary</p>
          </div>
          <div className="info-item">
            <CallIcon className="info-icon  phone-icons-part" />
            <h3>PHONE (LANDLINE)</h3>
            <p>+91 8076187651
            </p>
          </div>
          <div className="info-item">
            <LocationOnIcon className="info-icon   phone-icons-part" />
            <h3>LOCATION</h3>
            <p>Noida sector 62 near by mithas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;