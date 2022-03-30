import React from "react";
import CopyRight from "./CopyRight";
import classes from "./ExploreMore.module.css";

function ExploreMore() {
  return (
    <div className={classes.explorePage}>
      <div className={classes.exploreTitle}>
        {"Vincent Van Gogh collection"}
      </div>
      <div className={classes.exploreList}>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
        <div className={classes.dummyIttem}></div>
      </div>
      <CopyRight />
    </div>
  );
}

export default ExploreMore;
