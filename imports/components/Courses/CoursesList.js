import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Link } from 'react-router-dom'

// Collections
import { CourseCollection } from '../../api/CourseCollection.js';

console.log(CourseCollection);

class CoursesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  renderCourses = () => {
    return this.props.courses.map((course) => {
      console.log('course : ', course.name);
      return <li key={course._id}>{course.name}</li>
    })
  };
  componentDidMount(){
    console.log(this.props.courses);
  }
  render() {
    return (
      <div className="studentsList">
        <h1>Listes des cours</h1>
        <ul>
          {this.renderCourses()}
        </ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/courses/add'}>Add</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe( "courses.all" );
  return {   
    courses: CourseCollection.find({}).fetch(),
  };
})(CoursesList);
