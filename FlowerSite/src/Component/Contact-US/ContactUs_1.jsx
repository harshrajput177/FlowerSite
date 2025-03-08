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
            <DirectionsWalkIcon className="info-icon" />
            <h3>ABOUT CLUB</h3>
            <p>Running Guide<br />Workouts</p>
          </div>
          <div className="info-item">
            <CallIcon className="info-icon" />
            <h3>PHONE (LANDLINE)</h3>
            <p>+ 912 3 567 8987<br />+ 912 5 252 3336</p>
          </div>
          <div className="info-item">
            <LocationOnIcon className="info-icon" />
            <h3>LOCATION</h3>
            <p>The Interior Design Studio Company </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;