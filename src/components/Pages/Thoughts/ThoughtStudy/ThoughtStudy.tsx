import React from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

import { Months } from "../../../../constants";
import { thoughts } from "../../../../content";
import { IThought } from "../../../../interfaces/cms";
import { Footer, LineBreakerSelector, Nav } from "../../../shared";

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
      <div className="study-container">
        <div className="study-header">
          <h1 className="header-title">{thought.title}</h1>
          <div className="study-details">
            <span className="date">{date}</span>
            <span className="dot">·</span>
            <span className="duration">{thought.duration} read</span>
          </div>
          <img src={thought.image} alt="" />
        </div>
        <div className="study-content">
          <div className="content-summary">
            <h2>
              <LineBreakerSelector typedLines={thought.details.subtitle} />
            </h2>
            <p>
              <LineBreakerSelector typedLines={thought.details.author} />
            </p>
          </div>
          <div className="content-body">
            <ReactMarkdown>{thought.body}</ReactMarkdown>
          </div>
        </div>
      </div>
      <Link to="/thoughts" className="back-button">
        ← Back
      </Link>
      <Footer />
    </>
  );
};
