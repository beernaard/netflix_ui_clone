import React from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <p>Netflix</p>
      </div>
      <div className="navbar-signin">
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
