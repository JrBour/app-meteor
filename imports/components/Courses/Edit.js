import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { CourseCollection } from '../../api/CourseCollection.js';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
  }
  handleSumbit(event){
    event.preventDefault();
    Meteor.call('courses.update', this.props.students, this.state.name);
  }
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  };
  render() {
    return (
      <form onSubmit={this.handleSumbit.bind(this) }>
      <div className="inputField">
          <label htmlFor="input">Nom</label>
          <input type="text" id="input" value={this.state.name} onChange={this.handleChangeName} required/>
      </div>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}