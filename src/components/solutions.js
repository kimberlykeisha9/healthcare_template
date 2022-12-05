import React from "react";
import "../index.css";
import image1 from "../assets/Rectangle 11-1.png";
import image2 from "../assets/Rectangle 11-2.png";
import image3 from "../assets/Rectangle 11-3.png";
import image4 from "../assets/Rectangle 11-4.png";
import image5 from "../assets/Rectangle 11.png";

function Solutions() {
  return (
    <div
      className="home-container d-flex flex-column justify-content-center"
      style={{
        backgroundColor: "#101010",
      }}
    >
      <div style={{border: '1px solid white'}} className="d-flex flex-column align-items-center justify-content-center p-5">
      <p className="title">How do we help your organization?</p>
      <p className="w-75">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
        tincidunt ipsum, in feugiat eros. In sit amet consequat mi. Proin
        faucibus dui interdum enim tempor ultrices.{" "}
      </p>
      <div className="d-flex flex-row w-100 mt-4">
        <SolutionDescription
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi."
          title="Solution A"
          image={image1}
        />
        <SolutionDescription
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi."
          title="Solution B"
          image={image2}
        />
        <SolutionDescription
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi."
          title="Solution C"
          image={image3}
        />
        <SolutionDescription
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi."
          title="Solution D"
          image={image4}
        />
        <SolutionDescription
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi."
          title="Solution E"
          image={image5}
        />
      </div>
      </div>
    </div>
  );
}

function SolutionDescription(props) {
  return (
    <div
      style={{ width: "250px" }}
      className="d-flex flex-column align-items-center"
    >
      <div className="sol-image">
        <img src={props.image} alt="Solution" />
      </div>
      <p className="mt-2">
        <b>{props.title}</b>
      </p>
      <p style={{ fontSize: "12px" }}>{props.body}</p>
      <button style={{ width: "150px", fontSize: "12px" }}>Learn More</button>
    </div>
  );
}

export default Solutions;
