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
import { Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux'

function App() {
  return (
  	<Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/checkout" component={CheckoutPage} />
    </Switch>
  );
}

export default App;

export class Home extends Component {
	render(){
		return (
		  	<Provider store={store}>
			  <Drawer>
			  	<Cabinet />
			  </Drawer>
			  <ComponentChooser />
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
