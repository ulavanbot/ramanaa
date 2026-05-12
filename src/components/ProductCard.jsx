import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price, category }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        <div className="product-overlay">
          <button className="btn-primary overlay-btn">Quick View</button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        <p className="product-price">₹{price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
