import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Install
import {
  Router,
  Route,
} from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory';

// Shared Component
import Home from './components/Home';
import StudentsList from './components/Students/StudentsList';
import StudentsAdd from './components/Students/StudentsAdd';
import CoursesList from './components/Courses/CoursesList';
import CoursesAdd from './components/Courses/CoursesAdd';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/students" component={StudentsList}/>
          <Route exact path="/students/add" component={StudentsAdd}/>
          <Route exact path="/courses" component={CoursesList}/>
          <Route exact path="/courses/add" component={CoursesAdd}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App
