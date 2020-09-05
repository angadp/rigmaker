import React, {Fragment, Component} from 'react';
import './App.css';
import Cabinet from './Components/Cabinet';
import ComponentChooser from './Components/ComponentChooser';
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from './Components/Drawer';
import SignIn from './Components/signin'
import { Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux'

function App() {
  return (
  	<Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/signin" component={Login} />
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

export class About extends Component {
	render(){
		return (
		  	<Provider store={store}>
			  <Drawer>
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
