import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import AboutPic from "../../images/leslie-about.jpg"


export default function about() {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src={AboutPic} className="about-pic" alt="Error" />
      </div>
      <div className="about-text">
        <h1>Who is Elle Bee?</h1>
        <LoremIpsum p={4} />
      </div>
    </div>
  );
}
