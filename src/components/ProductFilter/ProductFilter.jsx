
import React, { useState } from 'react';
import { Range } from 'react-range';
import { Filter, SlidersHorizontal } from 'lucide-react';
import './ProductFilter.scss';

const ProductFilter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([200, 1000]);
  const [selectedBrands, setSelectedBrands] = useState({
    samsung: true,
    iphone: true
  });
  
  const handlePriceChange = (values) => {
    setPriceRange(values);
    applyFilters(values, selectedBrands);
  };
  
  const handleBrandChange = (brand) => {
    const updatedBrands = {
      ...selectedBrands,
      [brand]: !selectedBrands[brand]
    };
    
    setSelectedBrands(updatedBrands);
    applyFilters(priceRange, updatedBrands);
  };
  
  const applyFilters = (prices, brands) => {
    onFilterChange({
      minPrice: prices[0],
      maxPrice: prices[1],
      brands: Object.keys(brands).filter(key => brands[key])
    });
  };
  
  return (
    <>
      <div className="filter-title">
        <SlidersHorizontal size={18} />
        <span>Quick Filters</span>
      </div>
      
      <div className="filter-group">
        <span className="filter-label">Price Range:</span>
        <div className="price-slider">
          <Range
            step={10}
            min={100}
            max={1500}
            values={priceRange}
            onChange={(values) => handlePriceChange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="slider-track"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="slider-thumb"
              />
            )}
          />
          <div className="price-range-values">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      <div className="filter-group">
        <span className="filter-label">Brand:</span>
        <div className="brand-options">
          <label className="brand-option">
            <input
              type="checkbox"
              checked={selectedBrands.samsung}
              onChange={() => handleBrandChange('samsung')}
            />
            <span>Samsung</span>
          </label>
          
          <label className="brand-option">
            <input
              type="checkbox"
              checked={selectedBrands.iphone}
              onChange={() => handleBrandChange('iphone')}
            />
            <span>iPhone</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
