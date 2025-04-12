
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './PopularProducts.scss';

const PopularProducts = ({ products, addToCart }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.brand.toLowerCase() === activeTab);
    
  return (
    <section className="popular-products section">
      <div className="container">
        <h2 className="section-title">Most Popular Phones</h2>
        
        <div className="product-tabs">
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Phones
          </button>
          <button 
            className={`tab ${activeTab === 'samsung' ? 'active' : ''}`}
            onClick={() => setActiveTab('samsung')}
          >
            Samsung
          </button>
          <button 
            className={`tab ${activeTab === 'iphone' ? 'active' : ''}`}
            onClick={() => setActiveTab('iphone')}
          >
            iPhone
          </button>
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
        
        <div className="view-all-container">
          <a href="/products" className="view-all-btn">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
