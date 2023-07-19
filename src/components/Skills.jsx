import React from "react";
import classes from "./Skills.module.css";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoHtml5,
  BiLogoCss3,
} from "react-icons/bi";
import { SiSequelize } from "react-icons/si";

const Skills = () => {
  return (
    <section className={classes.section}>
      <div className={classes.gridContainer}>
        <div className={classes.react}>
          <a href="" target="_blank">
            <BiLogoReact className={classes.icon} size="5rem" color="#000000" />
          </a>
        </div>
        <div className={classes.redux}>
          <a href="" target="_blank">
            <BiLogoRedux className={classes.icon} size="5rem" color="#000000" />
          </a>
        </div>
        <div className={classes.postgreSQL}>
          <a href="" target="_blank">
            <BiLogoPostgresql
              className={classes.icon}
              size="5rem"
              color="#000000"
            />
          </a>
        </div>
        <div className={classes.nodeJS}>
          <a href="" target="_blank">
            <BiLogoNodejs
              className={classes.icon}
              size="5rem"
              color="#000000"
            />
          </a>
        </div>
        <div className={classes.javascript}>
          <a href="" target="_blank">
            <BiLogoJavascript
              className={classes.icon}
              size="5rem"
              color="#000000"
            />
          </a>
        </div>
        <div className={classes.html}>
          <a href="" target="_blank">
            <BiLogoHtml5 className={classes.icon} size="5rem" color="#000000" />
          </a>
        </div>
        <div className={classes.css}>
          <a href="" target="_blank">
            <BiLogoCss3 className={classes.icon} size="5rem" color="#000000" />
          </a>
        </div>
        <div className={classes.sequelize}>
          <a href="" target="_blank">
            <SiSequelize className={classes.icon} size="5rem" color="#000000" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
