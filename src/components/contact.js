import React from "react";
import "../index.css";

function Contact(props) {
  return (
    <div
      className="home-container d-flex align-items-center p-5"
      style={{
        backgroundImage: `url(${props.background})`,
      }}
    >
      <div className="info-area h-100 w-100 d-flex flex-column align-items-center justify-content-center p-5">
        <p className="title">Talk to us</p>
        <p className="w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
          tincidunt ipsum, in feugiat eros.
        </p>
        <form className="container d-flex flex-column w-75">
          <div className="row">
            <input className=" col me-2" type="text" placeholder="First Name" />
            <input className="col ms-2" type="text" placeholder="Last Name" />
          </div>
          <div className="row">
            <input className="col  me-2" type="text" placeholder="Job Title" />
            <input
              className="col ms-2"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div className="row">
            <input
              className="col me-2"
              type="email"
              placeholder="Work Email (No personal emails e.g Gmail)"
            />
            <input
              className="col ms-2"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div className="row">
            <select className="col">
              <option value="fruit">I am a health organization</option>
              <option value="vegetable">I am an NGO</option>
              <option value="vegetable">I am a private practitioner</option>
            </select>
          </div>
          <button className="align-self-center w-25 mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
