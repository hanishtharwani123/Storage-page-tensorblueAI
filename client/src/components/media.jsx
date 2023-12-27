import React, { useState } from "react";
import "../styles/media.css";
import Image from "../mediaCard/image";
import Video from "../mediaCard/video";
import Audio from "../mediaCard/audio";

const Media = () => {
  const [selectedSection, setSelectedSection] = useState("photos");

  const renderSection = () => {
    switch (selectedSection) {
      case "photos":
        return <Image />;
      case "videos":
        return <Video />;
      case "audios":
        return <Audio />;
      default:
        return <Image />;
    }
  };

  return (
    <>
      <div className="media_page">
        <h1 className="media_name">Media</h1>
        <ul>
          <li
            onClick={() => setSelectedSection("photos")}
            className={selectedSection === "photos" ? "active" : ""}
          >
            Photos
          </li>
          <li
            onClick={() => setSelectedSection("videos")}
            className={selectedSection === "videos" ? "active" : ""}
          >
            Videos
          </li>
          <li
            onClick={() => setSelectedSection("audios")}
            className={selectedSection === "audios" ? "active" : ""}
          >
            Audios
          </li>
        </ul>
        <div className="items">{renderSection()}</div>
      </div>
    </>
  );
};

export default Media;
