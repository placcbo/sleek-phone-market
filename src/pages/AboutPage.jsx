
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
  return (
    <div className="app">
      <Navbar cartItems={0} />
      
      <div className="container" style={{ paddingTop: '120px', minHeight: '70vh' }}>
        <h1>About SleekPhone</h1>
        <p>We're dedicated to giving high-quality smartphones a second life while making premium technology accessible to everyone.</p>
        
        <div style={{ marginTop: '40px' }}>
          <h2>Our Mission</h2>
          <p>To reduce electronic waste and make premium technology accessible to everyone through high-quality refurbished devices.</p>
          
          <h2>Our Process</h2>
          <p>Every device we sell undergoes a rigorous 50-point inspection process. We replace any worn components with genuine parts and fully test each device before it reaches you.</p>
          
          <h2>Our Guarantee</h2>
          <p>We stand behind our products with a 12-month warranty and a 30-day money-back guarantee, ensuring your complete satisfaction.</p>
          
          <h2>Our Team</h2>
          <p>Our team consists of tech enthusiasts and certified repair specialists with years of experience in smartphone refurbishment.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
