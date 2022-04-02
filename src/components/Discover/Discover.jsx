import React from "react";
import axios from "axios";
import classes from "./Discover.module.css";
import ArtItemThumbnail from "../ArtItemThumbnail/ArtItemThumbnail";
import { Link } from "react-router-dom";
import CopyRight from "../CopyRight/CopyRight";
import useHttp from "../Hooks/useHttp";

function Discover() {
  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&isHighlight=true&q=gogh";
  const { list } = useHttp(axios.get(url));

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
