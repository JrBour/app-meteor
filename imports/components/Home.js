import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor'


// Install
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderPost: false,
      userN: null
    }
  }

  logout = () => {
    Meteor.logout((error) => {
      if (error) return console.log("there was an error: " + error);
    })
  };

  render() {
    return (
      <div className="home">
        <h1>Hetic Classroom</h1>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li>
                <p>{this.props.user ? this.props.user.username : ''}</p>
              </li>
              <li>
                <button onClick={this.logout}>Logout</button>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
              <li>
                <Link to={'/register'}>Register</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to={'/students'}>Etudiants</Link>
              </li>
              <li>
                <Link to={'/courses'}>Courses</Link>
              </li>
              <li>
                <Link to={'/classes'}>Classes</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  }
})(Home)
