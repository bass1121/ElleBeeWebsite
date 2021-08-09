import React from "react";
import ElleDrawing from "../../images/Elle-Bee-Drawing.jpg";
import DarkBee from "../../images/darkslategreyBee.png";

export default function news() {
  return (
    <div className="blog-page-wrapper">
      <div className="blog-header">
        <div className="drawing-wrapper">
          <img src={ElleDrawing} alt="" />
        </div>
        <div className="blog-container-wrapper">
          <div className="blog-page-title">
            Latest Tea, Updates and Announcements
          </div>
        </div>
        <div className="dark-bee-wrapper">
          <img src={DarkBee} alt="" />
        </div>
      </div>

      <div className="blog-posts">
        where the blog material will go
      </div>
    </div>
  );
}
