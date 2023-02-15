import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { CaseStudy, Policies, Services, Thoughts, ThoughtStudy, Work } from "./components/Pages";
import { services, thoughtsPage, work } from "./content";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {services.published && <Route path="/services" element={<Services />} />}
        {work.published && <Route path="/work" element={<Work />} />}
        {work.published && <Route path="/work/case/:id" element={<CaseStudy />} />}
        {thoughtsPage.published && <Route path="/thoughts" element={<Thoughts />} />}
        {thoughtsPage.published && <Route path="/thoughts/:id" element={<ThoughtStudy />} />}
        <Route path="/policies/:id?" element={<Policies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
