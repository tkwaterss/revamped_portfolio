import React from "react";
import classes from "./Contact.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./UI/Input";

const Contact = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("This field is required"),
    message: yup.string().required("Please enter a short message"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, helpers) => {
      values.email = values.email.toLowerCase();

      //TODO Whatever message gets sent
      console.log(values.message);

      helpers.resetForm();
    },
  });

  return (
    <section className={classes.section}>
      <form onSubmit={formik.handleSubmit} className={classes.contactForm}>
        <h2>Get In Touch!</h2>
        <p>
          Please feel free to message me with any opportunities, questions, or
          if you just want to chat!
        </p>
        <div className={classes.inputContainer}>
          <div className={classes.inputsBlock}>
            <Input
              id="name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Name"
              invalid={formik.touched.name && formik.errors.name ? true : false}
            >
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : (
                "Name"
              )}
            </Input>
            <Input
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="email"
              invalid={
                formik.touched.email && formik.errors.email ? true : false
              }
            >
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : (
                "Email"
              )}
            </Input>
          </div>
          <textarea
            id={classes.message}
            name="message"
            rows="8"
            cols="80"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Message"
            invalid={
              formik.touched.message && formik.errors.message ? true : false
            }
          ></textarea>
        <button type="submit" className={classes.contactSubmitBtn}>Send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
