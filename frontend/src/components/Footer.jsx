import React from 'react';
import './Footer.css';

// Import all your icons
import fbIcon from '../assets/facebook.png';
import instaIcon from '../assets/instagram.png';
import tiktokIcon from '../assets/tiktok.png';
import ytIcon from '../assets/youtube.png';
import emailIcon from '../assets/email.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* COLUMN 1: SOCIAL MEDIA */}
        <div className="footer-col">
          <h3 className="footer-heading">SOCIAL MEDIA</h3>
          <div className="social-links">
            <a href="#" className="social-item">
              <img src={fbIcon} alt="Facebook" className="social-icon" />
              <span>Facebook</span>
            </a>
            <a href="#" className="social-item">
              <img src={instaIcon} alt="Instagram" className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="#" className="social-item">
              <img src={tiktokIcon} alt="TikTok" className="social-icon" />
              <span>Tik Tok</span>
            </a>
            <a href="#" className="social-item">
              <img src={ytIcon} alt="YouTube" className="social-icon" />
              <span>Youtube</span>
            </a>
          </div>
        </div>

        {/* COLUMN 2: RAYDOJ LINKS */}
        <div className="footer-col">
          <h3 className="footer-heading">RAYDOJ</h3>
          <div className="page-links">
            <a href="#">Terms and conditions</a>
            <a href="#">Refund policy</a>
            <a href="#">Terms of service</a>
          </div>
        </div>

        {/* COLUMN 3: CONTACT */}
        <div className="footer-col">
          <h3 className="footer-heading">CONTACT</h3>
          <p className="contact-hotline">Hotline - 0724607060</p>
          
          {/* This mailto link automatically opens the user's email app! */}
          <a href="mailto:info@raydoj.com" className="email-btn">
            E-mail
            <img src={emailIcon} alt="Email" className="email-icon" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;