import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor'
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register'
import './Home.css'

class Home extends Component {
  renderContent = () => {
    if (!this.props.user) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>Hetic Classroom Dashboard</h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Login />
            </div>
          </div>
        </div>
      )
    }
    return '';
  };

  render() {
    return (
      <div className="home">
        {this.renderContent()}
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  }
})(Home)
