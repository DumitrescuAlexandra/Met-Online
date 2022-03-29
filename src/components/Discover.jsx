import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Discover.module.css";
import ArtItem from "./ArtItem";

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

  // NEED nested routes for items!

  return (
    <div className={classes.listPage}>
      <div className={classes.listContainer}></div>
    </div>
  );
}

export default Discover;
