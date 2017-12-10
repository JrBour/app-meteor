import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class StudentsProfil extends Component {
  render() {    
    return (
      <div>
        <h1>{this.props.firstName} {this.props.name}</h1>
        <p id='props'>{this.props.class}</p>
        <Link to={'/students/edit/' + this.props.eleve}>
          <button>
            Editer
          </button>
        </Link>
    </div>
    )
  }
}