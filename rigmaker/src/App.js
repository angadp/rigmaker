import React, {Fragment} from 'react';
import './App.css';
import Cabinet from './Components/Cabinet';
import ComponentChooser from './Components/ComponentChooser';
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from './Components/Drawer';

import { Provider } from 'react-redux'

function App() {
  return (
  	<Provider store={store}>
	  <Drawer>
	  	<Cabinet />
	  </Drawer>
	  <ComponentChooser />
	</Provider>
  );
}

export default App;
