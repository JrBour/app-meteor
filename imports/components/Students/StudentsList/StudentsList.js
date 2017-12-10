import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Student from '../Students/Students.js';
import { StudentCollection } from '../../../api/StudentCollection.js';
import './StudentsList.css'

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  renderStudent(){
    return this.props.students.map((student) => (
      <Student key={student._id} eleve={student._id} eleveName={student.name} eleveFirstName={student.firstName} />
    ));
  }

  render() {
    return (
      <div className="studentsList">
        <h1>Students Lists</h1>
        <ul>
          {this.renderStudent()}
        </ul>
        <Link to={'/'}>Home</Link> <br/>
        <Link to={'/students/add'}>Add</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe( "students.all" );
  return {
    students: StudentCollection.find({}).fetch(),
  };
})(StudentsList);
