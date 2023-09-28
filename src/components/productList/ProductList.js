import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSortType } from '../../redux/actions';

import ProductFilter from '../productFilter/ProductFilter';
import ProductSorter from '../productSorter/ProductSorter';
import ProductItem from '../productItem/ProductItem';

import { filterProductsByPrice } from '../../utils/filterByPrice/filterByPrice'; 
import { sortProductsByPrice } from '../../utils/sortByPrice/sortByPrice'; 
import { filterProductsByName } from '../../utils/filtrByName/filterByName';

import ProductListCSS from './ProductList.module.css';


const ProductList = ({ products, sortType, setSortType }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSortChange = (newSortType) => {
        setSortType(newSortType);
    };
  
    const handleFilterChange = () => {
        let filteredProducts = filterProductsByPrice(products, minPrice, maxPrice);
        
        if (searchQuery.trim() !== '') {
            filteredProducts = filterProductsByName(filteredProducts, searchQuery);
        }
  
        return sortProductsByPrice(filteredProducts, sortType);
    };
  
    const sortedProducts = handleFilterChange();
  
    return (
        <div className={ProductListCSS.productList}>
            <h2 className={ProductListCSS.title}>Apple Market</h2>

            <ProductFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
                searchQuery={searchQuery}
                onSearchQuery={setSearchQuery}
            />
  
            <ProductSorter sortType={sortType} onSortChange={handleSortChange} />
  
            <ul className={ProductListCSS.productBlock}>
                {sortedProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
            
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
    sortType: state.sortType,
});

const mapDispatchToProps = {
    setSortType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
