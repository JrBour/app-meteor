import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Edit from '../Edit/Edit.js';
import { StudentCollection } from '../../../api/StudentCollection.js';
import { link } from 'fs';
import './StudentsEdit.css'

class StudentsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstName: '',
    }
  }
  renderStudent(){
    return this.props.students.map((student) => (
      <Edit key={student._id} students={student._id} firstName={student.firstName}  name={student.name} />
    ));
  }

  render() {
    return (
      <div className="studentsEdit">
        <h1>Student profil</h1>
        <ul>
          {this.renderStudent()}
        </ul>
        <Link to={'/'}>Home</Link> <br/>
        <Link to={'/students'}>Students</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  var url = window.location.pathname;
  var arr = url.split('/');
  var id = arr[arr.length - 1];
  
  Meteor.subscribe( "students.all" );
  return {
    students: StudentCollection.find({_id : id}).fetch(),
  };
})(StudentsEdit);
