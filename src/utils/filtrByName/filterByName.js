export const filterProductsByName = (products, name) => {
    const filtredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(name)
    );
    
    return filtredProducts;
}