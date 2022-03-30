import React from "react";
import classes from "./CopyRight.module.css";

function CopyRight() {
  return (
    <div className={classes.copyright}>
      <div className={classes.ol}></div>
      <div className={classes.copyrightText}>
        © 2022, Copyright by Q_PERIOR all rights reserved{" "}
      </div>
    </div>
  );
}

export default CopyRight;
