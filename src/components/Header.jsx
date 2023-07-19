import React from "react";
import classes from "./Header.module.css";
import logo from '../images/TKW-logo.png';
import {NavLink, Link } from 'react-router-dom'


const Header = () => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#A59132" : "",
      textDecoration: isActive ? "underline" : "",
    };
  };
  return (
    <header>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="personal logo"></img>
      </div>
      <nav>
        <ul className={classes.navContainer}>
          <li>
            <NavLink style={activeStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink style={activeStyle} to="/contact">
              Contact
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
