import React from "react";
import { Link } from "react-router-dom";

import { IThought } from "../../../../interfaces/cms";
import { Months } from "../../../../constants";

import "./Thought.styles.scss";

export const Thought = (thought: IThought) => {
  const formattedDate = new Date(thought.date);
  const date: string = Months[formattedDate.getMonth()] + " " + formattedDate.getDate();

  return (
    <Link to={`/thoughts/${thought.id}`} className="thought-container">
      <img src={thought.image} alt="" />
      <div className="thought-content">
        <div className="thought-title">
          <h2>{thought.title}</h2>
          <img alt="" src="assets/icon-left_arrow.svg" />
        </div>
        <p className="thought-subtitle">{thought.subtitle}</p>

        <div className="thought-details">
          <span className="date">{date}</span>
          <span className="dot">·</span>
          <span className="duration">{thought.duration} read</span>
        </div>
      </div>
    </Link>
  );
};
