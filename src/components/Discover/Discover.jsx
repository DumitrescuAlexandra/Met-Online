import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Discover.module.css";
import ArtItem from "../ArtItem/ArtItem";
import { Link } from "react-router-dom";
import CopyRight from "../CopyRight/CopyRight";

function Discover() {
  const [list, setList] = useState(null);

  useEffect(() => {
    let mounted = true;
    const getHighlightItems = () => {
      if (mounted) {
        axios
          .get(
            "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&isHighlight=true&q=gogh"

            // "https://collectionapi.metmuseum.org/public/collection/v1/objects/436530"
          )

          .then((response) => {
            console.log(response.data.objectIDs);
            setList(response.data.objectIDs);
          });
      }
    };
    getHighlightItems();
    return function cleanup() {
      mounted = false;
    };
  }, []);

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
        <ArtItem />
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
