import React from "react";
import ProductSorterCSS from './ProductSorter.module.css';

const ProductSorter = ({ sortType, onSortChange }) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    }

    return (
        <div className={ProductSorterCSS.sortProducts}>
            <label>
                Sorting by:
                <select value={sortType} onChange={handleSortChange} className={ProductSorterCSS.sortSelect}>
                    <option value="ASC">Price increase</option>
                    <option value="DESC">Price decrease</option>
                </select>
            </label>
        </div>
    );
}

export default ProductSorter;