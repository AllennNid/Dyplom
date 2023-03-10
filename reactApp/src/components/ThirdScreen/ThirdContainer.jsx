import React from "react";
import "./ThirdContainer.css";
import Rectangle from "../../img/Rectangle 13.png";
import Woman from "../../img/5a34ffa093ff15 1.png";

function ThirdContainer() {
  return (
    <div className="aboutUs">
      <div className="fonBlue">
        <img src={Rectangle} />
      </div>
      <div className="woman">
        <img src={Woman} />
      </div>
    </div>
  );
}

export default ThirdContainer;
