import React from "react";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={classes.section}>
      <h2>Projects</h2>
      TODO: Projects Section gets styling that has each project swing in from the side as they come into view
      <div className={classes.projectDivider}></div>
      <section className={classes.project}>
        <section className={classes.projectPreview}>
          <a
            target="_blank"
            href="https://bicycle-bandits.herokuapp.com/"
            alt="screenshot of Bike Bandits"
          >
            <img
              id="bike-bandits-scrnshot"
              src="./images/Screenshot 2023-06-01 125426.png"
              alt="Bicycle Bandits Screenshot"
            />
          </a>
        </section>
        <section className={classes.projectDescription}>
          <h3>Bicycle Bandits</h3>
          <div className={classes.projectLinksContainer}>
            <h5>
              <a target="_blank" href="https://youtu.be/Rw1oUMVaRDo">
                Watch a Demo
              </a>
            </h5>
            <h5>
              <a target="_blank" href="https://bicycle-bandits.herokuapp.com/">
                Visit the App
              </a>
            </h5>
            <h5>
              <a
                target="_blank"
                href="https://github.com/tkwaterss/Bicycle_Bandits"
              >
                See the Code
              </a>
            </h5>
          </div>
          <p>
            A bicycle shop management app combinging services for
            both employees and customers. The app provides service ticket
            management for employees as well as online shopping and service
            transparency for customers. This app took lessons learned from
            developing Cycle Mate and improved upon those elements as well as
            adding numerous additional features. New features are still being
            added regularly.
          </p>
          <ol className={classes.projectSkills}>
            <li>React</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Sequelize</li>
          </ol>
        </section>
      </section>
      <div className={classes.projectDivider}></div>
      <section className={classes.project}>
        <section className={classes.projectDescription}>
          <h3>Cycle Mate</h3>
          <div className={classes.projectLinksContainer}>
            <h5>
              <a target="_blank" href="https://github.com/tkwaterss/Cycle_Mate">
                See the Code
              </a>
            </h5>
          </div>
          <p>
            Cycle Mate is a service tracking app. This app is designed to help a
            bike shop manage service tickets efficiently. Tickets can be viewed,
            created, updated, and deleted on a user friendly platform.
          </p>
          <ol className={classes.projectSkills}>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>PostgreSQL</li>
            <li>Axios</li>
            <li>Express</li>
          </ol>
        </section>
        <section className={classes.projectPreview}>
          <a
            target="_blank"
            href="https://github.com/tkwaterss/Cycle_Mate"
            alt="Screenshot of Cycle Mate"
          >
            <img
              id="bike-bandits-scrnshot"
              src="./images/bike-bandits-screenshot.png"
              alt="Cycle Mate Screenshot"
            />
          </a>
        </section>
      </section>
      <div className="project-divider"></div>
    </section>
  );
};

export default Projects;
