import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { StudentCollection } from '../../../api/StudentCollection.js';
import './Edit.css'

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      firstName: this.props.firstName
    }
  }
  handleSumbit(event){
    event.preventDefault();
    Meteor.call('students.update', this.props.students, this.state.firstName, this.state.name);
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
  render() {
    return (
      <form onSubmit={this.handleSumbit.bind(this) }>
        <div className="inputField">
            <label htmlFor="input">Prénom :</label>
            <input type="text" id="input" value={this.state.firstName} onChange={this.handleChangeFirstName} required/>
            <label htmlFor="input">Name :</label>
            <input type="text" id="input" value={this.state.name} onChange={this.handleChangeName} required/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
