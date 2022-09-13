import React from "react";
import "../style/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a href="./">
          <h1>Real Estate</h1>
        </a>
        <a href="./" className="border">
          <p>Rent</p>
        </a>
        <a href="./">
          <p>Buy</p>
        </a>
        <a href="./">
          <p>Sell</p>
        </a>
        <a href="./">
          <p>Manage Property</p>
        </a>
        <a href="./">
          <p>Resource</p>
        </a>
      </div>
      <div className="header-right">
        <button className="login">Login</button>
        <button className="signup">SignUp</button>
      </div>
    </div>
  );
}

export default Header;
