import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router'

import { Accounts } from 'meteor/accounts-base'

import { Link } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      samepassword: '',
      errorMessage: ''
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

  handleChangeSamepassword = (event) => {
    this.setState({
      samepassword: event.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.password !== this.state.samepassword){
      return this.setState({
        errorMessage: 'Les mots de passes ne correspondent pas'
      })
    }
    Accounts.createUser(
      {
        username: this.state.username,
        password: this.state.password
      },
      (error) => {
        if (error) return console.log("there was an error: " + error);
        return this.props.history.push('/')
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
          <div className="field">
            <label htmlFor="passwordAgain">Password Again</label>
            <input type="password" id="passwordAgain" onChange={this.handleChangeSamepassword} value={this.state.samepassword} />
          </div>
          <input type="submit" value="Submit" />
        </form>
        {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : ''}
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    );
  }
}

export default withRouter(Register)
