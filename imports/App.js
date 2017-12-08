import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Install
import {
  Router,
  Route,
} from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory';

// Component
import Home from './components/Home';
import Register from './components/Auth/Register';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App
