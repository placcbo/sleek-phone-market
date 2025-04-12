
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const NotFound = () => {
  return (
    <div className="app">
      <Navbar cartItems={0} />
      
      <div className="not-found-container" style={{ 
        padding: '120px 20px',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--light-gray)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '64px',
            fontWeight: '700',
            marginBottom: '20px',
            color: 'var(--dark-gray)'
          }}>404</h1>
          <p style={{ 
            fontSize: '24px',
            marginBottom: '30px',
            color: 'var(--dark-gray)'
          }}>Page Not Found</p>
          <p style={{ 
            fontSize: '16px',
            marginBottom: '30px',
            color: '#666',
            maxWidth: '500px'
          }}>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <a href="/" className="btn" style={{ display: 'inline-block' }}>
            Return to Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
