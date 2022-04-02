import { useState } from "react";
import axios from "axios";

const useGetArtwork = () => {
  const [artItem, setArtItem] = useState(null);

  const getArtwork = async (url) => {
    await axios.get(url).then((response) => {
      setArtItem(response.data);
    });
  };

  return { artItem, getArtwork };
};

export default useGetArtwork;
