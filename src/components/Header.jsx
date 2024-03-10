import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container navbar">
        <a href="#">
          <img src="/images/logo.PNG" alt="logo" className="header-logo" />
        </a>
        <nav>
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
