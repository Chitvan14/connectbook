import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1610023050964-dead08b285a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcnklMjBodW1hbnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ProfileSrc="https://i.pinimg.com/236x/a9/f7/49/a9f749b9a10cf05af9b4057ee70a08dd.jpg"
        title="Adventure"
      />
      <Story
        image="https://images.unsplash.com/photo-1610478865542-7d239b415687?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3RvcnklMjBodW1hbnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ProfileSrc="https://i.pinimg.com/564x/37/e8/a9/37e8a9d442d9722209c0eec61f2f59c4.jpg"
        title="Portrait"
      />
      <Story
        image="https://images.unsplash.com/photo-1535182539448-8bf2aee81484?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c3RvcnklMjBodW1hbnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ProfileSrc="https://i.pinimg.com/564x/48/8a/8d/488a8d45f59d3307b9d90bf17efc6daf.jpg"
        title="Office"
      />
      <Story
        image="https://images.unsplash.com/photo-1520642801216-8d60b8255d7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0b3J5JTIwaHVtYW58ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ProfileSrc="https://i.pinimg.com/originals/1a/3f/7d/1a3f7d24b489c75da91735422761aa8a.png"
        title="Hangout"
      />
      <Story
        image="https://images.unsplash.com/photo-1550661993-d94110ad8c47?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b3J5JTIwaHVtYW58ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        ProfileSrc="https://i.pinimg.com/236x/00/c0/af/00c0afa9d7773e713ccf22b15003355e.jpg"
        title="Home"
      />
    </div>
  );
}

export default StoryReel;
