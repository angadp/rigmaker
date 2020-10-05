import {login, loginsuc, loginunsuc} from '../actions';
import axios from 'axios';
import history from '../history';

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
    		if(response.data != null)
    		{
	    		history.push('profile');
	    		dispatch(loginsuc(response));
    		}
    		else
    		{
    			dispatch(loginunsuc());
    		}
  		})
	}
}