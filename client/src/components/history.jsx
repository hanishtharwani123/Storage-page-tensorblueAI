import React, { useState } from "react";
import "../styles/history.css";
import Image from "../mediaCard/image";
import Video from "../mediaCard/video";
import Audio from "../mediaCard/audio";
import Text from "../components/text";

const History = () => {
  const [selectedSection, setSelectedSection] = useState("text");

  const renderSection = () => {
    switch (selectedSection) {
      case "text":
        return <Text />;
      case "photos":
        return <Image />;
      case "videos":
        return <Video />;
      case "audios":
        return <Audio />;
      default:
        return <Text />;
    }
  };
  return (
    <>
      <div className="hsitory">
        <h1 className="name_history">History</h1>
        <ul>
          <li
            onClick={() => setSelectedSection("text")}
            className={selectedSection === "text" ? "active" : ""}
          >
            Text
          </li>
          <li
            onClick={() => setSelectedSection("photos")}
            className={selectedSection === "photos" ? "active" : ""}
          >
            Photo
          </li>
          <li
            onClick={() => setSelectedSection("videos")}
            className={selectedSection === "videos" ? "active" : ""}
          >
            Video
          </li>
          <li
            onClick={() => setSelectedSection("audios")}
            className={selectedSection === "audios" ? "active" : ""}
          >
            Audio
          </li>
        </ul>
        <div className="items">{renderSection()}</div>
      </div>
    </>
  );
};

export default History;
