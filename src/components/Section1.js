import React from "react";
import "./Section1.css";
import egg from "../images/desktop/image-transform.jpg";

function Section1() {
  return (
    <section className="section1">
      <div className="left">
        <div className="left-container">
          <h2>Transform your</h2>
          <h2>brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
      <div className="right">
      <img src={egg} alt="" />
      </div>
    </section>
    
  );
}

export default Section1;
