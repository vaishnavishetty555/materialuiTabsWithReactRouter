import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
