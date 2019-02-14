import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  root
);
