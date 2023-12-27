import React from "react";
import "../styles/audio.css";
import Audio from "../Api/audiosApi";
import timeline from "../assets/timeline.png";
import pause from "../assets/pause.png";
import forward from "../assets/forward.png";
import backward from "../assets/backward.png";

const audio = () => {
  return (
    <>
      <div className="audio_section">
        {Audio.map((audioItem) => (
          <div className="audio_card" key={audioItem.id}>
            <div className="audio_contain">
              <div className="timeline">
                <p className="before">00:36</p>
                <img src={timeline} alt="timeline" className="times" />
                <p className="after">1:00:00</p>
              </div>
              <div className="play">
                <img src={forward} alt="forward" className="forward" />
                <img src={pause} alt="pause" className="pause" />
                <img src={backward} alt="backward" className="backward" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default audio;
