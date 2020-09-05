import {searchProducts, searchProductsPending} from '../actions';

function searchProductsAction(i) {
	console.log(i);
    return dispatch => {
        dispatch(searchProductsPending());
        dispatch(searchProducts(i));
    }
}

export default searchProductsAction;