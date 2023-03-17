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
        <div className={classes.paraDiv}>
          <p className={classes.maintext}>
          " Support umbrella Nepal is the Non- governmental organizations register under the base of Ministry of home affairs government of Nepal  "
          </p>
        </div>
        <div className={classes.works}>
        <h1 className={classes.workHead}>What We Do?</h1>
          <p className={classes.workList}>
          Disaster risk reduction Management
          </p>
          <p className={classes.workList}>
          Youth Policy and Several Enterprisers Hip
          </p>
          <p className={classes.workList}>
          Advocacy
          </p>
          <p className={classes.workList}>
          Environment Improvement
          </p>
          <p className={classes.workList}>
          Health Campaign
          </p>
          <p className={classes.workList}>
          Global Sustainable Development
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
