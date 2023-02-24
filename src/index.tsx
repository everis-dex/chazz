import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.render(
  <React.Suspense fallback={<p>Loading</p>}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);
