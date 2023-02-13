import React from "react";
import { useParams, Link } from "react-router-dom";

import { Nav } from "../../../shared";
import { Months } from "../../../../constants";
import { thoughts } from "../../../../content";
import { IThought } from "../../../../interfaces/cms";

import "./ThoughtStudy.styles.scss";

export const ThoughtStudy = () => {
  const { id } = useParams();
  const filteredThoughts = thoughts.filter(thought => thought.id === (id ? parseInt(id) : 0));
  const thought: IThought = filteredThoughts[0] as IThought;
  const formattedDate = new Date(thought.date);
  const date: string = Months[formattedDate.getMonth()] + " " + formattedDate.getDate();

  return (
    <>
      <Nav />
      <div className="thought-container">
        <img src={thought.image} alt="" />
        <div className="thought-content">
          <div className="thought-title">
            <h2>{thought.title}</h2>
            <img alt="" src="assets/icon-left_arrow.svg" />
          </div>
          <p className="thought-subtitle">{thought.body}</p>

          <div className="thought-details">
            <span className="date">{date}</span>
            <span className="dot">·</span>
            <span className="duration">{thought.duration} read</span>
          </div>
        </div>
      </div>
      <Link to="/work" className="back-button">
        ← Back
      </Link>
    </>
  );
};
