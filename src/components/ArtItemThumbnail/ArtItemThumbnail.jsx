import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./ArtItemThumbnail.module.css";

function ArtItemThumbnail({ id }) {
  console.log(id);

  const [artItem, setArtItem] = useState(null);

  const getArtworkItem = useCallback(
    (idStr) => {
      axios
        .get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${idStr}`
        )
        .then((response) => {
          setArtItem(response.data);
          console.log(artItem);
        });
    },
    [id]
  );
  // dsa

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getArtworkItem(id);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [getArtworkItem, id]);

  return (
    <div className={classes.artItem}>
      <Link to={`/discover/${id}`}>
        <div className={classes.image}>
          {/* <img src={artItem.primaryImageSmall} alt="" /> */}
          {<img src="/images/smokingSkull.PNG" alt="" />}
        </div>
        <div className={classes.caption}>
          <div className={classes.title}>
            {/* {artItem.title} */}
            {"The smoking skull"}
          </div>
          <div className={classes.artist}>
            {/* {artItem.artistDisplayName} */}
            {"Vincent Van Gogh"}
          </div>
          <div className={classes.date}>
            {/* {artItem.objectDate} */}
            {"25.dec.1888"}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArtItemThumbnail;
