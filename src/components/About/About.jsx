import React from "react";
import { Link } from "react-router-dom";
import classes from "./About.module.css";
import CopyRight from "../CopyRight/CopyRight";

function About() {
  return (
    <div className={classes.aboutPage}>
      <div className={classes.upper}>
        <div className={classes.sectionLeft}>
          <div className={classes.imgContainerBg}></div>
          <div className={classes.imgContainer}>
            <img src="/images/smokingSkull.PNG" alt="" />
          </div>
          <div className={classes.vl}></div>
        </div>
        <div className={classes.sectionRight}>
          <div className={classes.aboutTitle}>
            <p>The Metropolitan Museum of Art - Online</p>
          </div>
          <div className={classes.aboutText}>
            <p>
              The Metropolitan Museum of Art presents over 5,000 years of art
              from around the world for everyone to experience and enjoy. The
              Museum lives in two iconic sites in New York City—The Met Fifth
              Avenue and The Met Cloisters. Millions of people also take part in
              The Met experience online.
            </p>
            <br />{" "}
            <p>
              {" "}
              Since its founding in 1870, The Met has always aspired to be more
              than a treasury of rare and beautiful objects. Every day, art
              comes alive in the Museum's galleries and through its exhibitions
              and events, revealing new ideas and unexpected connections across
              time and across cultures.
            </p>{" "}
            <br />{" "}
            <p>
              We proudly present you <b>“The MET Online” </b>project - the
              online version of one of the largest museums in the world. Each
              week we will bring another artist’s masterpieces in th spotlight!
            </p>
          </div>
          <div className={classes.aboutDiscover}>
            Discover: &nbsp;{" "}
            <Link to="/discover">Artist of the moment {"->"}</Link>{" "}
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}

export default About;
