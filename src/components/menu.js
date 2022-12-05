/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../index.css";

function Menu() {
  return (
    <div className="main-menu">
      <div className="logo"></div>
      <div className="navigation-menu d-flex justify-content-evenly">
        <a className="main-menu-item" href="#">
          For providers <i class="fa-light fa-angle-down"></i>
        </a>
        <a className="main-menu-item" href="#">
          Health Plans <i class="fa-light fa-angle-down"></i>
        </a>
        <a className="main-menu-item" href="#">
          Resources <i class="fa-light fa-angle-down"></i>
        </a>
        <a className="main-menu-item" href="#">
          About us <i class="fa-light fa-angle-down"></i>
        </a>
      </div>
      <div className="logo"><i class="fa-light fa-bars"></i></div>
    </div>
  );
}

export default Menu;
