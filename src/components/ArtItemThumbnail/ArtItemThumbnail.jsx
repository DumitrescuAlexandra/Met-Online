import React from "react";
import classes from "./ArtItemThumbnail.module.css";

function ArtItem({ smallImg, title, date, artist, id }) {
  return (
    <div className={classes.artItem}>
      <div className={classes.image}>{smallImg}</div>
      <div className={classes.title}>{title}</div>
      <div className={classes.date}>{date}</div>
      <div className={classes.artist}>{artist}</div>
    </div>
  );
}

export default ArtItem;
