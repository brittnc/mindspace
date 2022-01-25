// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components and style from material-ui-next
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
// Import LoginForm
import LoginForm from './LoginForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 30,
  },
  welcome: {
    color:"white"
  }
};

class Login extends Component {
  state = {
    username: '',
    password: '',
    credentials: [],
    usernameMissingError: '',
    passwordMissingError: '',
  };

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
      usernameMissingError: '',
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
      passwordMissingError: '',
    });
  };

  handleFormSubmit = (event) => {
    const { history, setUser } = this.props;
    event.preventDefault();

    if (this.state.username === '') {
      this.setState({
        usernameMissingError: 'Username is required.',
      });
    }

    if (this.state.password === '') {
      this.setState({
        passwordMissingError: 'Password is required.',
      });
    }

    setUser('i am the user');
    axios
      .post('/Auth/login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.userId);
        history.push('/home');
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return [
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid
            container
            spacing={16}
            className={classes.root}
            justify="center"
          >
            <Typography className={classes.welcome} variant="display1">Welcome to MindSpace</Typography>
          </Grid>
        </Grid>
        ,
        <div className="main-content-section">
          <Grid item xs={12} className={classes.headline}>
            <Grid
              container
              spacing={16}
              className={classes.root}
              justify="center"
            >
              <LoginForm
                handleFormSubmit={this.handleFormSubmit}
                handleUsernameChange={this.handleUsernameChange}
                handlePasswordChange={this.handlePasswordChange}
                usernameMissingError={this.state.usernameMissingError}
                passwordMissingError={this.state.passwordMissingError}
              />
            </Grid>
          </Grid>
        </div>
      </div>,
    ];
  }
}

export default withRouter(withStyles(styles)(Login));
