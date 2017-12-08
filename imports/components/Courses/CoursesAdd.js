import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Link, Redirect } from 'react-router-dom'

// Collections
import { CourseCollection } from '../../api/CourseCollection.js';

class CoursesAdd extends Component {
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
    CourseCollection.insert({
      name: this.state.name,
      createdAt: new Date(),
    });
    this.setState({
      name: ''
    })
  };

  render() {
    return (
      <div className="studentsAdd">
        <h1>Ajout d'un cours</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputField">
            <label htmlFor="input">Name :</label>
            <input type="text" id="input" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <Link to={'/courses'}>Cours</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    courses: CourseCollection.find({}).fetch(),
  };
})(CoursesAdd);
