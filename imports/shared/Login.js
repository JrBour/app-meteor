import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../ui/AccountUiWrapper';

import { UsersCollection } from "../api/UsersCollection";

// Install
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: ''
    }
  }

  handleChangePseudo = (event) => {
    this.setState({
      pseudo: event.target.value,
    })
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  };



  handleSubmit = (e) => {
    e.preventDefault();

    UsersCollection.insert({
      owner: Meteor.userId(),
      createdAt: new Date(),
      name: this.state.name,
    });
    this.setState({
      pseudo: '',
      password: ''
    });
    return <Redirect to="/students"/>
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <div className="inputField">
            <label htmlFor="input">Pseudo :</label>
            <input type="text" id="input" value={this.state.pseudo} onChange={this.handleChangePseudo} />
          </div>
          <div className="inputField">
            <label htmlFor="input">Password :</label>
            <input type="text" id="input" value={this.state.password} onChange={this.handleChangePassword} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login
