
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const SamsungPage = () => {
  return (
    <div className="app">
      <Navbar cartItems={0} />
      
      <div className="container" style={{ paddingTop: '120px', minHeight: '70vh' }}>
        <h1>Samsung Phones</h1>
        <p>Explore our collection of refurbished Samsung phones. High quality at affordable prices.</p>
        
        <div style={{ marginTop: '40px' }}>
          <h2>Samsung Galaxy Series</h2>
          <p>Our premium selection of Samsung Galaxy phones includes the S series, Note series, and Z Fold/Flip series.</p>
          
          <h2>Why Choose Refurbished Samsung?</h2>
          <p>Samsung phones are known for their durability and long-lasting performance, making them excellent choices for refurbished models.</p>
          
          <h2>Popular Samsung Models</h2>
          <ul>
            <li>Samsung Galaxy S22</li>
            <li>Samsung Galaxy Z Flip</li>
            <li>Samsung Galaxy S21</li>
            <li>Samsung Galaxy Note 20</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SamsungPage;
