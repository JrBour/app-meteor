import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Install
import {
  Router,
  Route,
} from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory';

import { StudentCollection } from './api/StudentCollection.js';
import { CourseCollection } from './api/CourseCollection.js';

// Shared Component
import Home from './components/Home';
import StudentsList from './components/Students/StudentsList';
import StudentsAdd from './components/Students/StudentsAdd';
import CoursesList from './components/Courses/CoursesList';
import CoursesAdd from './components/Courses/CoursesAdd';

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
          <Route exact path="/courses" component={CoursesList}/>
          <Route exact path="/courses/add" component={CoursesAdd}/>
        </div>
      </Router>
    );
  }
}

export default App
