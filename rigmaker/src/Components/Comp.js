import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from '../App.module.css';

class Comp extends Component {
  render(){
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
  if(this.props.product)
  {
    console.log(this.props.product);
  }
  return (
    <Card className={styles.card}>
      <CardActionArea>
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
        <Button size="small" color="primary">
          Add to cart
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
}

export default Comp;
