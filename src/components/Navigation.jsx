import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={classes.navigationBar}>
      <div className={classes.logo}>
        <img src="/images/met-logo.svg" alt="" />
      </div>
      <div className={classes.navLinks}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? classes.activeStyle : classes.inactiveStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? classes.activeStyle : classes.inactiveStyle
          }
        >
          About
        </NavLink>
        <NavLink
          to="/discover"
          className={({ isActive }) =>
            isActive ? classes.activeStyle : classes.inactiveStyle
          }
        >
          Discover
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? classes.activeStyle : classes.inactiveStyle
          }
        >
          Explore
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
