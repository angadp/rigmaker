import React, {Component, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Modal, Carousel} from 'react-bootstrap';
import store from '../store';

import { bindActionCreators } from 'redux';


import addProcessorAction from '../reducers/addToCart';
import {getProductsPending, getComponents} from '../reducers';

import styles from '../App.module.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      className={styles.Modal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.Name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body 
      className={styles.CarouselMid}>
        <Carousel>
  <Carousel.Item className={styles.CarouselItem}>
    <img
      src={props.product.pic}
      className={styles.CarouselPic}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item className={styles.CarouselItem}>
    <img
      src={props.product.pic}
      className={styles.CarouselPic}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item className={styles.CarouselItem}>
    <img
      src={props.product.pic}
      className={styles.CarouselPic}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
  <p>A CPU</p>
      </Modal.Body>
      <Modal.Footer>
      <Button color="primary" onClick={props.addToCart}>
          Add to cart
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class Comp extends Component {
  constructor(props)
  {
    super(props);
    this.state = { "show" : false };
    this.addToCart = this.addToCart.bind(this);  
  }

  componentDidMount() {
    console.log("ANgad1");
  }

  handleClose()
  {
    this.setState({"show":false})
  }

  handleShow()
  {
    this.setState({"show":true})
  }

  addToCart(i, selected){
    const {addProcessor} = this.props;
    addProcessor(i, selected);
  }

  componentDidUpdate(){
    console.log("Angad");
  }

  render(){
  var comp = this.props.components;
  var selected = false;
  console.log(comp);
  if (comp != undefined && comp.hasOwnProperty("processor")) { 
    if(comp.processor.Name == this.props.product.Name)
      selected = true;
  }
  var speed = this.props.product.Speed;
  var speedText = ""
  var powerText = ""
  if(speed > 1000000000)
  {
    console.log(speed/1000000000.0);
    speedText = String(speed/1000000000.0) + " GHz";
  }
  else if(speed > 1000000)
  {
    console.log(speed/1000000.0);
    speedText = String(speed/1000000.0) + " MHz";
  }
  else if(speed > 1000)
  {
    console.log(speed/1000.0);
    speedText = String(speed/1000.0) + " KHz";
  }
  powerText = this.props.product.Power + " W";
  var priceText = "Rs " + this.props.product.Price;
  return (
    <Fragment>
    <Card className={styles.card}>
      <CardActionArea onClick={() => this.handleShow()}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={this.props.product.pic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.product.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Core: {this.props.product.Cores}<br />
            Speed: {speedText}<br />
            Power: {powerText}<br />
            Price: {priceText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  onClick={() => this.addToCart(this.props.product, selected)}>
          {(() => {
        switch (selected) {
          case false:   return "Add to Cart";
          case true: return "Remove from Cart";
        }
      })()}
        </Button>
        <Button size="small" onClick={() => this.handleShow()}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    <MyVerticallyCenteredModal
        product={this.props.product}
        show={this.state.show}
        addToCart={() => this.addToCart(this.props.product.Name)}
        onHide={() => this.handleClose()}
      />
      </Fragment>
  );
}
}

const mapStateToProps = state => ({
    pending: getProductsPending(state),
    components: getComponents(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addProcessor: addProcessorAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comp);
