import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import store from '../store';
import styles from '../App.module.css';
import CollapsibleTable from './CollapsibleTable';


import {getComponents} from '../reducers';

import { bindActionCreators } from 'redux';

class CartComp extends Component {
  constructor(props){
    super(props);
  }

  render()
  {
    return (
    <CollapsibleTable components={this.props.components}/>
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
