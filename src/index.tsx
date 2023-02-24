import React from "react";
import ReactDOM from "react-dom";
import AOS from "aos";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "aos/dist/aos.css";

// Initialize animation library
AOS.init();

ReactDOM.render(
  <React.Suspense fallback={<p>Loading</p>}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);
