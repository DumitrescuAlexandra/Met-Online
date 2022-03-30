import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import classes from "./App.module.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import NotFound from "./components/NotFound/NotFound";
import ExploreMore from "./components/Explore/ExploreMore";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className={classes.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/explore" element={<ExploreMore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
