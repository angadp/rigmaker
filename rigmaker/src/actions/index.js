import { ADD_ARTICLE, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "../constants/action-types";

export function addArticle(payload) {
  console.log("add");
  return { type: ADD_ARTICLE, payload }
};

export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(products) {
	console.log("dispatch");
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}