import {login} from '../actions';
import axios from 'axios';

export default function loginAction(username, password) {
	return dispatch => {
		dispatch(login());
		axios({
		  method: 'post',
		  url: 'http://localhost:8000/login',
		  data: {
		    username: username,
		    password: password
		  },
        	contentType : "application/json"
		})
		.then(function (response) {
    		// handle success
    		console.log(response);
  		})
	}
}