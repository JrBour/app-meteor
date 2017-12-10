import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Student from '../Students/Students';
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
      <div>
        <h1>{student.firstName} {student.name}</h1>
        <button>
          Editer
        </button>
      </div>
    ));
  }
  render() {
    return (
      <div className="studentsList">
        <h1></h1>
          {this.renderStudent()}
        <Link to={'/'}>Accueil</Link>
        <Link to={'/students/add'}>Ajouter</Link>
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
