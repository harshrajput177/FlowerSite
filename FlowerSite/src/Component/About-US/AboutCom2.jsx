import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddTaskIcon from '@mui/icons-material/AddTask';
import '../../Style/AboutUs-CSS/AboutCom2.css';
import img1 from '../../Image/hand-drawn-shrug-illustration_23-2149318020.jpg';

const ReasonToChoose = () => {
  return (
    <div className="reason-container">
      <div className="image-container">
        <div className="orange-icon">
          <span className="icon-text">✦</span>
        </div>
        <img
          src={img1}
          alt="Meeting"
          className="reason-image"
        />
      </div>
      <div className="content-container">
        <h2 className="heading">Reason To Choose</h2>
        <div className="card-list">
          <div className="card-item">
            <AttachMoneyIcon className="AboutCom2-icon" />
            <div>
              <h3 className="card-title">Affordable Pricing</h3>
              <p className="card-text">
                We provide stunning flower decorations at budget-friendly prices, ensuring elegance and beauty without breaking the bank.
              </p>
            </div>
          </div>
          <div className="card-item">
            <LocationOnIcon className="AboutCom2-icon" />
            <div>
              <h3 className="card-title">Service at Any Location</h3>
              <p className="card-text">
                Whether it's a grand event, a school function, or a private party, we bring our exceptional flower decoration services to any location of your choice.
              </p>
            </div>
          </div>
          <div className="card-item">
            <AddTaskIcon className="AboutCom2-icon" />
            <div>
              <h3 className="card-title">Reliable & Creative</h3>
              <p className="card-text">
                Our experienced team ensures timely and artistic floral setups, turning any space into a breathtaking masterpiece with fresh and vibrant flowers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonToChoose;
