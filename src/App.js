import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Route, Routes, Navigate } from "react-router-dom";
import classes from "./App.module.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import NotFound from "./components/NotFound/NotFound";
import ExploreMore from "./components/Explore/ExploreMore";
import Navigation from "./components/Navigation/Navigation";
import ArtItemDetailed from "./components/ArtItemDetailed/ArtItemDetailed";

function App() {
  const [list, setList] = useState([]);

  const getHighlightItems = useCallback(() => {
    axios
      .get(
        "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&isHighlight=true&q=gogh"
      )
      .then((response) => {
        let listos = [];
        response.data.objectIDs.map((el) => {
          listos.push(el);
          return listos;
        });
        setList(listos);
      });

    console.log(list);
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getHighlightItems();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  // useEffect(() => {
  //   let mounted = true;
  //   const getHighlightItems = () => {
  //     if (mounted) {
  // axios
  //   .get(
  //     "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&medium=Paintings&isHighlight=true&q=gogh"
  //   )
  //   .then((response) => {
  //     let listos = [];
  //     response.data.objectIDs.map((el) => {
  //       listos.push(el);
  //       return listos;
  //     });
  //     setList(listos);
  //   });

  // console.log(list);
  //     }
  //   };

  //   getHighlightItems();

  //   return function cleanup() {
  //     mounted = false;
  //   };
  // }, []);

  return (
    <div className={classes.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover list={list} />} />
        <Route path="/discover/id" element={<ArtItemDetailed />} />
        {/* <Route path="/discover/:artItemID" element={<ArtItemDetailed />} /> */}
        <Route path="/explore" element={<ExploreMore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
