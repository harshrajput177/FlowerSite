import React from 'react';
import '../../Style/Services-CSS/ServicesCom1.css';
import img1 from '../../Image/girl-holding-bouquet-flowers-with-cartoon-character-from-series-series_865091-13061__1_-removebg-preview.png'
import { useNavigate } from 'react-router-dom';

const AboutHousing = () => {
  const navigate = useNavigate();
  return (
    <div className="Services-container">
      <div className="Services-content">
        <h1 className="Services-title">Our Services</h1>
        <p className="Services-description">
        We specialize in exquisite flower decoration and design services, transforming spaces with beautiful floral arrangements. 
        <br />
        Whether it’s a grand event like G20, Christmas celebrations in schools, vibrant parties, or any special occasion, we bring your vision to life. 
        <br />Our dedicated team personally visits the venue and decorates it with fresh and vibrant flowers, creating an enchanting atmosphere. With a keen eye for detail and a passion for creativity, we ensure each project is unique and memorable. Trust us to add elegance and charm to your events with our stunning floral decorations!
        </p>
        <button className="Services-contact-button"  onClick={() => navigate('/contact')}>Contact Us</button>
      </div>
      <div className="Services-image-container">
        <img
          src={img1}
          alt="Family"
          className="Services-image"
        />
        <div className="Services-decorative-shape"></div>
      </div>
    </div>
  );
};

export default AboutHousing;