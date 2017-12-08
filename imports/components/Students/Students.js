import React, { Component } from 'react';
import { StudentCollection } from '../../api/StudentCollection.js';

export default class Student extends Component {

  deleteThisStudent(){
    Meteor.call('students.remove', this.props.eleve);
  }
  render() {
    return (
      <li className="taskClassName">
        <button className="delete" onClick={this.deleteThisStudent.bind(this)}>
          &times;
        </button>
        <span className="text">{this.props.eleveFirstName} {this.props.eleveName}</span>
      </li>
    )
  }
}
