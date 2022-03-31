import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Discover.module.css";
import ArtItemThumbnail from "../ArtItemThumbnail/ArtItemThumbnail";
import { Link } from "react-router-dom";
import CopyRight from "../CopyRight/CopyRight";

function Discover() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    const getHighlightItems = () => {
      if (mounted) {
        axios
          .get(
            "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&isHighlight=true&q=gogh"
          )
          .then((response) => {
            let listos = [];
            response.data.objectIDs.map((el) => {
              listos.push(el);
              return listos;
            });
            setList(listos);
          });

        console.log(list);
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
        {list.map((item) => console.log(`Here's you id: ${item.toString()}`))}
        {list.map((item) => (
          <ArtItemThumbnail
            key={item}
            id={item.toString()}
            // getArtwork={getArtwork}
          />
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
