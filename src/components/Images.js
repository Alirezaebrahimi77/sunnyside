import React from "react";
import "./Images.css";
import milkBottles from "../images/desktop/image-gallery-milkbottles.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugarCubes from "../images/desktop/image-gallery-sugarcubes.jpg";

function Images() {
  return (
    <section className="sectionImages"> 
      <div className="singleImage">
        <img src={milkBottles} alt="" />
      </div>
      <div className="singleImage">
        <img src={orange} alt="" />
      </div>
      <div className="singleImage">
        <img src={cone} alt="" />
      </div>
      <div className="singleImage">
        <img src={sugarCubes} alt="" />
      </div>
    </section>
  );
}

export default Images;
