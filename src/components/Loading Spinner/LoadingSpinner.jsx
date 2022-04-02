// Code snippet taken from "https://freefrontend.com/css-spinners/"
import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="box">
      <div className="blocks">
        <div className="block orange"></div>
        <div className="block blue"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
