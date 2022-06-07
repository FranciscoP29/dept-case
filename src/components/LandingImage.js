import React from "react";
import "../App.css";
import "./LandingImage.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="topbar">
        <h1>DEPT</h1>
        <Link to="/menu" className="menu-button">
          MENU
        </Link>
      </div>
      <h1>WORK</h1>
    </div>
  );
}

export default HeroSection;
