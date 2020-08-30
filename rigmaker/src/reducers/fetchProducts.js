import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('http://localhost:8000/cpus')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res));
            console.log(res);
            return res;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;