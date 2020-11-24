import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SortIcon from '@material-ui/icons/Sort';
import IconButton from '@material-ui/core/IconButton';
import { bindActionCreators } from 'redux';
import sortProductsAction from '../reducers/sortProducts';
import Divider from '@material-ui/core/Divider';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function SortMenu(props) {
  const [value, setValue] = React.useState('asc');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getValue = (e) => {
    const {sortProducts} = props;
    sortProducts(e, value);
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        Sort By
      <IconButton aria-label="search" 
        color="primary">
        <SortIcon />
      </IconButton>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <StyledMenuItem>
          <ListItemText primary="Name" onClick={()=>getValue("name")} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="CPU Count" onClick={()=>getValue("cpu")} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Speed" onClick={()=>getValue("speed")} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Power" onClick={()=>getValue("power")} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Price" onClick={()=>getValue("price")} />
        </StyledMenuItem>
        <Divider />
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
        <FormControlLabel value="desc" control={<Radio />} label="Descending" />
      </RadioGroup>
      </StyledMenu>
    </div>
  );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
    sortProducts :sortProductsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortMenu );