import React, { Component } from 'react';
import ElleDrawing from "../../images/Elle-Bee-Drawing.jpg";
import DarkBee from "../../images/darkslategreyBee.png";
import LoginForm from "../pages/login/login";

export default class Members extends Component {
  render() {
    return (
      <div className="members-wrapper">
        <div className="drawing-wrapper">
          <img src={ElleDrawing} alt="" />
        </div>
        <div className="member-container-wrapper">
          <LoginForm />
        </div>
        <div className="dark-bee-wrapper">
          <img src={DarkBee} alt="" />
        </div>
      </div>
    );
  }
}