import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link, Redirect } from 'react-router-dom'

// Collections
import { ClasseCollection } from '../../api/ClasseCollection.js';

class ClassesAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      group: ''
    }
  }
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  };
  handleChangeGroup = (event) => {
    this.setState({
      group: event.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    Meteor.call('classes.insert', this.state.name, this.state.group);
    this.setState({
      name: '',
      group: ''
    })
    console.log('Test');
  };

  render() {
    return (
      <div className="studentsAdd">
        <h1>Ajout d'une classe</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputField">
            <label htmlFor="input">Nom</label>
            <input type="text" id="input" value={this.state.name} onChange={this.handleChangeName} required />
            <label htmlFor="input">Groupe</label>
            <input type="text" id="input" value={this.state.group} onChange={this.handleChangeGroup} required />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <Link to={'/classes'}>Classes</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    classes: ClasseCollection.find({}).fetch(),
  };
})(ClassesAdd);
