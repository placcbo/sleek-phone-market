
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="app">
      <Navbar cartItems={0} />
      
      <div className="container" style={{ paddingTop: '120px', minHeight: '70vh' }}>
        <h1>Contact Us</h1>
        <p>We're here to help with any questions about our products or services.</p>
        
        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <h2>Get in Touch</h2>
            
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <Mail size={20} />
                <span>support@sleekphone.com</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <MapPin size={20} />
                <span>123 Tech Avenue, San Francisco, CA 94107</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <Clock size={20} />
                <span>Mon-Fri: 9am - 6pm, Sat: 10am - 4pm</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2>Send Us a Message</h2>
            <form style={{ marginTop: '20px' }}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                <textarea rows="5" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
              </div>
              
              <button style={{ backgroundColor: 'var(--primary-blue)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
