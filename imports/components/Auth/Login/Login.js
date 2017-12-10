import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router'
import { Meteor } from 'meteor/meteor'
import './Login.css'
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
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control inputField" id="username" onChange={this.handleChangeUsername} value={this.state.username} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control inputField" id="password" onChange={this.handleChangePassword} value={this.state.password} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to="/register">Create an account</Link>
      </div>
    );
  }
}

export default withRouter(Login)
