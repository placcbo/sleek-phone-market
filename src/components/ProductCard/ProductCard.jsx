
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import './ProductCard.scss';

const ProductCard = ({ product, addToCart }) => {
  const { id, name, image, price, originalPrice, brand, memory } = product;
  
  return (
    <div className="product-card">
      <div className="product-badge">
        Refurbished
      </div>
      <div className="wishlist-btn">
        <Heart size={18} />
      </div>
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <div className="product-brand">{brand}</div>
        <h3 className="product-name">{name}</h3>
        <div className="product-memory">{memory}</div>
        <div className="product-price-container">
          <div className="product-price">${price}</div>
          <div className="product-original-price">${originalPrice}</div>
        </div>
      </div>
      <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
        <ShoppingCart size={18} />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
