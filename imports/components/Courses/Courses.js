import React, { Component } from 'react';
import { CourseCollection } from '../../api/CourseCollection.js';

export default class Course extends Component {

  deleteThisCourse(){
    Meteor.call('courses.remove', this.props.course);
  }
  render() {
    return (
      <li className="taskClassName">
        <button className="delete" onClick={this.deleteThisCourse.bind(this)}>
          &times;
        </button>
        <span className="text">{this.props.eleveName}</span>
      </li>
    )
  }
}
