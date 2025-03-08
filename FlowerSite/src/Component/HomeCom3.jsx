import React from "react";
import "../Style/HomeCom3.css";
import img1 from '../Image/81Go6vv8fCL-removebg-preview.png';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <div className="about-contents">
          <h1>About Us</h1>
          <div className="about-content">
            <div className="about-text-box">
              <p>
                A bouquet - made miracle that can give a lot of bright emotions. Not
                everyone is given the talent to create real masterpieces from simple
                daisies, tulips, and herbs.
              </p>
              <p>
                Our team of florists has a wealth of knowledge and experience,
                choosing only the freshest in-season stems to create unique, stylish
                bouquets. You won't find bouquets like ours anywhere else.
              </p>
              <p>
                Our team of florists has a wealth of knowledge and experience,
                choosing only the freshest in-season stems to create unique, stylish
                bouquets. You won't find bouquets like ours anywhere else.
              </p>
            </div>

            {/* Right Side - Image with Shape */}
            <div className="about-image-wrapper">
              <div className="about-image-shape"></div>
              <img
                src={img1}
                alt="Florist"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
