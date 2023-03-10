import React from "react";
import "./FourthContainer.css";

function FourthContainer({ children }) {
  return (
    <div className="OurDoctors">
      <h6>Our Doctors</h6>
      <h3>Visit Our Professional Specialists</h3>
      {children}
    </div>
  );
}

export default FourthContainer;
