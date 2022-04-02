import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./ArtItemThumbnail.module.css";

function ArtItemThumbnail({ id }) {
  const [artItem, setArtItem] = useState(null);

  useEffect(() => {
    let mounted = true;
    const getartwork = async () => {
      if (mounted) {
        await axios
          .get(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          )
          .then((response) => {
            setArtItem(response.data);
          });
      }
    };
    getartwork();
    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <div className={classes.artItem}>
      {artItem ? (
        <Link to={`/discover/${id}`}>
          <div className={classes.image}>
            <img src={artItem.primaryImageSmall} alt="" />
          </div>
          <div className={classes.caption}>
            <div className={classes.title}>{artItem.title}</div>
            <div className={classes.artist}>{artItem.artistDisplayName}</div>
            <div className={classes.date}>{artItem.objectDate}</div>
          </div>
        </Link>
      ) : (
        <div className={classes.image}>...</div>
      )}
    </div>
  );
}

export default ArtItemThumbnail;
