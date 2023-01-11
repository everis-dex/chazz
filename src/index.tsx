import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-raleway";
import "./index.css";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.Suspense fallback={<p>Loading</p>}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);
