import React, {Component} from 'react';
import styles from '../App.module.css';

class OpticalDrive extends Component {
	render(){
		return (
			<div className={styles.OpticalDrive}>
				<div className={styles.Ofront}>
					</div>
				<div className={styles.Oright}></div>
				<div className={styles.Otop}></div>
			</div>
			);
	}
}

export default OpticalDrive;