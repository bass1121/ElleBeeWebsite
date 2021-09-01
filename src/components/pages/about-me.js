import React from "react";
// import { LoremIpsum } from "react-lorem-ipsum";
import AboutPic from "../../images/leslie-about.jpg"


export default function about() {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src={AboutPic} className="about-pic" alt="Error" />
      </div>
      <div className="about-text">
        <div className="about-title">Home Life:</div>
        <ul>
          Elle Bee is a small town girl from Louisiana with an amazing southern
          accent. She has always lived in the south and in a small town.
        </ul>
        <div className="about-title">Personality:</div>
        <ul>
          Elle loves to talk to people and she believes that you should treat
          people how you want to be treated. She is humble, beautiful, smart and
          funny. She is works hard to create good content and even harder at
          being a mother. She values loyalty and friendships. She loves makeup
          and girly things but she is not scared to get a little muddy.
        </ul>
        <div className="about-title">Family Life:</div>
        <ul>
          Elle has several nicknames. Everyone knows her as Netnet in the town
          she lives in. She comes from a family with five kids. She has two
          sisters and two brothers. She has been married since 2008 to a husband
          that loves her very much. The only thing she values more than her
          family is her faith.
        </ul>
        <div className="about-title">Faith:</div>
        <ul>
          She believes in and loves Jesus Christ. She has been a Christian all
          of her life. She values and holds on to the good news of the Gospel.
          She also strives to live her life accordingly.
        </ul>
      </div>
    </div>
  );
}
