import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import WeAre from "./components/Sections/WeAre/WeAre";
import OurServices from "./components/Sections/OurServices/OurServices";
import OurWork from "./components/Sections/OurWork/OurWork";
import Thoughts from "./components/Sections/Thoughts/Thoughts";



export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/weare" element={<WeAre />} />
        <Route exact path="/services" element={<OurServices />} />
        <Route exact path="/work" element={<OurWork />} />
        <Route exact path="/thoughts" element={<Thoughts />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
