// src/GlobalWrapper.js
import React from "react";
import "./GlobalWrapper.css";

const GlobalWrapper = ({ children }) => {
  return <div className="global-wrapper">{children}</div>;
};

export default GlobalWrapper;
