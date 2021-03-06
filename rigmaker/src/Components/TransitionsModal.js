import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Carousel} from 'react-bootstrap';

import styles from '../App.module.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '80%',
    height: '80%',
    overflow: 'scroll'
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.show}
        onClose={props.onHide}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.show}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.product.Name}</h2>
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
    <div>description</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
