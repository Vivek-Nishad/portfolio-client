import React from "react";
import "./Home.css";

const Home = () => (
  <div id="home" className="home">
    <div className="homeContainer">
      <div className="homeContent">
        <h3>Hello There</h3>
        <div className="TextNBtn">
          <h1>
            I am ViveK Nishad. <br /> I am a Web Developer.
          </h1>
          <div className="homeLinks">
            <a href="#works">Latest projects</a>
            <a href="#about">About Me</a>
          </div>
        </div>
      </div>
      <div className="scrollBtn">
        <a href="#about">
          Scroll Down <br />
          <div className="downArrow">
            &#709;
            <br />
            &#709;
            <br />
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default Home;
