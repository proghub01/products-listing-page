import { sortProductsByPrice } from "./sortByPrice";

describe('sortProductsByPrice', () => {
    const products = [
        {id: 1, name: "product A", price: 10},
        {id: 2, name: "product B", price: 5},
        {id: 3, name: "product C", price: 20},
        {id: 4, name: "product D", price: 15},
    ];

    it('sort by price increase', () => {
        const sortedProducts = sortProductsByPrice(products, 'ASC');
        expect(sortedProducts).toEqual([
            {id: 2, name: "product B", price: 5},
            {id: 1, name: "product A", price: 10},
            {id: 4, name: "product D", price: 15},
            {id: 3, name: "product C", price: 20},
        ])
    });

    it('sort by price decrease', () => {
        const sortedProducts = sortProductsByPrice(products, 'DESC');
        expect(sortedProducts).toEqual([
            {id: 3, name: "product C", price: 20},
            {id: 4, name: "product D", price: 15},
            {id: 1, name: "product A", price: 10},
            {id: 2, name: "product B", price: 5},
        ])
    });
});