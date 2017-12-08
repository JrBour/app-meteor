import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor'

import AccountsUIWrapper from '../ui/AccountUiWrapper';

// Install
import { Link } from 'react-router-dom'

class Home extends Component {
  logout = () => {
    Meteor.logout((error) => {
      if (error) return console.log("there was an error: " + error);
    })
  };

  renderLogout = () => {
    if (this.props.user) {
      return <button onClick={this.logout}>Logout</button>
    }
  };

  renderLogin = () => {
    if (!this.props.user) {
      return (
        <div>
          <div className="linkBlock">
            <Link to={'/login'}>Login</Link>
          </div>
          <div className="linkBlock">
            <Link to={'/register'}>Register</Link>
          </div>
        </div>
      )
    }
  };

  render() {
    return (
      <div className="home">
        <h1>Hetic Classroom</h1>
        <p>{this.props.user ? this.props.user.username : ''}</p>
        {this.renderLogout()}
        {this.renderLogin()}
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <Link to={'/students'}>Etudiants</Link>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <Link to={'/courses'}>Courses</Link>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <Link to={'/classes'}>Classes</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  }
})(Home)
