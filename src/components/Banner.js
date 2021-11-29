import React from "react";
import "./Banner.css";
import Header from "./Header";
import downArrow from "../images/icon-arrow-down.svg";

function Banner() {
  return ( 
    <div className="banner">
      <Header />
      <div className="bannerContainer">
        <div className="mainText">
          <h1>We are Creactives</h1>
          <div className="arrow">
            <img src={downArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
