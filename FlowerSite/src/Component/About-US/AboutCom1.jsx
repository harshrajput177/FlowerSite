import React from 'react';
import '../../Style/AboutUs-CSS/AboutCom1.css';
import img1 from '../../Image/WhatsApp Image 2025-03-01 at 12.45.13_515d6615.jpg'
import { useNavigate } from 'react-router-dom';


const AboutHousing = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-content">
        <h1 className="aboutUs-title">About Us</h1>
        <p className="aboutUs-description">
        We specialize in exquisite flower decoration and design services, transforming spaces with beautiful floral arrangements. 
        <br />
        Whether it’s a grand event like G20, Christmas celebrations in schools, vibrant parties, or any special occasion, we bring your vision to life. 
        <br />Our dedicated team personally visits the venue and decorates it with fresh and vibrant flowers, creating an enchanting atmosphere. With a keen eye for detail and a passion for creativity, we ensure each project is unique and memorable. Trust us to add elegance and charm to your events with our stunning floral decorations!
        </p>
        <button className="aboutUs-contact-button"  onClick={() => navigate('/contact')}>Contact Us</button>
      </div>
      <div className="aboutUs-image-container">
        <img
          src={img1}
          alt="Family"
          className="aboutUs-image"
        />
        <div className="aboutUs-decorative-shape"></div>
      </div>
    </div>
  );
};

export default AboutHousing;