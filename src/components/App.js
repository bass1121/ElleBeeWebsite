import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//redux
import { connect} from 'react-redux'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCog,
  faSignOutAlt,
  faBars,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import NavComponent from "./navigation/nav-bar";
import Home from "./pages/home";
import About from "./pages/about-me";
import News from "./pages/news-blog";
// import Support from "./pages/support-links";
import Members from "./pages/members";
// import Merch from "./pages/merch";
import NoMatch from "./pages/no-match";
import Login from "./pages/login/login";
import AccountManagement from "./pages/accountManagement";
import BottomNavbar from "./navigation/bottom-navbar";

import "../styles/main.scss";

library.add(
  faYoutube,
  faFacebook,
  faTwitterSquare,
  faInstagram,
  faUserCog,
  faSignOutAlt,
  faBars,
  faChevronRight
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null,
    };
  }

  componentDidUpdate() {
    if (this.props.user.authenticated) {
      this.setState(prevState => {
        if (prevState.authenticated !== this.props.user.authenticated) {
          return {
            authenticated: this.props.user.authenticated,
          };
        }
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="app-nav-container">
          <Router>
            <div className="nav-component-wrapper">
              <NavComponent />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-me" component={About} />
                <Route path="/news-blog" component={News} />
                {/* <Route path="/support-links" component={Support} /> */}
                <Route path="/members" component={Members} />
                {/* <Route path="/merch" component={Merch} /> */}
                <Route path="/login" component={Login} />
                <Route path="/member-register" component={Login} />
                <Route path="/user/:slug" component={AccountManagement} />
                <Route component={NoMatch} />
              </Switch>
              {this.state.authenticated && <BottomNavbar />}
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App);