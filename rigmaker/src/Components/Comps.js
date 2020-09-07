import React, {Component, Fragment} from 'react';
import Comp from './Comp';
import styles from '../App.module.css';

class Comps extends Component {
	render(){
		var list = []
		if(this.props.products)
		{
			var i;
			for(i=0;i<this.props.products.length;i++)
			{
				list.push(<Comp product={this.props.products[i]} key={this.props.products[i]._id}></Comp>);
			}
		}
		return (
				<div className={styles.Comps}>
				{list}
				</div>
			);
	}
}

export default Comps