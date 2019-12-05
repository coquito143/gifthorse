import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (
    <div className="auth-container">
      <h1>Register</h1>
      {/* <hr /> */}
      <form id="register-form" onSubmit={props.handleRegister} >
        {/* <p>First name:</p>
        <input name="first_name" type="text" value={props.formData.first_name} onChange={props.handleChange} /> */}
        <p>Email:</p>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password (6 character minimum):</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <hr/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
