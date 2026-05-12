import React, { useContext } from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';
import dhotiImage from '../assets/dhoti.png'; // Still used for the 'About' section

const HomePage = () => {
  const { products } = useContext(ProductContext);
  // Get the first 4 products to feature on the homepage
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      <HeroSection />
      
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Featured Collection</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
              Handpicked premium traditional wear for your special occasions.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <img src={dhotiImage} alt="About Ramanaa" style={{ width: '100%', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 20px 0' }}>About The Brand</h2>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--secondary-color)' }}>Ramanaa by A P KARTHIK</h3>
              <p style={{ marginBottom: '15px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                Founded with a vision to preserve and elevate traditional Indian menswear, Ramanaa brings you the finest quality dhotis and shirts.
              </p>
              <p style={{ marginBottom: '25px', color: 'var(--text-muted)' }}>
                Every piece in our collection is crafted with meticulous attention to detail, ensuring comfort without compromising on elegance. A P Karthik's dedication to quality makes Ramanaa the preferred choice for those who value authentic traditional aesthetics.
              </p>
              <button className="btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
