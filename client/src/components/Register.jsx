import React from 'react';
import Horse from '../images/horse.png'

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
            <div id="invalid-response-div">
              <img id="invalid-response-img" src={Horse} alt="hero-image" />
              <h3 className="red-color">NEIGH! Something seems wrong with that combination. The password must have 6 characters minimum and/or email may already be in the system</h3>
            </div>
          }


        </form>
      </div>
    );
  }
}

