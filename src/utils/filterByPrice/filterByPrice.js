export const filterProductsByPrice = (products, minPrice, maxPrice) => {
    const minPriceFloat = parseFloat(minPrice);
    const maxPriceFloat = parseFloat(maxPrice);

    return products.filter(product => {
        const productPrice = product.price;

        if (isNaN(minPriceFloat) && isNaN(maxPriceFloat)) {
            return true;
        }

        if (!isNaN(minPriceFloat) && !isNaN(maxPriceFloat)) {
            return productPrice >= minPriceFloat && productPrice <= maxPriceFloat;
        }

        if (!isNaN(minPriceFloat)) {
            return productPrice >= minPriceFloat;
        }

        if (!isNaN(maxPriceFloat)) {
            return productPrice <= maxPriceFloat;
        }

        return true;
    });
};
