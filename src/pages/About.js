import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutContainer">
        <div className="aboutHead">
          <h3>About</h3>
          <h1>Personal Info</h1>
          <p>Get to know more about me</p>
        </div>
        <div className="aboutContent">
          <div className="aboutInfo">
            <h3>Hello!</h3>
            <p>
              My name is Vivek Nishad and I'm a passionate Web Developer using
              web technologies to build amazing products and focusing on solving
              problems for different niches and different industries using the
              power of technology.
            </p>
            <p>
              I will love to hear from you. Whether it's a project, job
              opportunity, or just a chat. Feel free to contact me.
            </p>
          </div>
          <div className="aboutSkills">
            <h3>Skills</h3>
            <ul className="skills">
              <li className="skill">html</li>
              <li className="skill">css</li>
              <li className="skill">javascript</li>
              <li className="skill">mongoDB</li>
              <li className="skill">express</li>
              <li className="skill">react</li>
              <li className="skill">node</li>
              <li className="skill">git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
