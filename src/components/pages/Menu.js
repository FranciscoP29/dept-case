import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="top-menu">
        <h1>DEPT</h1>
        <Link to="/" className="x-button">
          X
        </Link>
        <div className="grid-menu">
          <div className="grid-menu-element">HOME</div>
          <div className="grid-menu-element">WORK</div>
          <div className="grid-menu-element">CULTURE</div>
          <div className="grid-menu-element">SERVICES</div>
          <div className="grid-menu-element">PARTNERS</div>
          <div className="grid-menu-element">STORIES</div>
          <div className="grid-menu-element">CAREERS</div>
          <div className="grid-menu-element">EVENTS</div>
          <div className="grid-menu-element">CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
