import React from "react";
import "../styles/text.css";
import chat from "../assets/message.png";
import TextApi from "../Api/textApi";

const text = () => {
  return (
    <>
      <div className="new_chat">
        <div className="generator">
          <h1 className="text">Text</h1>
          <div className="grid">
            {TextApi.map((textItem) => (
              <div className="bex" key={textItem.id}>
                <img src={chat} alt="chat" className="messages" />
                <p className="headline">{textItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default text;
