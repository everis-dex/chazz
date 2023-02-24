import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { CaseStudy, Policies, Services, Thoughts, ThoughtStudy, Work } from "./components/Pages";
import { Footer } from "./components/shared";
import { services, thoughtsPage, work } from "./content";
import { useScrollToTop } from "./utils/utils";

const App = () => {
  useScrollToTop();
  return (
    <>
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
      {/* Common footer in all pages */}
      <Footer />
    </>
  );
};

export default App;
