import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import {Elements} from 'react-stripe-elements';

import InjectableCheckoutForm from './CheckoutForm';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function PaymentForm(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues:{
      cardName:'',
      cardNum:'',
      expiryDate:''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Required'),
      cardNum: Yup.number()
    .max(16)
    .min(16)
    .required(),
    }),
    onSubmit: values =>{
      props.handleNext();
    }
  });

  function validateAndSubmit(){
    
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Elements style={{width:'800px'}}>
      <InjectableCheckoutForm/>
      </Elements>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => validateAndSubmit(formik)}
            className={classes.button}
          >
            Next
          </Button>
          <Button onClick={props.handleBack} className={classes.button}>
            Back
          </Button>
        </div>
    </React.Fragment>
  );
}