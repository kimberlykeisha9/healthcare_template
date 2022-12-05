import React from "react";
import "../index.css";

function About(props) {
  return (
    <div
      className="home-container d-flex align-items-center p-5"
      style={{
        backgroundImage: `url(${props.background})`,
      }}
    >
      <div className="info-area h-100 w-100 d-flex flex-column align-items-center justify-content-center p-5">
        <p className="title">Who we are?</p>
        <p className="w-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt ipsum, in feugiat eros. In sit amet consequat mi. Proin
          faucibus dui interdum enim tempor ultrices. Praesent nec ex in nibh
          ultrices facilisis. Sed vestibulum leo at odio volutpat viverra.
          Maecenas volutpat suscipit massa quis porta. In vel nulla faucibus,
          vestibulum sapien sed, mollis leo.
        </p>
      </div>
    </div>
  );
}

export default About;
