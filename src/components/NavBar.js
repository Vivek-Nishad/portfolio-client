import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const makeNavItemActive = (e) => {
    const activeLinks = document.querySelectorAll(".active");

    activeLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <nav>
      <a href="#home">
        <div className="logo">vk</div>
      </a>
      <div className="navLinks" id={showNav ? "hidden" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className="active"
              onClick={(e) => {
                makeNavItemActive(e);
                setShowNav(!showNav);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                makeNavItemActive(e);
                setShowNav(!showNav);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#works"
              onClick={(e) => {
                makeNavItemActive(e);
                setShowNav(!showNav);
              }}
            >
              Works
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                makeNavItemActive(e);
                setShowNav(!showNav);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        className="hamburger"
        id={showNav ? "hamClose" : ""}
        onClick={() => setShowNav(!showNav)}
      >
        <div className="hd1"></div>
      </div>
    </nav>
  );
};

export default NavBar;
