import React from "react";
import classes from "./Footer.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className={classes.socialContainer}>
        <div className={classes.iconContainer}>
          <a href="https://www.linkedin.com/in/tobinkwaters/" target="_blank">
            <BsLinkedin className={classes.icon} size="2em" color="FFFFFF" />
          </a>
        </div>
        <div className={classes.iconContainer}>
          <a href="https://github.com/tkwaterss" target="_blank">
            <BsGithub className={classes.icon} size="2em" color="FFFFFF" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
