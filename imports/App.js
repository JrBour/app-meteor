import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Install
import {
  Router,
  Route,
} from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory';

import { StudentCollection } from './api/StudentCollection.js';

// Shared Component
import Home from './components/Home';
import StudentsList from './components/Students/StudentsList';
import StudentsAdd from './components/Students/StudentsAdd';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'Hello World'
    }
  }

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/students" component={StudentsList}/>
          <Route exact path="/students/add" component={StudentsAdd}/>
        </div>
      </Router>
    );
  }
}

export default App
