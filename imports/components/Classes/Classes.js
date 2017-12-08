import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ClasseCollection } from '../../api/ClasseCollection.js';

export default class Classes extends Component {
  deleteThisClasse(){
    Meteor.call('classes.remove', this.props.classe);
  }
  render() {
    return (
      <li className="taskClassName">
        <button className="delete" onClick={this.deleteThisClasse.bind(this)}>
          &times;
        </button>
        <Link to={'/classes/edit/' + this.props.classe}><span>{this.props.classeName} {this.props.classeGroup}</span></Link>
      </li>
    )
  }
}
