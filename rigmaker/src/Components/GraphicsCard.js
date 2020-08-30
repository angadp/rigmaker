import React, {Component} from 'react';
import styles from '../App.module.css';

class GraphicsCard extends Component {
	render(){
		return (
			<div className={styles.GraphicsCard}>
				<div className={styles.Gfront}>
					</div>
				<div className={styles.Gright}></div>
				<div className={styles.Gtop}></div>
			</div>
			);
	}
}

export default GraphicsCard;