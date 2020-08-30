import React, {Component} from 'react';
import styles from '../App.module.css';
import RAM from './RAM';
import Processor from './Processor';
import GraphicsCard from './GraphicsCard';

class Motherboard extends Component {
	render(){
		return (
			<div className={styles.motherboard}>
				<span className={styles.motherline1}></span>
				<span className={styles.motherline2}></span>
				<span className={styles.motherline3}></span>
				<span className={styles.motherline4}></span>
				<span className={styles.motherline5}></span>
				<span className={styles.motherline6}></span>
				<span className={styles.motherline7}></span>
				<span className={styles.motherline8}></span>
				<span className={styles.motherline9}></span>
				<span className={styles.motherline10}></span>
				<span className={styles.motherline11}></span>
				<RAM></RAM>
				<Processor></Processor>
				<GraphicsCard></GraphicsCard>
			</div>
			);
	}
}

export default Motherboard;