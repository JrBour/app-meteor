import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ClasseCollection } from '../../../api/ClasseCollection.js';
import './Classes.css'

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
        <Link to={'/classes/edit/' + this.props.classe}>
        <button className="delete">
          Edit
        </button>
        </Link>
        <Link to={'/classes/list/' + this.props.classe}><span>{this.props.classeName}</span></Link>
      </li>
    )
  }
}
