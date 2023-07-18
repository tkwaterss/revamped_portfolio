import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={classes.section}>
      Replace this list with dynamic icons
      <div class="skills-div">
        <ul class="tech-skills">
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div class="skills-div">
        <ul class="tech-skills">
          <li>Axios</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>Heroku</li>
          <li>AWS</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
