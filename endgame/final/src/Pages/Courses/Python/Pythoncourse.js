import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../../CSS/Content.css";

export default function Pythoncourse() {
  const course = [
    "https://www.youtube.com/watch?v=vo_fUOk-IKk&list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa&index=2&t=0s",
    "https://www.youtube.com/watch?v=4ZZrP68yXCI&list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa&index=3&t=0s",
    "https://www.youtube.com/watch?v=9suSsTVhYuw&list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa&index=4&t=0s",
    "https://www.youtube.com/watch?v=TN9fMYQxw4E&list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa&index=5&t=0s",
    "https://www.youtube.com/watch?v=sJF6PiAjE1M&list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa&index=6&t=0s",
    "https://www.youtube.com/watch?v=ABaZ_tecZ3U&list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa&index=7&t=0s",
  ];
  const [video, setVideo] = useState(course[0]);
  return (
    <div className="contentBody">
      <div className="contentMain">
        <div className="contentList">
          <ul>
            <li onClick={()=>setVideo(course[0])}>Hello World</li>
            <li onClick={()=>setVideo(course[1])}>Hello World</li>
            <li onClick={()=>setVideo(course[2])}>Hello World</li>
            <li onClick={()=>setVideo(course[3])}>Hello World</li>
            <li onClick={()=>setVideo(course[4])}>Hello World</li>
            <li onClick={()=>setVideo(course[5])}>Hello World</li>
          </ul>
        </div>
        <div className="player">
          <ReactPlayer
            url={video}
            className="test"
            width="1000px"
            height="562.5px"
            controls
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
}
