import React from 'react';
import ProductFilterCSS from './ProductFilter.module.css';

const ProductFilter = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange, searchQuery, onSearchQuery }) => {
    return (
        <div className={ProductFilterCSS.filterInputs}>
            <div className={ProductFilterCSS.searchByName}>
                <input className={ProductFilterCSS.input}
                    type="text"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={(e) => onSearchQuery(e.target.value)}
                />
            </div>
            
            <div className={ProductFilterCSS.filterByPrice}>
                <input className={ProductFilterCSS.input}
                    type="number"
                    placeholder="Minimum price"
                    value={minPrice}
                    onChange={(e) => onMinPriceChange(e.target.value)}
                />


                <input className={ProductFilterCSS.input}
                    type="number"
                    placeholder="Maximum price"
                    value={maxPrice}
                    onChange={(e) => onMaxPriceChange(e.target.value)}
                />
            </div>
            
        </div>
    );
};

export default ProductFilter;
