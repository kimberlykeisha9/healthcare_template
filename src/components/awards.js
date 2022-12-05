import React from "react";
import "../index.css";

function Awards(props) {
  return (
    <div
      className="home-container d-flex align-items-center p-5"
      style={{
        backgroundImage: `url(${props.background})`,
        height: "50vh",
      }}
    >
      <div className="info-area d-flex flex-column align-items-center justify-content-center p-3 w-100">
        <p>We are proud owners of the following awards</p>
        <div className="d-flex justify-content-evenly w-75 mt-2">
          <Award title="Award A" />
          <Award title="Award B" />
          <Award title="Award C" />
          <Award title="Award D" />
        </div>
      </div>
    </div>
  );
}

function Award(props) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="award-image"></div>
      <p className="mt-3 award-title">{props.title}</p>
    </div>
  );
}

export default Awards;
