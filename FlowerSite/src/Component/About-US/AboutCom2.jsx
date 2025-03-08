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
              <h3 className="card-title">Cost Effective</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="card-item">
            <LocationOnIcon className="AboutCom2-icon" />
            <div>
              <h3 className="card-title">Good Location</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="card-item">
            <AddTaskIcon className="AboutCom2-icon" />
            <div>
              <h3 className="card-title">Trust Worthy</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonToChoose;