import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./GetListOfArtItems.module.css";
import ArtItem from "./ArtItem";

function GetListOfArtItems() {
  const [list, setList] = useState(null);

  useEffect(() => {
    let mounted = true;
    const getArtItems = () => {
      if (mounted) {
        axios
          .get(
            "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&isHighlight=true&q=gogh"
          )
          .then((response) => {
            console.log(response.data);
            setList(response);
          });
      }
    };
    getArtItems();
    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <div className={classes.listPage}>
      <div className={classes.listContainer}></div>
    </div>
  );
}

export default GetListOfArtItems;
