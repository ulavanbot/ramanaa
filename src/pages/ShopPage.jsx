import React, { useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';

const ShopPage = () => {
  const { products: allProducts } = useContext(ProductContext);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Dhotis', 'Shirts'];

  const filteredProducts = filter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  return (
    <div className="shop-page" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h1 className="section-title">Our Collection</h1>
          <p style={{ color: 'var(--text-muted)' }}>Browse our premium selection of traditional wear</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'btn-primary' : 'btn-secondary'}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px', paddingBottom: '80px' }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
