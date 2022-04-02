import React from "react";
import ArtItemThumbnail from "../ArtItemThumbnail/ArtItemThumbnail";
import CopyRight from "../CopyRight/CopyRight";
import classes from "./ExploreMore.module.css";

function ExploreMore({ id }) {
  return (
    <div className={classes.explorePage}>
      <ArtItemThumbnail key={id} id={id} />
      <CopyRight />
    </div>
  );
}

export default ExploreMore;
