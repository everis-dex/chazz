import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { CookiePolicy, PrivacyPolicy, Services, Thoughts, ThoughtStudy, Work } from "./components/Pages";
import { CaseStudy } from "./components/Pages/Work/Project/CaseStudy/CaseStudy";

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
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/cookie_policy" element={<CookiePolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
