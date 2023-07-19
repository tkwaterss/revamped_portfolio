import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes.section}>
      <form className={classes.contactForm}>
        <h2>Get In Touch!</h2>
        <p>
          I am actively searching for new employment opportunities. Feel free to
          reach me through email or the links below.
        </p>
      </form>
      <h5>tkwaterss@gmail.com</h5>
    </section>
  );
};

export default Contact;
