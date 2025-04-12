
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import PopularProducts from '../components/PopularProducts/PopularProducts';
import ProductFilter from '../components/ProductFilter/ProductFilter';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import { toast } from 'sonner';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [filters, setFilters] = useState({
    minPrice: 200,
    maxPrice: 1000,
    brands: ['samsung', 'iphone']
  });
  
  const popularProducts = [
    {
      id: 1,
      name: "Samsung Galaxy S22",
      brand: "Samsung",
      image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      price: 699,
      originalPrice: 899,
      memory: "128GB"
    },
    {
      id: 2,
      name: "iPhone 13 Pro",
      brand: "iPhone",
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      price: 899,
      originalPrice: 1099,
      memory: "256GB"
    },
    {
      id: 3,
      name: "Samsung Galaxy Z Flip",
      brand: "Samsung",
      image: "https://images.unsplash.com/photo-1662947995963-ab4934e63daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      price: 799,
      originalPrice: 999,
      memory: "256GB"
    },
    {
      id: 4,
      name: "iPhone 12",
      brand: "iPhone",
      image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      price: 599,
      originalPrice: 799,
      memory: "128GB"
    },
    {
      id: 5,
      name: "Samsung Galaxy S21",
      brand: "Samsung",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      price: 549,
      originalPrice: 749,
      memory: "128GB"
    },
    {
      id: 6,
      name: "iPhone 13",
      brand: "iPhone",
      image: "https://images.unsplash.com/photo-1632581586843-c1a29d150761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      price: 699,
      originalPrice: 899,
      memory: "128GB"
    },
    {
      id: 7,
      name: "Samsung Galaxy Note 20",
      brand: "Samsung",
      image: "https://images.unsplash.com/photo-1598327105740-820e04db502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      price: 649,
      originalPrice: 899,
      memory: "256GB"
    },
    {
      id: 8,
      name: "iPhone SE",
      brand: "iPhone",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      price: 329,
      originalPrice: 429,
      memory: "64GB"
    }
  ];
  
  const filteredProducts = popularProducts.filter(product => {
    const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const brandMatch = filters.brands.includes(product.brand.toLowerCase());
    return priceMatch && brandMatch;
  });
  
  const addToCart = (productId) => {
    const product = popularProducts.find(p => p.id === productId);
    setCartItems(prev => prev + 1);
    toast.success(`${product.name} added to cart!`);
  };
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="app">
      <Navbar cartItems={cartItems} />
      <HeroSlider />
      
      <section className="product-section section">
        <div className="container">
          <div className="product-layout">
            <aside className="filter-sidebar">
              <ProductFilter onFilterChange={handleFilterChange} />
            </aside>
            
            <div className="product-content">
              <PopularProducts 
                products={filteredProducts} 
                addToCart={addToCart}
              />
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
