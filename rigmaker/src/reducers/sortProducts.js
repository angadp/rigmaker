import {sortProducts, sortProductsPending} from '../actions';

function sortProductsAction(e, val) {
    return dispatch => {
        dispatch(sortProductsPending());
        dispatch(sortProducts(e, val));
    }
}

export default sortProductsAction;