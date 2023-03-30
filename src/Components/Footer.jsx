import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className={classes.container}>
        <section className={classes.left}>
          <img src={Logo} alt="" className={classes.image} />
          <h3 className={classes.name}>Support Umbrella Nepal</h3>
        </section>
        <section className={classes.right}>
          <div className={classes.motive}>
            <Link to={"/about"} className={classes.link}>
              <h3 className={classes.head}>What We Do?</h3>
            </Link>

            <p className={classes.item}>Youth Training Workshop</p>
            <p className={classes.item}>Women Health Campaign</p>
            <p className={classes.item}>Environment Improvement</p>
            <p className={classes.item}>Disaster Rescue</p>
          </div>
          <div className={classes.motive}>
            <Link to={"/activities"} className={classes.link}>
              {" "}
              <h3 className={classes.head}>Our Activities</h3>
            </Link>
            <p className={classes.item}>Conduct Volunterring Workshop</p>
            <p className={classes.item}>Sustainable Development Goal</p>
            <p className={classes.item}>Environment Improvement Program</p>
            <p className={classes.item}>Youth Development Program</p>
          </div>
          <div className={classes.motive}>
            <h3 className={classes.head}>Where to Find us ?</h3>
            <div className={classes.social}>
              <div className={classes.socialItem}>
              <Link to={'https://www.facebook.com/supportumbrella01'} className={classes.link} target={"_blank"}>
              <FaFacebookSquare />
              </Link>
                
              </div>
              <div className={classes.socialItem}>
              <a className={classes.link} href={"mailto:info@supportumbrellanepal.org"}>
              <MdEmail />
              </a>
              </div>
              <div className={classes.socialItem}>
              <a className={classes.link} href={"https://sso.godaddy.com/login?realm=pass&app=ox"} target={'_blank'}>
              <p className={classes.checkMails}>Check Mails</p>
              </a>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.copy}>
          <p className={classes.copyItem} >&copy; support umbrella nepal</p>
        </section>
      </div>
      

     
    </>
  );
}

export default Footer;
