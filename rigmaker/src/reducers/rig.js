import { initRig, fetchRigSuccess, fetchRigFail } from '../actions/';
import axios from 'axios';

function getRigAction(rigNo){
	console.log("AnggadddInit")
	return dispatch => {
		dispatch(initRig(rigNo));
		fetch('http://localhost:8000/rig?rigNo='+rigNo)
        .then(res => res.json())
        .then(res => dispatch(fetchRigSuccess(res)))
        .catch(error => {
            dispatch(fetchRigFail(error));
        })
    }
}

export default getRigAction;