
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const IPhonePage = () => {
  return (
    <div className="app">
      <Navbar cartItems={0} />
      
      <div className="container" style={{ paddingTop: '120px', minHeight: '70vh' }}>
        <h1>iPhone Models</h1>
        <p>Discover our selection of premium refurbished iPhones at unbeatable prices.</p>
        
        <div style={{ marginTop: '40px' }}>
          <h2>iPhone Series</h2>
          <p>We carry a wide range of iPhone models including the latest iPhone 13 series and popular iPhone 12 models.</p>
          
          <h2>Why Choose Refurbished iPhones?</h2>
          <p>All our iPhones are thoroughly tested and restored to like-new condition, with battery health above 85%.</p>
          
          <h2>Popular iPhone Models</h2>
          <ul>
            <li>iPhone 13 Pro</li>
            <li>iPhone 13</li>
            <li>iPhone 12</li>
            <li>iPhone SE</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IPhonePage;
