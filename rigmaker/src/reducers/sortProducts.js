import {sortProducts, sortProductsPending} from '../actions';

function sortProductsAction() {
    return dispatch => {
        dispatch(sortProductsPending());
        dispatch(sortProducts());
    }
}

export default sortProductsAction;