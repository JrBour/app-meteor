import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { CourseCollection } from '../../api/CourseCollection.js';
import { link } from 'fs';
import Edit from './Edit.js';

class CoursesEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  renderCourse(){ 
    return this.props.courses.map((course) => (
      <Edit key={course._id} students={course._id} name={course.name} />
    ));
  }
  render() {
    return (
      <div className="studentsList">
        <h1>Cours</h1>
        <ul>
          {this.renderCourse()}
        </ul>
        <Link to={'/'}>Accueil</Link>
        <Link to={'/courses'}>Cours</Link>
      </div>
    );
  }
}
export default withTracker(() => {
  var url = window.location.pathname;
  var arr = url.split('/');
  var id = arr[arr.length - 1];
  
  Meteor.subscribe( "courses.all" );
  return {
    courses: CourseCollection.find({_id : id}).fetch(),
  };
})(CoursesEdit);
