import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Services, Thoughts, Work } from "./components/Pages";

import { categoriesInfo, getInTouchInfo, officesInfo, partnersInfo, projectsInfo, studiosInfo, homeInfo, workInfo } from "./content/index";

console.log({ categoriesInfo, getInTouchInfo, officesInfo, partnersInfo, projectsInfo, studiosInfo, homeInfo, workInfo });

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};
