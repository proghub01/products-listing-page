import React from 'react';
import { Link } from 'react-router-dom';

import ProductItemCSS from './ProductItem.module.css';

const ProductItem = ({ product }) => {
    return (
        <div className={ProductItemCSS.product}>
            <img src={product.img} alt={product.name} />
            <h3 className={ProductItemCSS.productName}>{product.name}</h3>
            <p>Price: {product.price}$</p>
            <Link to={`/productDetails/${product.id}`}>
                <button className={ProductItemCSS.buyBtn}>BUY</button>
            </Link>
        </div>
    );
};

export default ProductItem;