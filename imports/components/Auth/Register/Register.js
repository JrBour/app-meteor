import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router'
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
import './Register.css'
import { Link } from 'react-router-dom'


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      samepassword: '',
      errorMessage: ''
    }
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  };

  handleChangeSamepassword = (event) => {
    this.setState({
      samepassword: event.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.samepassword) {
      return this.setState({
        errorMessage: 'Les mots de passes ne correspondent pas'
      })
    }
    Accounts.createUser(
      {
        username: this.state.username,
        password: this.state.password,
      },
      (error) => {
        if (error) return console.log("there was an error: " + error);
        let userId = Meteor.userId();
        Roles.addUsersToRoles( userId, ['Student']);
        return this.props.history.push('/')
      }
    );
  };

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>Register</h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control inputField" id="username" onChange={this.handleChangeUsername}
                         value={this.state.username} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control inputField" id="password"
                         onChange={this.handleChangePassword} value={this.state.password} />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordAgain">Password Again</label>
                  <input type="password" className="form-control inputField" id="passwordAgain"
                         onChange={this.handleChangeSamepassword} value={this.state.samepassword} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              {this.state.errorMessage ? <p>{this.state.errorMessage}</p> : ''}
              <Link to="/">Retourner sur la home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register)
