import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <footer>
      <div className="footerLogo"> 
        <img src={logo} alt="" />
      </div>
      <nav className="footerMenu">
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </nav>

      <div className="socialIcons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={pinterest} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
