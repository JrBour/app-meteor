import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import './UsersList.css'

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  renderUsers() {
    return this.props.users.map((user) => {
      console.log('user : ', user);
      return (
        <li key={user._id}>{user.username}</li>
      )
    });
  }

  render() {
    return (
      <div className="studentsList">
        <h1>Listes des élèves</h1>
        <ul>
          {this.renderUsers()}
        </ul>
        <Link to={'/'}>Accueil</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("userList");
  return {
    users: Meteor.users.find().fetch()
  };
})(UsersList);
