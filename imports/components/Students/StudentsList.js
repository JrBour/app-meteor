import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Link } from 'react-router-dom'

// Collections
import { StudentCollection } from '../../api/StudentCollection.js';

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  renderEleve = () => {
    return this.props.students.map((eleve) => {
      console.log('eleve : ', eleve.name);
      return <li key={eleve._id}>{eleve.name}</li>
    })
  };

  render() {
    return (
      <div className="studentsList">
        <h1>Listes des élèves</h1>
        <ul>
          {this.renderEleve()}
        </ul>
        <Link to={'/students/add'}>Add</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    students: StudentCollection.find({}).fetch(),
  };
})(StudentsList);
