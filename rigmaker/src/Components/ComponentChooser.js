import React, {Component, Fragment} from 'react';
import ComponentHeader from './ComponentHeader';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import getRigAction from '../reducers/rig';
import {getRig} from '../reducers';

class ComponentChooser extends Component {
	constructor(props){
		super(props);
		console.log(props);
	}

	componentDidMount(){
        const {getRig} = this.props;
		getRig(this.props.rigNo);
	}

	render(){
		return (<Fragment>
				<ComponentHeader></ComponentHeader>
			</Fragment>);
	}
}

const mapStateToProps = state => ({
    rig: getRig(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getRig: getRigAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentChooser );