import React from "react";
import Image from "../Api/imagesApi";

const music = () => {
  return (
    <>
      {Image.map((imageItem) => (
        <div className="image_card" key={imageItem.id}>
          <img src={imageItem.url} alt="videos" className="card_img" />
        </div>
      ))}
    </>
  );
};

export default music;
