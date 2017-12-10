import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {
  Router,
  Route,
} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './components/Home/Home';
import StudentsList from './components/Students/StudentsList/StudentsList';
import StudentsAdd from './components/Students/StudentsAdd/StudentsAdd';
import StudentsEdit from './components/Students/StudentsEdit/StudentsEdit';
import CoursesList from './components/Courses/CoursesList/CoursesList';
import CoursesAdd from './components/Courses/CoursesAdd/CoursesAdd';
import CoursesEdit from './components/Courses/CoursesEdit/CoursesEdit';
import ClassesList from './components/Classes/ClassesList/ClassesList';
import ClassesAdd from './components/Classes/ClassesAdd/ClassesAdd';
import ClassesEdit from './components/Classes/ClassesEdit/ClassesEdit';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import NavBar from  './shared/Navbar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createBrowserHistory()}>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={StudentsList} />
            <Route exact path="/students/add" component={StudentsAdd} />
            <Route path="/students/edit/:id" component={StudentsEdit} />

            <Route exact path="/courses" component={CoursesList} />
            <Route exact path="/courses/add" component={CoursesAdd} />
            <Route path="/courses/edit/:id" component={CoursesEdit} />

            <Route exact path="/classes" component={ClassesList} />
            <Route exact path="/classes/add" component={ClassesAdd} />
            <Route path="/classes/edit/:id" component={ClassesEdit} />

            <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
