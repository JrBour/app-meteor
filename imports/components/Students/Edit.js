import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { StudentCollection } from '../../api/StudentCollection.js';
import { ClasseCollection } from '../../api/ClasseCollection.js';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      firstName: this.props.firstName,
      classe: 'ubYXjvPxBTsEd7yw4'
    }
  }
  renderClasses(){      
    return this.props.classes.map((classe) => (
      <option key={classe._id} classe={classe._id} value={classe.name}>{classe.name}</option>
    ));
  }
  handleSumbit(event){
    event.preventDefault();
    Meteor.call('students.update', this.props.students, this.state.firstName, this.state.name, this.state.classe);
  }
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  };
  handleChangeClasse = (event) => {
    this.setState({
      classe: event.target.selectedOptions[0].getAttribute('classe')
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
            <select id="listStudent" onChange={this.handleChangeClasse}>
              {this.renderClasses()}
            </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default withTracker(() => {
  Meteor.subscribe( "classes.all" );
  return {
    classes: ClasseCollection.find({}).fetch(),
  };
})(Edit);