import React, {Component} from 'react';
import styles from '../App.module.css';

class Powersupply extends Component {
	render(){
		return (
			<div className={styles.powersupply}>
				<div className={styles.front}>
					</div>
				<div className={styles.right}></div>
				<div className={styles.top}></div>
			</div>
			);
	}
}

export default Powersupply;