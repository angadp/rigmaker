import React, {Component, Fragment} from 'react';
import styles from '../App.module.css';

class CabinetFan extends Component {
	render(){
		return (
			<div className={styles.fan__blades}>
				<input type="checkbox" className={styles.engine2} hidden defaultChecked />
				<div className={styles.fan__blades}>
					<div className={styles.blade}><span></span></div>
					<div className={styles.blade}><span></span></div>
					<div className={styles.blade}><span></span></div>
					<div className={styles.blade}><span></span></div>
				</div>
			</div>
			);
	}
}

export default CabinetFan;