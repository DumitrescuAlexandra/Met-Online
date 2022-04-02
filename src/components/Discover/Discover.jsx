import React, { useEffect } from "react";
import classes from "./Discover.module.css";
import ArtItemThumbnail from "../ArtItemThumbnail/ArtItemThumbnail";
import { Link } from "react-router-dom";
import CopyRight from "../CopyRight/CopyRight";
import useGetCollection from "../Hooks/useGetCollection";

function Discover() {
  const { list, getCollection } = useGetCollection();

  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&isHighlight=true&q=gogh";

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getCollection(url);
    }
    return function cleanup() {
      mounted = false;
    };
  });

  return (
    <div className={classes.discoverPage}>
      <div className={classes.discoverTitle}>
        <div className={classes.olTitle}></div>
        <div className={classes.artistName}>{"Vincent Van Gogh"}</div>
        <div className={classes.olTitle}></div>
        <div className={classes.highlightsTitle}>
          - &nbsp;highlights&nbsp; -
        </div>
      </div>
      <div className={classes.discoverList}>
        <div className={classes.backArrow}>{"<"}</div>

        {list.map((item) => (
          <ArtItemThumbnail key={item} id={item.toString()} />
        ))}
        <div className={classes.nextArrow}>{">"}</div>
      </div>
      <div className={classes.discoverExplore}>
        Explore{" "}
        <Link to="/explore"> Vincent Van Gogh MET collection -{">"}</Link>
      </div>
      <CopyRight />
    </div>
  );
}

export default Discover;
