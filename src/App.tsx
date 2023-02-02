import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Work, Services, Thoughts, PrivacyPolicy, CookiePolicy } from "./components/Pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/cookie_policy" element={<CookiePolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
