import React from "react";
import "../index.css";
import background from "../assets/login_bg.png";

function Login(props) {
  return (
    <div
      className="home-container d-flex align-items-center justify-content-center p-5"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="info-area d-flex flex-column align-items-center justify-content-evenly p-4 m-1 w-50">
        <p className="title">Log In</p>
        <p>
          Enter your details to access your <b>Organization</b> account
        </p>
        <form className="d-flex flex-column w-100 align-items-center">
          <input className="w-100" type="text" placeholder="Username" />
          <input className="mt-1 w-100" tye="password" placeholder="Password" />
          <button className="w-25 my-3">Log In</button>
        </form>
        
        <p className="text-button">
          Forgot Username?
        </p>
        <p  className="text-button">
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default Login;
