import React from 'react'
import classes from './Contact.module.css'

const Contact = () => {
  return (
    <section className={classes.section}>
            <section id="contact-left">
                <h2>Get In Touch!</h2>
                <p>I am actively searching for new employment opportunities. Feel free to reach me through email or the links below.</p>
            </section>
            <h5>tkwaterss@gmail.com</h5>
            <section id="contact-right">
                <a href="https://www.linkedin.com/in/tobinkwaters/" target="_blank"><img class="social" src="images/linkedinLogo.png" /></a>
                <a href="https://github.com/tkwaterss" target="_blank"><img class="social" src="images/githubLogo.png" /></a>
            </section>
        </section>
  )
}

export default Contact