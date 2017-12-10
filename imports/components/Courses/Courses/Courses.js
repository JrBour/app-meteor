import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CourseCollection } from '../../../api/CourseCollection.js';
import './Courses.css'

export default class Courses extends Component {
  constructor(props){
    super(props)
  }
  deleteThisCourse(){
    Meteor.call('courses.remove', this.props.course);
  }
  render() {
    return (
      <li className="taskClassName">
        <button className="delete" onClick={this.deleteThisCourse.bind(this)}>
          &times;
        </button>
        <Link to={'/courses/edit/' + this.props.course}><span>{this.props.courseName}</span></Link>
      </li>
    )
  }
}
