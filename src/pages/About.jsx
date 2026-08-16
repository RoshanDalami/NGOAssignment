import React from "react";
import classes from "./About.module.css";
import Logo from "../assets/logo.jpeg";
import InvestorlistLogo from "../assets/logo_investor_list_inversed.svg";

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

        {/* ── Partners & Resources ──────────────────────── */}
        <div className={classes.partnersSection}>
          <h1 className={classes.partnersHead}>Partners & Resources</h1>
          <p className={classes.partnersSubtitle}>
            Organizations and platforms we collaborate with
          </p>
          <div className={classes.partnersGrid}>
            <div className={classes.partnerCard}>
              <a
                href="https://www.investorlist.com"
                target="_blank"
                className={classes.partnerLogoLink}
              >
                <img
                  src={InvestorlistLogo}
                  alt="Investorlist.com"
                  className={classes.partnerLogo}
                />
              </a>
              <span className={classes.partnerType}>Investorlist.com</span>
              <p className={classes.partnerDesc}>
                Investorlist.com provides structured data on active investors
                globally, segmented by geography, sector, and investment stage.
                The platform helps users quickly identify relevant investors
                without having to source and organise the data themselves.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;

