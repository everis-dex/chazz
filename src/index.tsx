import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-raleway";
import "./index.css";

ReactDOM.render(
  <React.Suspense fallback={<p>Loading</p>}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);
