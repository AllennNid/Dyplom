import React from "react";
import "./FifthContainer.css";

function FifthContainer({ children }) {
  return (
    <div className="testimonials">
      <h6 className="texttop">Testimonials</h6>
      <h3 className="texttop2">What They Say After Visiting Our Hospital</h3>
      {children}
    </div>
  );
}

export default FifthContainer;
