import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";

import myBee from "../../../src/images/turq-black-bee.png";

export default function navBar() {
  return (
    <div className="nav-wrapper">
      <div className="title">
        <img className="one-bee" src={myBee} alt="one-bee" />
        <img className="two-bee" src={myBee} alt="two-bee" />
        <img className="three-bee" src={myBee} alt="three-bee" />
        <div className="elle-title">Elle Bee</div>
        <img className="four-bee" src={myBee} alt="four-bee" />
        <img className="five-bee" src={myBee} alt="five-bee" />
        <img className="six-bee" src={myBee} alt="six-bee" />
      </div>

      <div className="link-bar">
        <div className="nav-link">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/about-me" activeClassName="nav-link-active">
            About Elle Bee
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/news" activeClassName="nav-link-active">
            News and Blog
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/support-links" activeClassName="nav-link-active">
            Support Elle Bee
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/members" activeClassName="nav-link-active">
            Members Only
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink to="/merch" activeClassName="nav-link-active">
            Buy Elle Bee's Merch
          </NavLink>
        </div>

        <div className="right-side">
          <div className="outside-link">
            <a href="https://www.youtube.com/channel/UC-HvkbTWtG_AC0d-PjQ-9YA" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
            <a href="https://twitter.com/ElleB_official" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </a>
            <a href="https://www.instagram.com/ellebee_official/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="https://www.facebook.com/LeslieBass123/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
