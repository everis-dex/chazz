import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Home from "./components/Home/Home";
import WeAre from "./components/Pages/WeAre/WeAre";
import OurServices from "./components/Pages/OurServices/OurServices";
import OurWork from "./components/Pages/OurWork/OurWork";
import Thoughts from "./components/Pages/Thoughts/Thoughts";



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
