import React from "react";
import Video from "../Api/videosApi";
import "../styles/video.css";
import plus from "../assets/button.png";

const video = () => {
  return (
    <>
      {Video.map((videoItem) => (
        <div className="video_card" key={videoItem.id}>
          <img src={videoItem.url} alt="videos" className="card_video" />
          <img src={plus} alt="plus" className="plus_btn" />
        </div>
      ))}
    </>
  );
};

export default video;
