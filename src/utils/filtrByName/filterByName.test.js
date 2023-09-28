import { filterProductsByName } from './filterByName';

describe('filterProductsByName', () => {
    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
        { id: 4, name: 'Product D' },
    ];

    it('filtr products by name', () => {
        const filteredProducts = filterProductsByName(products, 'product');
        expect(filteredProducts).toEqual([
            { id: 1, name: 'Product A' },
            { id: 2, name: 'Product B' },
            { id: 3, name: 'Product C' },
            { id: 4, name: 'Product D' },
        ]);
    });

    it('filters products by partial name match', () => {
        const filteredProducts = filterProductsByName(products, 'product a');
        expect(filteredProducts).toEqual([{ id: 1, name: 'Product A' }]);
    });

    it('does not find products if there are no matches', () => {
        const filteredProducts = filterProductsByName(products, 'Nonexistent Product');
        expect(filteredProducts).toEqual([]);
    });

});
