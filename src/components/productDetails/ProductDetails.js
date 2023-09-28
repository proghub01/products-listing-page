import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ProductDetailsCSS from './ProductsDetails.module.css';

const ProductDetails = ({ products }) => {
    const { productId } = useParams();
    const product = products.find((item) => item.id === parseInt(productId));

    return (
        <div className={ProductDetailsCSS.productDetails}>
            <img src={product.img} />
            <h1 className={ProductDetailsCSS.productDetailName}>{product.name}</h1>
            <p>Price: <b>{product.price}$</b> </p>
            <p>{product.desc}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps)(ProductDetails);