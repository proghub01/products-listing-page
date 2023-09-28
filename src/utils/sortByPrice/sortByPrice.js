export const sortProductsByPrice = (products, sortType) => {
    const sortedProducts = [...products];

    if (sortType === 'ASC') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
};
