import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Link, Redirect } from 'react-router-dom'

// Collections
import { StudentCollection } from '../../api/StudentCollection.js';

class StudentsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call('students.insert', this.state.name);
    this.setState({
      name: ''
    })
    return (
      <Redirect to="/students"/>
    )
  };
  render() {
    return (
      <div className="studentsAdd">
        <h1>Ajouter un élève</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputField">
            <label htmlFor="input">Name :</label>
            <input type="text" id="input" value={this.state.name} onChange={this.handleChange} required/>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <Link to={'/students'}>Students</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    students: StudentCollection.find({}).fetch(),
  };
})(StudentsAdd);


