import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";
import Copyright from "../CopyRight/CopyRight";

function NotFound() {
  return (
    <div className={classes.notFoundPage}>
      <div className={classes.notFoundTitle}> 404 - Page not found</div>
      <div className={classes.imageContainer}>
        <img src="/images/ooops.png" alt="" />
      </div>
      <div className={classes.redirectLink}>
        Go back&nbsp; <Link to="/home"> home -{">"} </Link>
      </div>
      <Copyright />
    </div>
  );
}

export default NotFound;
