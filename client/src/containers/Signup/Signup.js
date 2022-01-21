// Importing React since we are using React.
import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
// Import LoginForm
import SignupForm from './SignupForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 30,
  },
};

class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    credentials: [],
    usernameMissingError: '',
    passwordMissingError: '',
    emailMissingError: '',
    passwordLengthError: '',
    confirmPasswordError: '',
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

    if (this.state.password.length > 0 && this.state.password.length < 8) {
      this.setState({
        passwordLengthError:
          'Password is weak. Password should be at least 8 characters.',
      });
    }

    if (this.state.password.length === 8 || this.state.password.length > 8) {
      this.setState({
        passwordLengthError: '',
      });
    }
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value,
      confirmPasswordError: '',
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      emailMissingError: '',
    });
  };

  handleFormSubmit = (event) => {
    const { history } = this.props;
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

    if (this.state.email === '') {
      this.setState({
        emailMissingError: 'Email is required.',
      });
    }

    if (this.state.confirmPassword === '') {
      this.setState({
        confirmPasswordError: 'Confirm password.',
      });
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        confirmPasswordError:
          'The password entered does not match the first one. Check that the password is entered correctly.',
      });
    } else {
      axios
        .post('/Auth/signup', {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      axios
        .post('/Auth/login', {
          username: this.state.username,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res.data);
          history.push('/home');
        });
    }
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
            <Typography variant="display1">Welcome to MindSpace</Typography>
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
              <SignupForm
                handleFormSubmit={this.handleFormSubmit}
                handleUsernameChange={this.handleUsernameChange}
                handlePasswordChange={this.handlePasswordChange}
                handleConfirmPasswordChange={this.handleConfirmPasswordChange}
                handleEmailChange={this.handleEmailChange}
                usernameMissingError={this.state.usernameMissingError}
                passwordMissingError={this.state.passwordMissingError}
                emailMissingError={this.state.emailMissingError}
                passwordLengthError={this.state.passwordLengthError}
                confirmPasswordError={this.state.confirmPasswordError}
              />
            </Grid>
          </Grid>
        </div>
      </div>,
    ];
  }
}

export default withRouter(withStyles(styles)(Signup));
