import React, {Component, Fragment} from 'react';
import styles from '../App.module.css';

class RAM extends Component {
	render(){
		return (
			<Fragment>
				<div className={styles.RAM1}></div>
				<div className={styles.RAM2}></div>
			</Fragment>
			);
	}
}

export default RAM;