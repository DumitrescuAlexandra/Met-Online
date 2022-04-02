import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./ArtItemThumbnail.module.css";
import useGetArtwork from "../Hooks/useGetArtwork";

function ArtItemThumbnail({ id }) {
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const { artItem, getArtwork } = useGetArtwork(url);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getArtwork(url);
    }
    return function cleanup() {
      mounted = false;
    };
  });

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
