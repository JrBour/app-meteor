import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { StudentCollection } from '../../api/StudentCollection.js';
import Edit from './Edit.js';

class ClassesEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }
  renderClasse(){ 
    return this.props.students.map((student) => (
      <li key={student._id}>{student.firstName} {student.name}</li>
    ));
  }
  render() {
    return (
      <div className="studentsList">
        <h1>Edit classe</h1>
        <ul>
          {this.renderClasse()}
        </ul>
        <Link to={'/'}>Accueil</Link>
        <Link to={'/Classes'}>Classes</Link>
      </div>
    );
  }
}
export default withTracker(() => {
  var url = window.location.pathname;
  var arr = url.split('/');
  var classe = arr[arr.length - 1];
  
  Meteor.subscribe( "students.all" );
  return {
    students: StudentCollection.find({classe : classe}).fetch(),
  };
})(ClassesEdit);
