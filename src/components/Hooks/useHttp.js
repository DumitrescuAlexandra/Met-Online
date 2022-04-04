import { useState, useEffect } from "react";

const useHttp = (request) => {
  const [list, setList] = useState([]);
  const [artItem, setArtItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchInfo = async () => {
      if (mounted) {
        try {
          await request.then((response) => {
            setList(response.data.objectIDs);
            setArtItem(response.data);
          });
        } catch (error) {
          console.log(error);
        }
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
