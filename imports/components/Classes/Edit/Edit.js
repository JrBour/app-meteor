import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { ClasseCollection } from '../../../api/ClasseCollection.js';
import './Edit.css'

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      group: this.props.group
    }
  }
  handleSumbit(event){
    event.preventDefault();
    Meteor.call('classes.update', this.props.classe, this.state.name, this.state.group);
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
  render() {
    return (
      <form onSubmit={this.handleSumbit.bind(this) }>
      <div className="inputField">
          <label htmlFor="input">Nom</label>
          <input type="text" id="input" value={this.state.name} onChange={this.handleChangeName} required/>
          <label htmlFor="input">Groupe</label>
          <input type="text" id="input" value={this.state.group} onChange={this.handleChangeGroup} required/>
      </div>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}
