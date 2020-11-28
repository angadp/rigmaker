import {addProcessor, addProcessorPending} from '../actions';
import axios from 'axios';

function addProcessorAction(i, selected) {
	console.log(i);
    return dispatch => {
        dispatch(addProcessorPending());
        dispatch(addProcessor(i, selected));
    }
}

export default addProcessorAction;