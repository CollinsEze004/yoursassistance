// CardGallery.js
import React from "react";
import "./ImageGallery.css"; // Import the CSS file


const CardGallery = () => {
  return <div></div>;
};

const Card = ({ dataImage, header, content }) => {
  return (
    <div className="card-wrap">
      <div className="card">
        <div
          className="card-bg"
          style={{ backgroundImage: `url(${dataImage})` }}
        ></div>
        <div className="card-info">
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardGallery;
