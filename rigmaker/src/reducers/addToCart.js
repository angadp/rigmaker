import {addProcessor, addProcessorPending} from '../actions';

function addProcessorAction(i, selected) {
	console.log(i);
    return dispatch => {
        dispatch(addProcessorPending());
        dispatch(addProcessor(i, selected));
    }
}

export default addProcessorAction;