import React, { useEffect } from "react";

import { IThought } from "../../../../interfaces/cms";

import "./Thought.styles.scss";

export const Thought = (thought: IThought) => {
  // useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="thought-container">
      <img src={thought.image} alt="" />

      <div className="thought-content">
        <h2 className="thought-title">{thought.title}</h2>
        <p className="thought-body">{thought.body}</p>

        <div className="thought-details">
          <span className="date">{thought.id}</span>
          <span className="dot">·</span>
          <span className="duration">{thought.duration} read</span>
        </div>
      </div>

      <div className="thought-arrow"></div>
    </div>
  );
};
