import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Elegance in Tradition</h1>
        <p className="hero-subtitle">
          Discover Ramanaa's premium collection of pure cotton and silk dhotis, crafted for the modern man who values heritage.
        </p>
        <div className="hero-actions">
          <Link to="/shop" className="btn-primary">Shop Collection</Link>
          <Link to="#about" className="btn-secondary">Our Story</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
