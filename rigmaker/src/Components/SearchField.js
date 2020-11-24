import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SortMenu from './SortMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop:'-20px',
    marginBottom:'10px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  }
}));

export default function SearchField(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <Paper component="form" className={classes.root} 
          style={{ minWidth: 450 }}>
      <SortMenu
        change={props.onSort}
       />
      <InputBase
        className={classes.input}
        onChange={props.onChange}
        placeholder="Search Product"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton tclassName={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
