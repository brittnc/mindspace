import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    fontSize: 35,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    color: 'white',
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <HamburgerMenu className={classes.menuButton} aria-label="Menu" />
            <Typography variant="title" color="inherit" className={classes.flex} component={Link} to="/home">
              MindSpace
            </Typography>
            <Button className={classes.button} onClick={() => {
              axios.post('/Auth/logout').then(data => console.log(data))
                .then((res) => {
                window.location = '/';
              });
            }}>    
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);
