import React from 'react';
import '../Style/HomeCom1.css';
import img1 from '../Image/596c934c9b385073fb827ffa92f328a5.jpg';
import img2 from '../Image/596c934c9b385073fb827ffa92f328a5.jpg';
import img3 from '../Image/istockphoto-1313502972-612x612.jpg';
import img4 from '../Image/81ohzMU6N0L-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

const FlowerShopHeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="shop-tag">
          <span>Your Trusted Online Flower Shop</span>
        </div>
        <h1 className="hero-title">
          The Ultimate <span className="highlight">Flower</span> Shopping Destination
        </h1>
        <p className="hero-description">
          Elevate your spaces with our exquisite floral arrangements. From elegant bouquets to grand event decorations, we bring beauty and freshness to every occasion.
        </p>
        <div className="button-group">
          <button className="shop-button" onClick={() => navigate('/occasions')}>Order now</button>
          <button className="View-all-link" onClick={() => navigate('/occasions')}>
            View all products
          </button>
        </div>
        <div className="rating-section">
          <div className="user-images">
            <img src={img1} alt="User" />
            <img src={img2} alt="User" />
            <img src={img3} alt="User" />
            <div className="user-placeholder">+</div>
          </div>
          <p className="rating-info">
            <span className="rating-score">4.8+</span> Rating
            <span className="rating-subtext"> Trusted by 10K+ Customers</span>
          </p>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img className="hero-image" src={img4} alt="Girl with flowers" />
      </div>
    </div>
  );
};

export default FlowerShopHeroSection;
