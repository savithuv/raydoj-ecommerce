import React from 'react';
import './About.css';

// Import your images
import profilePic from '../assets/profile.png'; 
import whatsappIcon from '../assets/whatsapp.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      
      {/* This container holds the two horizontal lines */}
      <div className="about-container">
        
        {/* LEFT SIDE: Profile Picture */}
        <div className="about-left">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>

        {/* RIGHT SIDE: Text and Button */}
        <div className="about-right">
          <h2 className="about-title">About Us</h2>
          
          <p className="about-text">
            The Lamborghini Urus is a high-performance luxury SUV that combines the 
            practicality of an SUV with the speed and design of a supercar. Featuring an 
            aggressive exterior, premium interior, and advanced technology, the Urus delivers 
            an exciting driving experience while providing comfort for everyday use.
          </p>

          {/* WHATSAPP BUTTON */}
          {/* Replace '1234567890' with the actual WhatsApp Business number */}
          <a href="https://wa.me/0724907010" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            Customize 
            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
          </a>
        </div>

      </div>

    </section>
  );
};

export default About;