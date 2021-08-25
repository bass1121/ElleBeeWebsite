import React, { Component } from "react";

class AccountManagement extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="member-info-wrapper">
        <div>
          <form onSubmit={this.handleSubmit} className="login-form-wrapper">
            <div className="member-info-input">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>

            <div className="member-info-input">
              <label htmlFor="lastName">Last Name:</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>

            <div className="member-info-input">
              <label htmlFor="userName">User Name:</label>
              <input
                id="userName"
                type="text"
                name="userName"
                placeholder="Create Username (Required)"
                value={this.state.userName}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="member-info-input">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                id="phoneNumber"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </div>

            <button>Submit</button>
          </form>
        </div>
        <div>
          <button>Delete Account</button>
        </div>
      </div>
    );
  }
}

export default AccountManagement;
