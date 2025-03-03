import "./Style/Footer.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Info */}
        <div className="footer-section">
          <h2 className="footer-title">Gamboori.</h2>
          <p className="footer-description">Welcome and open yourself to your truest love this year with us! With the Release Process</p>
          <div className="social-icons">
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <WhatsAppIcon className="icon" />
            {/* <FaGooglePlusG className="icon" /> */}
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">COMPANY</h3>
          <ul  className="footer-ul">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">CONTACT</h3>
          <ul   className="footer-ul">
            <li className="contact-item"><EmailIcon /><span>abc@gmail.com</span></li>
            <li className="contact-item"><LocalPhoneIcon /><span>+92 3488 400 155</span></li>
            <li className="contact-item"><LocationOnIcon /> <span>New York – 1075 Firs Avenue</span></li>
          </ul>
        </div>

        
      </div>
      <div className="footer-bottom">
        © 2025 All Rights Reserved. Design by Salman.UI UX
      </div>
    </footer>
  );
}