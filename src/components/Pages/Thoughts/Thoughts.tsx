import React, { useEffect } from "react";

import { thoughtsPage } from "../../../content/index";
import { Footer, Nav } from "../../shared/index";

import "./Thoughts.styles.scss";

export const Thoughts = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav />
      <div className="thoughts-container">
        <div className="thoughts-header">
          <h1 className="header-title">{thoughtsPage.title}</h1>
          <img loading="lazy" src={thoughtsPage.image} alt="Header" />
        </div>
      </div>
      <Footer />
    </>
  );
};
