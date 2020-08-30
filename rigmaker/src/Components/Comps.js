import React, {Component, Fragment} from 'react';
import Comp from './Comp';

class Comps extends Component {
	render(){
		return (
			<Fragment>
				<Comp></Comp>
				<Comp></Comp>
				<Comp></Comp>
			</Fragment>
			);
	}
}

export default Comps