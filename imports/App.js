import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import StudentsEdit from './components/Students/StudentsEdit';
import CoursesList from './components/Courses/CoursesList';
import CoursesAdd from './components/Courses/CoursesAdd';
import CoursesEdit from './components/Courses/CoursesEdit';
import Register from './components/Auth/Register';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/students" component={StudentsList}/>
          <Route exact path="/students/add" component={StudentsAdd}/>
          <Route path="/students/edit/:id" component={StudentsEdit}/>
          <Route exact path="/courses" component={CoursesList}/>
          <Route exact path="/courses/add" component={CoursesAdd}/>
          <Route path="/courses/edit/:id" component={CoursesEdit}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App
