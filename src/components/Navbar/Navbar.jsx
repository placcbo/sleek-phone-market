
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import './Navbar.scss';

const Navbar = ({ cartItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Link to="/">SleekPhone</Link>
        </div>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/samsung" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Samsung</Link>
          <Link to="/iphone" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>iPhone</Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
        
        <div className="navbar-actions">
          <button className="navbar-action-btn">
            <Search size={20} />
          </button>
          
          <button className="navbar-action-btn cart-btn" onClick={() => setShowCart(!showCart)}>
            <ShoppingCart size={20} />
            {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
          </button>
          
          <button 
            className="navbar-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {showCart && cartItems > 0 && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Your Cart ({cartItems})</h3>
            <button onClick={() => setShowCart(false)}><X size={18} /></button>
          </div>
          <div className="cart-items">
            <p>Your items will appear here</p>
          </div>
          <div className="cart-footer">
            <Link to="/checkout" className="checkout-btn" onClick={() => setShowCart(false)}>
              Checkout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
