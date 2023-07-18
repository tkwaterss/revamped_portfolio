import React from "react";
import classes from "./Header.module.css";
import logo from '../images/TKW-logo.png';


const Header = () => {
  return (
    <header>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="personal logo"></img>
      </div>
      <nav>
        <ul className={classes.navContainer}>
          <li>Home</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
