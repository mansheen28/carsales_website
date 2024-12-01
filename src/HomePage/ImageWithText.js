import React from "react";
import "../css/Home.css";
import images from "../Images/HomeImage.jpg"

const ImageWithText = () => {
  return (
    <div className="image-text-container">
      <div className="overlay-text">DRIVE YOUR DREAM</div>
      <img src={images} alt="" className="background-image" />
    </div>
  );
};

export default ImageWithText;
