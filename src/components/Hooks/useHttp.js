import { useState, useLayoutEffect } from "react";

const useHttp = (request) => {
  const [list, setList] = useState([]);
  const [artItem, setArtItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    let mounted = true;
    const fetchInfo = async () => {
      if (mounted) {
        await request.then((response) => {
          setList(response.data.objectIDs);
          setArtItem(response.data);
        });
      }
    };
    fetchInfo();
    return () => {
      setIsLoading(false);
      mounted = false;
    };
  }, [request]);

  return { list, artItem, isLoading };
};

export default useHttp;
