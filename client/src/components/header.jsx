import React from "react";
import "../styles/header.css";
import search from "../assets/vector.png";
import notification from "../assets/Group.png";
import profile from "../assets/boy.png";
import below from "../assets/Vector1.png";
import menu from "../assets/menu.png";

const header = () => {
  return (
    <>
      <div className="header">
        <div className="looo">
          <img src={menu} alt="menu" className="menu" />
          <h1 className="logosname">LOGO</h1>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Search anything..."
            className="search"
          />
          <img src={search} alt="search" className="search_icon" />
        </div>

        <div className="profile">
          <img src={notification} alt="notification" className="noti" />
          <div className="profile_sys">
            <img src={profile} alt="profile" className="img_pic" />
            <img src={below} alt="below" className="below" />
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
