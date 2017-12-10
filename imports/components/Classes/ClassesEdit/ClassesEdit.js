import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { ClasseCollection } from '../../../api/ClasseCollection.js';
import Edit from '../Edit/Edit.js';
import './ClassesEdit.css'

class ClassesEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }
  renderClasse(){ 
    return this.props.classes.map((classe) => (
      <Edit key={classe._id} classe={classe._id} name={classe.name} />
    ));
  }
  render() {
    return (
      <div className="studentsList">
        <h1>Edit classe</h1>
        <ul>
          {this.renderClasse()}
        </ul>
        <Link to={'/'}>Accueil</Link>
        <Link to={'/Classes'}>Classes</Link>
      </div>
    );
  }
}
export default withTracker(() => {
  var url = window.location.pathname;
  var arr = url.split('/');
  var id = arr[arr.length - 1];
  
  Meteor.subscribe( "classes.all" );
  return {
    classes: ClasseCollection.find({_id : id}).fetch(),
  };
})(ClassesEdit);
