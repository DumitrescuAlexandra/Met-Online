import React from "react";
import { Link } from "react-router-dom";
import classes from "./ArtItemThumbnail.module.css";

function ArtItemThumbnail({ smallImg, title, date, artist, id }) {
  return (
    <div className={classes.artItem}>
      <div className={classes.image}>
        <Link to={`/discover/id`}>
          {/* <Link to={`/discover/${id}`}> */}
          {smallImg || <img src="/images/smokingSkull.PNG" alt="" />}
        </Link>
      </div>
      <div className={classes.caption}>
        <div className={classes.title}>{title || "The smoking skull"}</div>
        <div className={classes.artist}>{artist || "Vincent Van Gogh"}</div>
        <div className={classes.date}>{date || "25.dec.1888"}</div>
      </div>
    </div>
  );
}

export default ArtItemThumbnail;
