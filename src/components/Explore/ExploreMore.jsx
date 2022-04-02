import React, { useEffect } from "react";
import ArtItemThumbnail from "../ArtItemThumbnail/ArtItemThumbnail";
import CopyRight from "../CopyRight/CopyRight";
import classes from "./ExploreMore.module.css";
import useGetCollection from "../Hooks/useGetCollection";

function ExploreMore({ id }) {
  const { list, getCollection } = useGetCollection();

  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&q=gogh";

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getCollection(url);
    }
    return function cleanup() {
      mounted = false;
    };
  });

  return (
    <div className={classes.explorePage}>
      <div className={classes.exploreTitle}>Vincent Van Gogh Collection</div>
      <div className={classes.exploreList}>
        {list.map((item) => (
          <ArtItemThumbnail key={item} id={item.toString()} />
        ))}
      </div>
      <CopyRight />
    </div>
  );
}

export default ExploreMore;
