import React from 'react';
import { Link } from 'react-router-dom';
import Horse from '../images/horse.png'
import GiftProfile from './GiftsByAge';
import axios from 'axios'

// This component handles our login form and has a link to the register form
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    }
  }

  logon = async () => {
    const response = await this.props.handleLogin();
    if (response === 500) {
      this.setState({
        response
      })
      // }
    }

  }


  render() {
    return (

      <div className="auth-container">
        <>
          <h1>Login</h1>
          <hr />
          <form id="login-form" onSubmit={(e) => {
            e.preventDefault();
            this.logon();
          }} >
            <p>Email address:</p>
            <input
              name="email"
              type="text"
              value={this.props.formData.email}
              onChange={this.props.handleChange}
            />
            <p>Password:</p>
            <input
              name="password"
              type="password"
              value={this.props.formData.password}
              onChange={this.props.handleChange}
            />
            <button>Submit</button>
            {this.state.response &&
              <div id="invalid-response-div">
                <img id="invalid-response-img" src={Horse} alt="hero-image" />
                <h3 className="red-color">NEIGH! Something seems wrong with that combination!</h3>
              </div>
            }
          </form>
          <Link className="register-link" to="/register"><h3>Register here</h3></Link>
        </>

      </div>
    );
  }
}
