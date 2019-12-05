import React from 'react';
import { Link } from 'react-router-dom';
import GiftProfile from './GiftsByAge';


// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div className="auth-container">
      {/* {this.props.currentUser && */}
        <>
          <h2>Login</h2>
          <hr />
          <form id="login-form" onSubmit={(e) => {
            e.preventDefault();
            props.handleLogin();
          }} >
            <p>Email address:</p>
            <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
            <p>Password:</p>
            <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
            <hr />
            <button>Login</button>
            
        </form>
        <Link to="/register">Register</Link>
        </>
      {/* } */}
    </div>
  );
}

export default Login;
