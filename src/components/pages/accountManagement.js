import React, { Component } from "react";

// redux
import { connect } from "react-redux";
import { updateUser } from "../../redux/actions/userActions";

class AccountManagement extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      responseMessage: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const slugId = this.props.match.params.slug;

    fetch(`${process.env.API_ROUTE}/api/user/${slugId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data.data,
          firstName: data.data.firstName || "",
          lastName: data.data.lastName || "",
          userName: data.data.username || "",
          phoneNumber: data.data.phoneNumber || "",
        });
      })
      .catch(error => console.log(error));
  }

  handleChange(event) {
    if (event.target.name === "phoneNumber") {
      const validNum = /[0-9null()-]/g.test(event.nativeEvent.data);

      if (!validNum) {
        return;
      }
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      ...this.state.user,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.userName,
      phoneNumber: this.state.phoneNumber,
    };

    const jsonUser = JSON.stringify(user);

    fetch(`${process.env.API_ROUTE}/api/user/${user._id}`, {
      method: "PATCH",
      body: jsonUser,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async res => {
        if (!res.ok) {
          const result = await res.json();

          throw new Error(result.message);
        }
        return res.json();
      })
      .then(data => this.props.updateUser(data.data))
      .then(()=> window.location.href = '/')
      .catch(err => {
        console.log(err.message);
      });
  }

  handleDeleteUser() {
    if(this.props.user.authenticated !== this.state.user._id){
      return;
    }

    fetch(`${process.env.API_ROUTE}/api/user/${this.state.user._id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async (res) => {
        if(!res.ok){
          const result = await res.json();

          throw new Error(result.message)
        }

        return res.json()
      })
      .then(() => {
        localStorage.removeItem('AuthToken')
      })
      .then(() => {
        window.location.href = '/'
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  render() {
    if(!this.props.user.authenticated){
      window.location.href = '/'
    }

    return (
      <div className="member-info-wrapper">
        <form onSubmit={this.handleSubmit} className="information-form">
          <div className="member-info-input">
            <label htmlFor="firstName__">First Name: </label>
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
            <label htmlFor="lastName">Last Name: </label>
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
            <label htmlFor="userName">User Name: </label>
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
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              id="phoneNumber"
              type="text"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          <button className="form-button">Submit</button>
        </form>

        <div className="delete-button-wrapper">
          <button
            className="delete-button"
            onClick={this.handleDeleteUser.bind(this)}
          >
            Delete User Account
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, {updateUser})(AccountManagement);
