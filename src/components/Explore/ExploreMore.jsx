import React from "react";
import axios from "axios";
import ArtItemThumbnail from "../ArtItemThumbnail/ArtItemThumbnail";
import CopyRight from "../CopyRight/CopyRight";
import classes from "./ExploreMore.module.css";
import useHttp from "../Hooks/useHttp";

function ExploreMore({ id }) {
  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&q=gogh";
  const { list } = useHttp(axios.get(url));

  return (
    <div className={classes.explorePage}>
      <div className={classes.exploreTitle}>Vincent Van Gogh Collection</div>
      <div className={classes.exploreList}>
        {list.map((item) => (
          <ArtItemThumbnail key={item} id={item.toString()} />
        ))}
      </div>
      <CopyRight />
    </div>
  );
}

export default ExploreMore;
