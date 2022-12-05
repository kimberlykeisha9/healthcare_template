import React from "react";
// import Menu from "./menu";
import "../index.css";

function Home(props) {
  return (
    <div
      className="home-container d-flex align-items-center"
      style={{
        backgroundImage: `url(${props.background})`,
      }}
    >
      <div className="d-flex flex-column align-items-center">
        <p className="title w-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className="mt-1 w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          rhoncus pulvinar pellentesque. Proin malesuada leo libero, id euismod
          amet.
        </p>
        <button style={{fontSize: '15px'}} className="mt-4">SCHEDULE AN APPOINTMENT</button>
      </div>
    </div>
  );
}

export default Home;
