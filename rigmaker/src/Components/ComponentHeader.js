import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Comps from './Comps';
import SearchField from './SearchField';
import { orderBy } from "lodash";
import store from '../store';
import styles from '../App.module.css';

import { bindActionCreators } from 'redux';


import searchProductsAction from '../reducers/searchProducts';
import fetchProductsAction from '../reducers/fetchProducts';
import sortProductsAction from '../reducers/sortProducts';
import {getProductsError, getProducts, getProductsPending, getComponents} from '../reducers';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

class ComponentHeader extends Component {
  constructor(props)
  {
    super(props);
    this.state = { "val" : 0, "selected": "" };
    this.value = 0;
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
        const {fetchProducts} = this.props;
        fetchProducts();
    }

  componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Again");
    }

  handleSelect(index){
    this.setState({
      "val" : index
    });
  }

  handleColumnHeaderClick() {
    // var coll = this.props.products;

    //   const sortedCollection = orderBy(
    //     coll,
    //     ["cores"],
    //     true
    //   );

      // console.log(sortedCollection);
      console.log("Redo");
      const {sortProducts} = this.props;
      sortProducts();
    }

    handleChange(e) {
      console.log(e.target.value);
      const {searchProducts} = this.props;
      searchProducts(e.target.value);
    }

    handleSort(e) {
      console.log(e);
    }

  render()
  {
    var current = ""
    console.log(this.props.components);
    if(this.props.components != undefined && this.props.components.hasOwnProperty("processor"))
      current = this.props.components.processor.Name;
  return (
    <div>
      <AppBar position="static" color="default"
          style={{ minWidth: 500 }}>
        <Tabs
          value={this.state.val}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          className={styles.tabs}
          scrollButtons="auto"
          style={{ minWidth: 500 }}
          orientation="horizontal"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Processor" {...a11yProps(0)} onClick={() => this.handleSelect(0)}/>
          <Tab label="Motherboard" {...a11yProps(1)} onClick={() => this.handleSelect(1)}/>
          <Tab label="RAM" {...a11yProps(2)} onClick={() => this.handleSelect(2)}/>
          <Tab label="Hard Drive" {...a11yProps(3)} onClick={() => this.handleSelect(3)}/>
          <Tab label="SSD" {...a11yProps(4)} onClick={() => this.handleSelect(4)}/>
          <Tab label="Graphics Card" {...a11yProps(5)} onClick={() => this.handleSelect(5)}/>
          <Tab label="Optical Disk" {...a11yProps(6)} onClick={() => this.handleSelect(6)}/>
          <Tab label="Power Supply" {...a11yProps(7)} onClick={() => this.handleSelect(7)}/>
          <Tab label="Monitor" {...a11yProps(8)} onClick={() => this.handleSelect(8)}/>
          <Tab label="Keyboard" {...a11yProps(9)} onClick={() => this.handleSelect(9)}/>
          <Tab label="Mouse" {...a11yProps(10)} onClick={() => this.handleSelect(10)}/>
          <Tab label="Headphone" {...a11yProps(11)} onClick={() => this.handleSelect(11)}/>
          <Tab label="Speaker" {...a11yProps(12)} onClick={() => this.handleSelect(12)}/>
          <Tab label="Webcam" {...a11yProps(13)} onClick={() => this.handleSelect(13)}/>
          <Tab label="Cabinet Cooler" {...a11yProps(14)} onClick={() => this.handleSelect(14)}/>
          <Tab label="CPU Cooler" {...a11yProps(15)} onClick={() => this.handleSelect(15)}/>
          <Tab label="Sound Card" {...a11yProps(16)} onClick={() => this.handleSelect(16)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={this.state.val} index={0} >
        <SearchField onChange={this.handleChange} onSort={this.handleSort} />
        <div class="alert alert-primary" role="alert" style={{minWidth: 450}}>
          <b>Current Component: </b>{current}
        </div>
        <Comps products={this.props.products}/>
      </TabPanel>
      <TabPanel value={this.state.val} index={1} >
        Motherboard
      </TabPanel>
      <TabPanel value={this.state.val} index={2} >
        RAM
      </TabPanel>
      <TabPanel value={this.state.val} index={3} >
        Hard Drive
      </TabPanel>
      <TabPanel value={this.state.val} index={4} >
        SSD
      </TabPanel>
      <TabPanel value={this.state.val} index={5} >
        Graphics Card
      </TabPanel>
      <TabPanel value={this.state.val} index={6} >
        Optical Disk
      </TabPanel>
      <TabPanel value={this.state.val} index={7} >
        Power Supply
      </TabPanel>
      <TabPanel value={this.state.val} index={8} >
        Monitor
      </TabPanel>
      <TabPanel value={this.state.val} index={9} >
        Keyboard
      </TabPanel>
      <TabPanel value={this.state.val} index={10} >
        Mouse
      </TabPanel>
      <TabPanel value={this.state.val} index={11} >
        Headphone
      </TabPanel>
      <TabPanel value={this.state.val} index={12} >
        Speaker
      </TabPanel>
      <TabPanel value={this.state.val} index={13} >
        Webcam
      </TabPanel>
      <TabPanel value={this.state.val} index={14} >
        Cabinet Cooler
      </TabPanel>
      <TabPanel value={this.state.val} index={15} >
        CPU Cooler
      </TabPanel>
      <TabPanel value={this.state.val} index={16}>
        Sound Card
      </TabPanel>
    </div>
  );
}
}

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state),
    components: getComponents(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction,
    sortProducts :sortProductsAction,
    searchProducts :searchProductsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentHeader );
