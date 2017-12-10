import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Courses from '../Courses/Courses.js';
import { CourseCollection } from '../../../api/CourseCollection.js';
import './CoursesList.css'

class CoursesList extends Component {
  renderCourses(){
    return this.props.courses.map((course) => (
      <Courses key={course._id} course={course._id} courseName={course.name} courseDescription={course.description}/>
    ));
  }
  render() {
    return (
      <div className="studentsList">
        <h1>Listes des cours</h1>
        <ul>
          {this.renderCourses()}
        </ul>
        <Link to={'/'}>Accueil</Link>
        <Link to={'/courses/add'}>Ajouter</Link>
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
