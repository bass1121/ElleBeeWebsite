import { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";

class BottomNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }
  componentDidMount() {
    this.setState({
      username: this.props.user.user.username,
    });
  }

  logoutUser = () => {
    this.props.logoutUser();
    window.location.reload();
  };

  render() {
    return (
      <div className="bottomNavBarWrapper">
        <div className="navbar-button">
          <Link to={`/user/${this.props.user.authenticated}`}>
            {this.state.username
              ? `${this.state.username}'s Account`
              : "Users Account"}
          </Link>
        </div>
        <div className="navbar-button">
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(BottomNavBar);
