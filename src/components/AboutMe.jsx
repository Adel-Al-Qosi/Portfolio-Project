import React from "react";
import "../styles/AboutMe.css";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h1></h1>
      <h2>About Me</h2>
      <p>
        My name is Adel Al Qosi, and I'm a passionate web developer. I've always
        been interested in coding and love learning new technologies to build
        creative and functional websites.
      </p>
      <p>
        I'm proficient in HTML, CSS, and JavaScript, and have experience
        building websites with React. I also have knowledge of Git and GitHub
        for version control, as well as Linux and Bash for command line
        interface.
      </p>
      <p>
        One of my strengths as a developer is my eagerness to learn and
        constantly improve my skills. I enjoy tackling new challenges and
        expanding my knowledge in the field of web development.
      </p>
      <div className="skills">
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
