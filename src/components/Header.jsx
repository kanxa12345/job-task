import React, { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header>
      <div className="container navbar">
        <a href="#">
          <img src="/images/logo.PNG" alt="logo" className="header-logo" />
        </a>
        <button className="hamburger-button" onClick={() => setNav(!nav)}>
          <i class={`fa-solid fa-bars ${nav ? "hide-icon" : ""}`}></i>
          <i class={`fa-solid fa-xmark  ${nav ? "" : "hide-icon"}`}></i>
        </button>
        <nav className={`${nav ? "show-nav" : ""}`}>
          <ul className="nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
