import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Classes from '../Classes/Classes.js';

// Collections
import { ClasseCollection } from '../../../api/ClasseCollection.js';

class ClassesList extends Component {
  renderClasses(){
    return this.props.classes.map((classe) => (
      <Classes key={classe._id} classe={classe._id} classeName={classe.name} classeGroup={classe.group} />
    ))
  }
  render() {
    return (
      <div className="studentsList">
        <h1>Listes des classes</h1>
        <ul>
          {this.renderClasses()}
        </ul>
        <Link to={'/'}>Accueil</Link>
        <Link to={'/classes/add'}>Ajouter</Link>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe( "classes.all" );
  return {   
    classes: ClasseCollection.find({}).fetch(),
  };
})(ClassesList);
