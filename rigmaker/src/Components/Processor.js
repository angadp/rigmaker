import React, {Component} from 'react';
import styles from '../App.module.css';

class Processor extends Component {
	render(){
		return (
			<div className={styles.Processor}>
				<div className={styles.ProcessorUnit}></div>
				<div className={styles.ProcessorLine1}></div>
				<div className={styles.ProcessorLine2}></div>
				<div className={styles.ProcessorLine3}></div>
				<div className={styles.ProcessorLine4}></div>
				<div className={styles.ProcessorLine5}></div>
				<div className={styles.ProcessorLine6}></div>
			</div>
			);
	}
}

export default Processor;