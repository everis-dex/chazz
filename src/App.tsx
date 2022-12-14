import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { OurServices, OurWork, Thoughts, WeAre } from "./components/Pages";

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
