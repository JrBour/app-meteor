import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Accounts } from 'meteor/accounts-base'

// Install
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  };

  handleSubmit = () => {
    Accounts.createUser(
      {
        username: this.state.username,
        password: this.state.password
      },
      function(error) {
        if (error) {
          console.log("there was an error: " + error.reason);
        } else {
          return <Redirect to="/register" push />
        };
      }
    );
  };

  render() {
    return (
      <div className="home">
        <h1>Register</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={this.handleChangeUsername} value={this.state.username} />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChangePassword} value={this.state.password} />
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Login
