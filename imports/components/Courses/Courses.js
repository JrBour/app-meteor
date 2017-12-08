import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CourseCollection } from '../../api/CourseCollection.js';

export default class Courses extends Component {
  constructor(props){
    super(props)
    console.log('dfsd')
  }
  deleteThisCourse(){
    Meteor.call('courses.remove', this.props.course);
  }
  render() {
    console.log('this.props.courseName : ', this.props.courseName)
    return (
      <li className="taskClassName">
        <button className="delete" onClick={this.deleteThisCourse.bind(this)}>
          &times;
        </button>
        <Link to={'/course/edit/' + this.props.course}><span>{this.props.courseName}</span></Link>
      </li>
    )
  }
}
