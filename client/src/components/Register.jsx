import React from 'react';

// This component handles our register form
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    }
  }

  register = async () => {
    const response = await this.props.handleRegister();
    this.setState({
      response
    })
  }

  render() {
    return (
      <div className="auth-container">
        <h1>Register</h1>
    
        <form id="register-form" onSubmit={(e) => {
          e.preventDefault();
          this.register();
        }} >
          <p>Email:</p>
          <input name="email" type="text" value={this.props.formData.email} onChange={this.props.handleChange} />
          <p>Password (6 character minimum):</p>
          <input name="password" type="password" value={this.props.formData.password} onChange={this.props.handleChange} />
          <hr />
          <button>Submit</button>
          {this.state.response &&
              <h3 className="red-color">Invalid Credentials. Password must be 6 characters minimum and email must be unique</h3>}
        </form>
      </div>
    );
  }
}

