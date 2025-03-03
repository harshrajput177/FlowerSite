import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Style/Navbar.css'; // Import the CSS file
import logo from './Image/Screenshot 2025-03-01 191456.png'

const Navbar = () => {
  return (
    <nav className="navbar-flower">
      <div className="logo-flower">
        <img src={logo} alt="Logo" />
        <span>Ritesh Kumar</span>
      </div>
      <ul className="menu-flower">
        <li>Home</li>
        <li>Occassions</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="icons-flower">
        <LocalPhoneIcon  className='Flower-icon'/>
        <p>+91 9458006097</p>
        {/* <SearchIcon /> */}
        {/* <ShoppingBag />
        <Heart />
        <User /> */}

      </div>
    </nav>
  );
};

export default Navbar;
