import React, { Component } from 'react';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      toggleSignup: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.handleToggleSignup = this.handleToggleSignup.bind(this);
  }

  handleToggleSignup(event) {
    event.preventDefault();

    this.setState(prevState => ({
      toggleSignup: !prevState.toggleSignup,
    }));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.toggleSignup) {
      console.log(
        this.state.email,
        this.state.password,
        this.state.confirmPassword,
        this.state.errorMessage
      );
    }

    console.log(this.state.email, this.state.password, this.state.errorMessage);
  }

  verifyPassword() {
    return this.state.toggleSignup ? (
      <div className="login-field">
        <label for="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPasswword"
          placeholder="Confirm password"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          required
        />
      </div>
    ) : null;
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="signin-form-title">
          {this.state.toggleSignup ? "Member's Log In" : "Member's Sign In"}
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-wrapper">
          <div className="login-field">
            <label for="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="login-field">
            <label for="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          {this.verifyPassword()}

          <div>
            <button className="login-button" type="submit">
              {this.state.toggleSignup ? "Member Signup" : "Member Login"}
            </button>
            <button className="login-button" onClick={this.handleToggleSignup}>
              {this.state.toggleSignup
                ? "Already Signed up?"
                : "Not Signed Up?"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;