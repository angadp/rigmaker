import { ADD_ARTICLE, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "../constants/action-types";

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
    }
    return state;
}

// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//   	console.log(state.articles);
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   	console.log(state.articles);
//   }
//   return state;
// }

export default rootReducer;
export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;