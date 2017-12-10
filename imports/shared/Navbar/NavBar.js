import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
  logout = () => {
    Meteor.logout((error) => {
      if (error) return console.log("there was an error: " + error);
    })
  };

  renderAccount = () => {
    if (this.props.user) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to={'/account'}>{this.props.user ? this.props.user.username : ''}</Link>
          </li>
          <li>
            <button onClick={this.logout} className="btn btn-primary">Logout</button>
          </li>
        </ul>
      )
    }
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/register'}>Register</Link>
        </li>
      </ul>
    )
  };

  renderPosts = () => {
    if (this.props.user) {
      return (
        <ul className="nav navbar-nav">
          <li>
            <Link to={'/students'}>Students</Link>
          </li>
          <li>
            <Link to={'/courses'}>Courses</Link>
          </li>
          <li>
            <Link to={'/classes'}>Classes</Link>
          </li>
        </ul>
      )
    }
    return ''
  };

  render() {
    return (
      <div className="navBar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li>
                <a className="navbar-brand"><h1 className="navTitle">Hetic Classroom</h1></a>
              </li>
            </ul>
            {this.renderPosts()}
            {this.renderAccount()}
          </div>
        </nav>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  }
})(NavBar)
