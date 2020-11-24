import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';

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

export default function AddressForm(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      address1:'',
      city:'',
      postal:'',
      country:''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      address1: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      postal: Yup.number().required('Required'),
      country: Yup.string().required('Required')
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
        Shipping address
      </Typography>
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            error={formik.errors.firstName}
            label="First name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            fullWidth
            autoComplete="given-name"
          />
          {formik.errors.firstName ? (<div>{formik.errors.firstName}</div>):null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            error={formik.errors.lastName}
            label="Last name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            fullWidth
            autoComplete="family-name"
          />
        {formik.errors.lastName ? (<div>{formik.errors.lastName}</div>):null}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            error={formik.errors.lastName}
            label="Address line 1"
            onChange={formik.handleChange}
            value={formik.values.address1}
            fullWidth
            autoComplete="shipping address-line1"
          />
        {formik.errors.address1 ? (<div>{formik.errors.address1}</div>):null}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            error={formik.errors.city}
            label="City"
            onChange={formik.handleChange}
            value={formik.values.city}
            fullWidth
            autoComplete="shipping address-level2"
          />
        {formik.errors.city ? (<div>{formik.errors.city}</div>):null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="postal"
            name="postal"
            error={formik.errors.postal}
            label="Zip / Postal code"
            onChange={formik.handleChange}
            value={formik.values.postal}
            fullWidth
            autoComplete="shipping postal-code"
          />
        {formik.errors.postal ? (<div>{formik.errors.postal}</div>):null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            error={formik.errors.country}
            label="Country"
            onChange={formik.handleChange}
            value={formik.values.country}
            fullWidth
            autoComplete="shipping country"
          />
        {formik.errors.country ? (<div>{formik.errors.country}</div>):null}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
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
        </div>
      </Grid>
      </form>
    </React.Fragment>
  );
}
