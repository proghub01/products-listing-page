Test-task Product-listing-page:

To run this project you need to write "npm start" in terminal.
If port 3000 is already busy, you can choose another port in 
"packege.json" file and replace 
"start": "react-scripts start" to "react-scripts start --port 3001" or another port.

Implemented functionality:
1. "redux" folder: Redux store with json object, array of products and managing states.
2. "components" folder: logic of rendering products.
3. "utils" folder: funtions for sorting and filtering products
3. css-in-js: modular styling of components.
4. Otion to filter products by price range.
5. Sorting options to sort products by price (low to high and high to low).
6. Implemented a button to view more details for each product.
7. Implemented a search bar for users to search for products by name.
7. Adaptability for different screen widths.
8. Unit tests for filter and sort functions.