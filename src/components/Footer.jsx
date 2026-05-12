import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SettingsContext } from '../context/SettingsContext';
import './Footer.css';

const Footer = () => {
  const { settings } = useContext(SettingsContext);

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">Ramanaa<span>.</span></h2>
          <p className="footer-desc">
            {settings.description}
          </p>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop Collection</Link></li>
            <li><Link to="#about">About Us</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Categories</h3>
          <ul className="footer-links">
            <li><Link to="/shop?category=dhotis">Pure Cotton Dhotis</Link></li>
            <li><Link to="/shop?category=shirts">Traditional Shirts</Link></li>
            <li><Link to="/shop?category=wedding">Wedding Collection</Link></li>
            <li><Link to="/shop?category=accessories">Accessories</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-contact">{settings.email}</p>
          <p className="footer-contact">{settings.phone}</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ramanaa by A P KARTHIK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
