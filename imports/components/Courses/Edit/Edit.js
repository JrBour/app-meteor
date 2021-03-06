import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { CourseCollection } from '../../../api/CourseCollection.js';
import './Edit.css'

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description
    }
  }
  handleSumbit(event){
    event.preventDefault();
    Meteor.call('courses.update', this.props.students, this.state.name, this.state.description);
  }
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  };

  handleChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  };
  render() {
    return (
      <form onSubmit={this.handleSumbit.bind(this) }>
      <div className="inputField">
          <label htmlFor="input">Name :</label>
          <input type="text" id="input" value={this.state.name} onChange={this.handleChangeName} required/>
      </div>
        <textarea name="description" id="description" cols="30" rows="10" value={this.state.description}
                  onChange={this.handleChangeDescription} placeholder="Add description">

          </textarea><br/><br/>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}
