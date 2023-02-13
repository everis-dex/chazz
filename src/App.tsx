import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { CaseStudy, Policies, Services, Thoughts, ThoughtStudy, Work } from "./components/Pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/case/:id" element={<CaseStudy />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/thoughts/:id" element={<ThoughtStudy />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
