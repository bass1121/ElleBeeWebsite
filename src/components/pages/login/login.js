import React, { Component } from 'react';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: null,
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
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      signup: this.state.toggleSignup,
      email: this.state.email,
      password: this.state.password,
    };

    if (this.state.toggleSignup) {
      user.confirmPassword = this.state.confirmPassword;
    }

    if (this.state.toggleSignup) {
      if (user.password !== user.confirmPassword) {
        this.setState({
          errorMessage: "Password must match",
        });
        return;
      }

      this.setState({
        errorMessage: null,
      });

      fetch("http://localhost:5000/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          if(!res.ok){ // check if error exists
            const result = await res.json(); // gain access to error message
            this.setState({
              errorMessage: result.message // set errorMessage state to error message
            })
            return;
          }

          return res.json();
        })
        .then(data => localStorage.setItem('token', data.data.token))
        .catch(err => console.error(err));

      return;
    }

    console.log(this.state.email, this.state.password, this.state.errorMessage);
  }

  verifyPassword() {
    return this.state.toggleSignup ? (
      <div className="login-field">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
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
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="password">Password:</label>
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
                ? "Already A Member?"
                : "Not A Member Yet?"}
            </button>
          </div>
        </form>
        {this.state.errorMessage && this.state.errorMessage}
      </div>
    );
  }
}

export default Login;