import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./ArtItemThumbnail.module.css";

function ArtItemThumbnail({ id }) {
  console.log(id);
  const [artItem, setArtItem] = useState(null);

  // const getArtwork = (id) => {
  //   axios
  //     .get(
  //       `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
  //     )
  //     .then((response) => {
  //       setArtItem(response.data);
  //       console.log(artItem);
  //     });
  // };

  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     getArtwork(id);
  //   }

  //   return function cleanup() {
  //     mounted = false;
  //   };
  // }, [getArtwork, id]);

  return (
    <div className={classes.artItem}>
      <Link to={`/discover/${id}`}>
        <div className={classes.image}>
          {/* <Link to={`/discover/id`}> */}

          {/* {artItem.primaryImageSmall || (
            <img src="/images/smokingSkull.PNG" alt="" />
          )} */}
        </div>
        <div className={classes.caption}>
          <div className={classes.title}>
            {/* {artItem.data.title || "The smoking skull"} */}
          </div>
          <div className={classes.artist}>
            {/* {artItem.data.artistDisplayName || "Vincent Van Gogh"} */}
          </div>
          <div className={classes.date}>
            {/* {artItem.data.objectDate || "25.dec.1888"} */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArtItemThumbnail;
