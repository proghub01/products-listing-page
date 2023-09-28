import { filterProductsByPrice } from "./filterByPrice";

describe('filterProductsByPrice', () => {
    const products = [
        {id: 1, name: "product A", price: 10},
        {id: 2, name: "product B", price: 5},
        {id: 3, name: "product C", price: 20},
        {id: 4, name: "product D", price: 15},
    ];

    it('if two of inputs is empty', () => {
        const filteredProducts = filterProductsByPrice(products, "EMPTY_INPUTS");
        expect(filteredProducts).toEqual([
            {id: 1, name: "product A", price: 10},
            {id: 2, name: "product B", price: 5},
            {id: 3, name: "product C", price: 20},
            {id: 4, name: "product D", price: 15},
        ])
    });

    it('if two of inputs !isNaN', () => {
        const filteredProducts = filterProductsByPrice(products, 10, 15);
        expect(filteredProducts).toEqual([
            {id: 1, name: "product A", price: 10},
            {id: 4, name: "product D", price: 15},
        ])
    });

    it('min input !isNaN', () => {
        const filteredProducts = filterProductsByPrice(products, 10, null);
        expect(filteredProducts).toEqual([
            {id: 1, name: "product A", price: 10},
            {id: 3, name: "product C", price: 20},
            {id: 4, name: "product D", price: 15},
        ])
    });

    it('max input !isNaN', () => {
        const filteredProducts = filterProductsByPrice(products, null, 10);
        expect(filteredProducts).toEqual([
            {id: 1, name: "product A", price: 10},
            {id: 2, name: "product B", price: 5},
        ])
    });
})
