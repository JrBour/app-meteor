import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom'
import { CourseCollection } from '../../../api/CourseCollection.js';
import './CoursesAdd.css'

class CoursesAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  };
  handleChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    CourseCollection.insert({
      name: this.state.name,
      description: this.state.description,
      createdAt: new Date(),
    });
    this.setState({
      name: '',
      description: ''
    })
  };

  render() {
    return (
      <div className="coursesAdd">
        <h1>Add a course</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputField">
            <label htmlFor="input">Name :</label>
            <input type="text" id="input" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <textarea name="description" id="description" cols="30" rows="10" value={this.state.description}
                    onChange={this.handleChangeDescription} placeholder="Add description">

          </textarea><br/>
          <input type="submit" value="Submit" />
        </form>
        <Link to={'/courses'}>Courses</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    courses: CourseCollection.find({}).fetch(),
  };
})(CoursesAdd);
