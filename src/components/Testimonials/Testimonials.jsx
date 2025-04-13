
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.scss';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Nairobi",
      rating: 5,
      text: "Bought a refurbished iPhone 13 Pro and couldn't be happier. It looks brand new and works perfectly. The battery life is excellent and the camera quality is outstanding.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 2,
      name: "Michael Brown",
      location: "Thika",
      rating: 5,
      text: "Great experience buying a refurbished Samsung Galaxy. The phone arrived in pristine condition and the shipping was incredibly fast. Will definitely buy from here again!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 3,
      name: "Emily Wilson",
      location: "Nairobi",
      rating: 4,
      text: "I was skeptical about buying refurbished, but SleekPhone changed my mind. My iPhone X looks and works like new. The only reason for 4 stars is that it took a bit longer to arrive than expected.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 4,
      name: "David Kim",
      location: "Nairobi",
      rating: 5,
      text: "The Samsung Galaxy S22 I purchased exceeded my expectations. Customer service was amazing when I had questions about my order. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);
  
  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        
        <div className="testimonial-slider-container">
          <div className="testimonial-slider" ref={slideRef}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-slide" key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18}
                        fill={i < testimonial.rating ? "#FDB813" : "none"}
                        color={i < testimonial.rating ? "#FDB813" : "#D1D5DB"}
                      />
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="testimonial-arrow prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="testimonial-arrow next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
