import React from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <h6 className="FH6">Get Medical Checkup Voucher</h6>
      <form action="main.php">
        <input type="email" placeholder="Enter Your Email" />
      </form>
      <a href="#" className="btnSubscribe">
        Subscribe
      </a>
    </>
  );
}

export default Form;
