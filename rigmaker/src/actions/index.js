import { ADD_ARTICLE, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, SORT_PRODUCTS, SORT_PRODUCTS_PENDING, SEARCH_PRODUCTS, SEARCH_PRODUCTS_PENDING, ADD_PROCESSOR, ADD_PROCESSOR_PENDING, LOGIN_PENDING, LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL, INIT_RIG, FETCH_RIG_SUCCESS, FETCH_RIG_FAIL } from "../constants/action-types";

export function addArticle(payload) {
  console.log("add");
  return { type: ADD_ARTICLE, payload }
};

export function addProcessorPending(){
    return { type : ADD_PROCESSOR_PENDING }
}

export function addProcessor(i, selected){
    return { 
        type : ADD_PROCESSOR,
        payload: i,
        selected: selected
    }
}

export function login(){
    console.log("login dispatch");
    return {
        type: LOGIN_PENDING
    }
}

export function loginsuc(res){
    return {
        type: LOGIN_SUCCESSFUL,
        payload: res
    }
}

export function loginunsuc(){
    return {
        type: LOGIN_UNSUCCESSFUL
    }
}

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

export function sortProducts(e, val){
    console.log(e);
    return {
        type: SORT_PRODUCTS,
        sort: e,
        val: val
    }
}

export function sortProductsPending(){
    return {
        type: SORT_PRODUCTS_PENDING
    }
}

export function searchProducts(i){
    console.log("Called");
    return {
        type: SEARCH_PRODUCTS,
        payload: i
    }
}

export function searchProductsPending(){
    return {
        type: SEARCH_PRODUCTS_PENDING
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}

export function initRig(rigNo){
    console.log("initRig");
    return {
        type: INIT_RIG,
        rigNo:rigNo
    }
}

export function fetchRigSuccess(rig){
    return {
        type: FETCH_RIG_SUCCESS,
        rig: rig
    }
}

export function fetchRigFail(error){
    return{
        type: FETCH_RIG_FAIL
    }
}