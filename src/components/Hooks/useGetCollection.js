import { useState } from "react";
import axios from "axios";

const useGetCollection = () => {
  const [list, setList] = useState([]);

  const getCollection = async (url) => {
    await axios.get(url).then((response) => {
      let theList = [];
      response.data.objectIDs.map((el) => {
        theList.push(el);
        return theList;
      });
      setList(theList);
    });
  };

  return { list, getCollection };
};

export default useGetCollection;
