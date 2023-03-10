import React from "react";
import "./Hero.css";
import Ellipse from "../../img/Ellipse 4.png";
import ImageHero from "../../img/Image Hero.png";

function Hero() {
  return (
    <>
      <div className="textright">
        <h1>
          We Care About Your <br />
          Health
        </h1>
        <span className="span1">
          Check Now Your Healty With Our Profesional Doctor, <br />
          Completed And Modern Fasilities Services
        </span>
        <a href="#" className="checkNow">
          Check Now
        </a>
      </div>
      <div className="ellipse">
        <img src={Ellipse} alt="Ellipse" />
      </div>
      <div className="photoRight">
        <img src={ImageHero} alt="Hero" />
      </div>
    </>
  );
}

export default Hero;
