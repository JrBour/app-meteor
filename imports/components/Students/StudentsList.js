import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Student from './Students.js';

// Collections
import { StudentCollection } from '../../api/StudentCollection.js';

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
        <h1>Listes des élèves</h1>
        <ul>
          {this.renderStudent()}
        </ul>
        <Link to={'/'}>Accueil</Link>
        <Link to={'/students/add'}>Ajouter</Link>
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
