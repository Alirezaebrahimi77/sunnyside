import React from "react";
import "./Section2.css";
import standOut from "../images/desktop/image-stand-out.jpg";

function Section1() {
  return (
    <section className="section2">
      <div className="right">
        <img src={standOut} alt="" />
      </div>
      <div className="left">
        <div className="left-container">
          <h2>Stand out to the right</h2>
          <h2>audience</h2>
          <p>
            using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.
          </p>
          <a href="./">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Section1;
