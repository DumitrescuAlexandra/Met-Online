import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

function Home() {
  return (
    <Fragment>
      {" "}
      <div className={classes.imageContainer}>
        <img src="/images/met.jpg" alt="" />
      </div>
      <div className={classes.textBox}>
        <div className={classes.actualText}>
          <p>
            Dare to <span> know </span> more. To <span> explore </span>. To
            &nbsp;{" "}
          </p>
          <Link to="/discover"> discover </Link>
          <span>{">"} </span>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
