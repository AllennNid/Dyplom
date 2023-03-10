import React from "react";
import Hospital from "../../img/Hospital.png";

function HeaderNav() {
  return (
    <>
      <img src={Hospital} alt="logo" />
      <ul>
        <li>About</li>
        <li>Home</li>
        <li>Service</li>
      </ul>
    </>
  );
}
export default HeaderNav;
