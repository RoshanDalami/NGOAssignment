import React from "react";
import classes from "./About.module.css";
import Logo from "../assets/logo.jpeg";

function About() {
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.head}>About Support Umbrella Nepal</h1>
        <div>
          <img src={Logo} alt="" className={classes.image} />
        </div>
      </div>
    </>
  );
}

export default About;
