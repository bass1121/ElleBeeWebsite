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
          <div className="blog-page-title">News, Blog and Announcements</div>
        </div>
        <div className="dark-bee-wrapper">
          <img src={DarkBee} alt="" />
        </div>
      </div>

      <div className="blog-post-wrapper">
        {/* Create */}
        {/* <button className="create-blog-button">Create New Blog</button> */}
        {/* READ */}
        {/* UPDATE */}
        {/* DELETE */}
        <div className="blog-posts">
          <div className="blog-title">Live Stream</div>
          <div className="blog-content">
            I will be going live every friday night @ 9:00pm Central Time.
            Please join by going to my channel @
            <a href="https://www.youtube.com/c/LeslieBass">
              https://www.youtube.com/c/LeslieBass
            </a>{" "}
            Thanks. I will see you there!
          </div>
        </div>
        <div className="blog-posts">
          <div className="blog-title">Support the Channel</div>
          <div className="blog-content">
            I def appreciate all of my channel members and all of the supper
            chats! It is what keeps this channel growing. Any support is a huge
            help. If you cannot donate then please hit the like button,
            subscribe
          </div>
        </div>
      </div>
    </div>
  );
}
