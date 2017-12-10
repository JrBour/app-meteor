import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import StudentsProfil from '../StudentsProfil/StudentsProfil.js';
import './StudentsShow.css'
import { StudentCollection } from '../../../api/StudentCollection.js';
import { ClasseCollection } from '../../../api/ClasseCollection.js';

class StudentsShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: ''
    }
  }
  renderStudent(){
    return this.props.students.map((student) => (
      <StudentsProfil key={student._id} eleve={student._id} firstName={student.firstName} name={student.name} />
    ));
  }
  render() {
    return (
      <div className="studentsList">
        <p>{this.props.classes.name}</p>
          {this.renderStudent()}

        <Link to={'/'}>Home</Link>
        <Link to={'/students/add'}>Add</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  var url = window.location.pathname;
  var arr = url.split('/');
  var id = arr[arr.length - 1];
  
  Meteor.subscribe( "students.all" );
  Meteor.subscribe( "classes.all" );
  return {
    students: StudentCollection.find({_id : id}).fetch(),
    classes: ClasseCollection.find({_id : id}).fetch(),
  };
})(StudentsShow);
