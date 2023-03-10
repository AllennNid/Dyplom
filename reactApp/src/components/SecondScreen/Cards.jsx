import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="card1">
        <p>Date</p>
        <span>
          choose what date <br />
          to check
        </span>
      </div>
      <div className="card2">
        <p>Poly</p>
        <span>
          choose what Poly <br />
          to check
        </span>
      </div>
      <div className="card3">
        <p>Doctor</p>
        <span>
          And choose doctor <br />
          to check
        </span>
      </div>
    </div>
  );
}

export default Cards;
