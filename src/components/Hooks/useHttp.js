import { useState, useEffect } from "react";

const useHttp = (request) => {
  const [list, setList] = useState([]);
  const [artItem, setArtItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      request.then((response) => {
        setList(response.data.objectIDs);
        setArtItem(response.data);
      });
    }
    return () => {
      mounted = false;
      setIsLoading(false);
    };
  });

  return { list, artItem, isLoading };
};

export default useHttp;
