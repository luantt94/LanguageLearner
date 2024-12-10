import React from "react";
import "./Navbar.css"; // Import file CSS cho style

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">22222</a>
        </li>
        <li>
          <a href="#about">222222</a>
        </li>
        <li>
          <a href="#services">2222222</a>
        </li>
        <li>
          <a href="#contact">2222222222</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
