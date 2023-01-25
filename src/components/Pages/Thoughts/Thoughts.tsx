import React, { useEffect } from "react";

import { thoughts, thoughtsPage } from "../../../content/index";
import { IThought } from "../../../interfaces/cms";

import { Footer, MoreLink, Nav } from "../../shared/index";
import { Thought } from "./Thought/Thought";

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
        {/* Thoughts section */}
        <div className="thoughts">
          {thoughts.map((thought: IThought, index: number) => (
            <div className="thought" key={index}>
              <Thought {...thought} />
            </div>
          ))}
        </div>
        {/* More thoughts */}
        <div className="thoughts-arrow">
          <MoreLink text="More thoughts" link="/thoughts" />
        </div>
      </div>

      <Footer />
    </>
  );
};
