import React, {Component} from 'react';
import styles from '../App.module.css';

class GraphicsCard extends Component {
	render(){
		return (
			<div className={styles.Gcontainer}>
			  <div className={styles.Gcube}>
			    <div className={styles.Gtop}></div>
			    <div className={styles.Gleft}></div>
			    <div className={styles.Gright}></div>
			    <div className={styles.Gfront}>GTX</div>
			    <div className={styles.Gback}></div>
			  </div>
			</div>
			);
	}
}

export default GraphicsCard;