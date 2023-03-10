import React from "react";
import "./Cards.css";
import FirstImage from "../../img/parents group.png";
import SecondImage from "../../img/alexander-dummer-UH-xs-FizTk-unsplash 1.png";
import Stars from "../../img/Stars.png";

function Images() {
  return (
    <>
      <img src={FirstImage} className="imge5" alt="image" />
      <img src={SecondImage} className="imge6" alt="image" />
    </>
  );
}

function FirstCard() {
  return (
    <div className="box5">
      <span className="span10">John doe</span>
      <span className="span11">
        The service I felt was very good, the staff and doctors were friendly
        and provided very clear information.
      </span>
      <img src={Stars} className="stars" />
    </div>
  );
}

function SecondCard() {
  return (
    <div className="box6">
      <span className="span12">John doe</span>
      <span className="span13">
        The service I felt was very good, the staff and doctors were friendly
        and provided very clear information.
      </span>
      <img src={Stars} className="stars" />
    </div>
  );
}

function Cards() {
  return (
    <>
      <Images />
      <FirstCard />
      <SecondCard />
    </>
  );
}

export default Cards;
