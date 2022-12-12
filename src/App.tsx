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
        <Route path="/" element={<Home />} />
        <Route path="/weare" element={<WeAre />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
