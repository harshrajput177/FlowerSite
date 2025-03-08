import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Style/Navbar.css';
import logo from './Image/Screenshot_2025-03-01_191456-removebg-preview (1).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-flower">
      <div className="logo-flower">
        <img src={logo} alt="Logo" />
        <span>Ritesh Kumar</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={`menu-flower ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/occasions" onClick={toggleMenu}>Occasions</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
      <div className="icons-flower">
        <LocalPhoneIcon className='Flower-icon' />
        <p>+91 9458006097</p>
      </div>
    </nav>
  );
};

export default Navbar;



