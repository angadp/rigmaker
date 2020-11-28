import React, {Fragment, Component} from 'react';
import './App.css';
import Cabinet from './Components/Cabinet';
import ComponentChooser from './Components/ComponentChooser';
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from './Components/Drawer';
import SignIn from './Components/signin';
import SignUp from './Components/SignUp';
import Checkout from './Components/Checkout';
import CartComp from './Components/CartComp';
import Profile from './Components/profile';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import { Provider } from 'react-redux'

function App() {
  return (
  	<Router  history={history}>
        <Route path="/rig/:id"  render={(props) => <Home {...props} />}  />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/profile" component={ProfilePage} />
    </Router>
  );
}

export default App;

export class Home extends Component {
	constructor(props){
		super(props);
	}

	render(){
		var rigNo = this.props.match.params.id;
		console.log(rigNo);
		return (
		  	<Provider store={store}>
			  <Drawer>
			  	<Cabinet />
			  </Drawer>
			  <ComponentChooser rigNo={rigNo}/>
			</Provider>
  );
	}
}

export class Cart extends Component {
	render(){
		return (
		  	<Provider store={store}>
			  <Drawer>
			  	<CartComp />
			  </Drawer>
			</Provider>
  );
	}
}

export class Login extends Component {
	render(){
		return (
		  	<Provider store={store}>
			  <Drawer>
		  		<SignIn />
			  </Drawer>
			</Provider>
  );
	}
}

export class SignUpPage extends Component {
	render(){
		return (
		  	<Provider store={store}>
			  <Drawer>
		  		<SignUp />
			  </Drawer>
			</Provider>
  );
	}
}

export class CheckoutPage extends Component {
	render(){
		return (
		  	<Provider store={store}>
			  <Drawer>
		  		<Checkout />
			  </Drawer>
			</Provider>
  );
	}
}

export class ProfilePage extends Component {
	render(){
		return (
		  	<Provider store={store}>
			  <Drawer>
		  		<Profile />
			  </Drawer>
			</Provider>
  );
	}
}
