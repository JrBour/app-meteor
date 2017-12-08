import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import AccountsUIWrapper from '../ui/AccountUiWrapper';

// Install
// import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Hetic Classroom</h1>
        <AccountsUIWrapper />
      </div>
    );
  }
}

export default Home
