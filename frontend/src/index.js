import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
TODO:
 - implement a grid background
 - ** THINK OF MORE DATA ANALYSIS THAT I CAN PROVIDE TO THE USER *
 - add the background glows
 - MAKE SURE ON THE FRONTEND WE CORRECTLY FORMAT THE INPUTTED NAME BEFORE PASSING IT TO THE BACKEND
*/
