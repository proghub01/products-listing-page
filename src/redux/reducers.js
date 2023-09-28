import productsData from "./productsData";

const initialState = {
    products: productsData,
    sortType: "ASC",
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };

        case 'SET_SORT_TYPE':
            return {
                ...state,
                sortType: action.payload,
            };
        
        default:
            return state;
    }
};
  
export default rootReducer;
  