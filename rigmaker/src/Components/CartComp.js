import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import store from '../store';
import styles from '../App.module.css';


import {getComponents} from '../reducers';

import { bindActionCreators } from 'redux';

class CartComp extends Component {
  constructor(props){
    super(props);
  }

  render()
  {
    console.log(this.props);
    var processor = ""
    if(this.props.components != undefined && this.props.components.hasOwnProperty("processor"))
      processor = this.props.components.processor.Name;
    console.log(this.props.components);
    return (
    <Fragment> <p>{processor}</p> </Fragment>
    );
  }
}

const mapStateToProps = state => ({
    components: getComponents(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComp );
