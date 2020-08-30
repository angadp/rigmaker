import React, {Component} from 'react';
import styles from '../App.module.css';
import Motherboard from './Motherboard';
import Powersupply from './Powersupply';
import CabinetFan from './CabinetFan';
import OpticalDrive from './OpticalDrive';
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class Cabinet extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

	render(){
		return (
			<div className={styles.cabinet}>
				<div className={styles.cabinetBack}>
					<CabinetFan></CabinetFan>
				</div>
				<div className={styles.cabinetPanel}>
					<Motherboard></Motherboard>
					<OpticalDrive></OpticalDrive>
					<Powersupply></Powersupply>
				</div>
				<div className={styles.cabinetBottom}>
				</div>
      </div>
			);
	}
}

const Form = connect(
  null,
  mapDispatchToProps
)(Cabinet);

export default Form;