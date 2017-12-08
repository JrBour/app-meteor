import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router'

import { Meteor } from 'meteor/meteor'

// Install
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

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

  handleSubmit = (e) => {
    e.preventDefault();
    const userName = this.state.username;
    const password = this.state.password;

    Meteor.loginWithPassword(userName, password, (error) => {
      if(error) return console.log("there was an error: " + error);
      return this.props.history.push('/')
    });
  };

  render() {
    return (
      <div className="home">
        <h1>Login</h1>
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
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    );
  }
}

export default withRouter(Login)
