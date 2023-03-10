import React from "react";
import "./Cards.css";
import Face from "../../img/face.png";
import Pint from "../../img/Pint.png";
import Ball from "../../img/ball.png";
import Inst from "../../img/inst.png";
import FirstDoctor from "../../img/Mask group.png";
import SecondDoctor from "../../img/Black group.png";
import ThirdDoctor from "../../img/woman group.png";
import FourthDoctor from "../../img/last men group.png";

function FirstCard() {
  return (
    <div className="whiteCard1">
      <div className="cotial1">
        <a href="#">
          <img src={Face} alt="Face" />
        </a>
        <a href="#">
          <img src={Pint} alt="Pint" />
        </a>
        <a href="#">
          <img src={Ball} alt="Ball" />
        </a>
        <a href="#">
          <img src={Inst} alt="Inst" />
        </a>
      </div>
      <span className="span2">Dr. Moeharman, Sp. THT.KL</span>
      <span className="span3">Orthodontist </span>
    </div>
  );
}

function SecondCard() {
  return (
    <div className="whiteCard2">
      <div className="cotial2">
        <a href="#">
          <img src={Face} alt="Face" />
        </a>
        <a href="#">
          <img src={Pint} alt="Pint" />
        </a>
        <a href="#">
          <img src={Ball} alt="Ball" />
        </a>
        <a href="#">
          <img src={Inst} alt="Inst" />
        </a>
      </div>
      <span className="span4">ANTONIUS JANSEN</span>
      <span className="span5">Pediatric</span>
    </div>
  );
}

function ThirdCard() {
  return (
    <div className="whiteCard3">
      <div className="cotial3">
        <a href="#">
          <img src={Face} alt="Face" />
        </a>
        <a href="#">
          <img src={Pint} alt="Pint" />
        </a>
        <a href="#">
          <img src={Ball} alt="Ball" />
        </a>
        <a href="#">
          <img src={Inst} alt="Inst" />
        </a>
      </div>
      <span className="span6">Dr. NADYA NAVIRA</span>
      <span className="span7">Dentist </span>
    </div>
  );
}

function FourthCard() {
  return (
    <div className="whiteCard4">
      <div className="cotial4">
        <a href="#">
          <img src={Face} alt="Face" />
        </a>
        <a href="#">
          <img src={Pint} alt="Pint" />
        </a>
        <a href="#">
          <img src={Ball} alt="Ball" />
        </a>
        <a href="#">
          <img src={Inst} alt="Inst" />
        </a>
      </div>
      <span className="span8">MUHAMMAD ALI SYAHPUTRA</span>
      <span className="span9">Dentist </span>
    </div>
  );
}

function Images() {
  return (
    <>
      <img src={FirstDoctor} className="imge1" alt="First doctor" />
      <img src={SecondDoctor} className="imge2" alt="Second doctor" />
      <img src={ThirdDoctor} className="imge3" alt="Third doctor" />
      <img src={FourthDoctor} className="imge4" alt="Fourth doctor" />
    </>
  );
}

function Cards() {
  return (
    <>
      <Images />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
    </>
  );
}

export default Cards;
