import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./ArtItemThumbnail.module.css";
import LoadingSpinner from "../Loading Spinner/LoadingSpinner";
import useHttp from "../Hooks/useHttp";

function ArtItemThumbnail({ id }) {
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;

  const { artItem, isLoading } = useHttp(axios.get(url));

  return (
    <div className={classes.artItem}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </div>
  );
}

export default ArtItemThumbnail;
