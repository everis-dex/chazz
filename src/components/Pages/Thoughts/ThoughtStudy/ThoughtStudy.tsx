import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

import { Months } from "../../../../constants";
import { thoughts } from "../../../../content";
import { IThought } from "../../../../interfaces/cms";
import { LineBreakerSelector, Nav } from "../../../shared";

import "./ThoughtStudy.styles.scss";

export const ThoughtStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove("no-scroll");
  }, []);

  const { id } = useParams();
  const filteredThoughts = thoughts.filter(thought => thought.id === (id ? parseInt(id) : 0));
  const thought: IThought = filteredThoughts[0] as IThought;
  const formattedDate = new Date(thought.date);
  const date: string = Months[formattedDate.getMonth()] + " " + formattedDate.getDate();

  const images = document.getElementsByTagName("img");

  useEffect(() => {
    // Display each image's title as image caption
    [...images].forEach((image: HTMLImageElement) => {
      const parent = image.parentElement;
      if (parent && parent.childElementCount <= 1) {
        const caption = document.createElement("p");
        caption.innerHTML = image.title;
        caption.style.marginBottom = "40px";
        parent.appendChild(caption);
      }
    });
  }, [images]);

  return (
    <>
      <Nav />
      <div className="page-container">
        <div className="page-header study-header">
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
            <h6>
              <LineBreakerSelector typedLines={thought.details.author} />
            </h6>
          </div>
          <div className="content-body">
            <ReactMarkdown>{thought.body}</ReactMarkdown>
          </div>
        </div>
      </div>
      <Link to="/thoughts" className="th-back-button">
        ← Back
      </Link>
    </>
  );
};
