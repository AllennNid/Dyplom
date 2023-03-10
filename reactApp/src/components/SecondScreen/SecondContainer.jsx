import React from "react";
import "./SecondContainer.css";

function SecondContainer({ children }) {
  return (
    <div className="StepChek">
      <h6 className="h6">Our Services</h6>
      <h3 className="h3">4 Step Easy We Care Your Health</h3>
      {children}
    </div>
  );
}

export default SecondContainer;
