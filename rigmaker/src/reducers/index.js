import { ADD_ARTICLE, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, SORT_PRODUCTS, SORT_PRODUCTS_PENDING } from "../constants/action-types";

const initialState = {
  articles: [],
  pending: false,
  products: [],
  error: null
};

export function rootReducer(state = initialState, action) {
	console.log(action.products);
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case SORT_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case SORT_PRODUCTS:
            var prods = state.products.sort(function(a,b){
                return a.Cores - b.Cores
            });
            console.log(prods);
            return {
                ...state,
                pending: false,
                products: prods
            }
    }
    return state;
}

export default rootReducer;
export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;
export const sortProducts = state => state.products;