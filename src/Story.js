import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";

function Story({ image, ProfileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={ProfileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
