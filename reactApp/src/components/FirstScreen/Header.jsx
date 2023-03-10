import React from "react";
import "./Header.css";
import HeaderNav from "./HeaderNav";
import HeaderLogin from "./HeaderLogin";

function Header() {
  return (
    <div className="nav">
      <HeaderNav />
      <HeaderLogin />
    </div>
  );
}

export default Header;
