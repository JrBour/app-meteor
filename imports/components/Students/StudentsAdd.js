import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Student from './Students.js';

// Collections
import { ClasseCollection } from '../../api/ClasseCollection.js';


class StudentsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      name: '',
      classe: 'Web 1'
    }
  }
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  };
  handleChangeClasse = (event) => {
    console.log(event.target.classe);
    this.setState({
      classe: event.target.value,
    })
  };
  renderClasses(){    
    return this.props.classes.map((classe) => (
      <option key={classe._id} classe={classe._id} value={classe.name}>{classe.name}</option>
    ));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call('students.insert', this.state.firstName, this.state.name, this.state.classe);
    this.setState({
      firstName: '',
      name: '',
      classe: ''
    });
  };
  render() {
    return (
      <div className="studentsAdd">
        <h1>Ajouter un élève</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputField">
            <label htmlFor="input">Prénom :</label>
            <input type="text" id="input" value={this.state.firstName} onChange={this.handleChangeFirstName} required/>
            <label htmlFor="input">Name :</label>
            <input type="text" id="input" value={this.state.name} onChange={this.handleChangeName} required/>
            <select id="listStudent" onChange={this.handleChangeClasse}>
              {this.renderClasses()}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <Link to={'/students'}>Students</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe( "classes.all" );
  return {
    classes: ClasseCollection.find({}).fetch(),
  };
})(StudentsAdd);
