import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { Months } from "../../../../constants";
import { thoughts } from "../../../../content";
import { IThought, IThoughtSocial } from "../../../../interfaces/cms";
import { LineBreakerSelector, Nav } from "../../../shared";

import "./ThoughtStudy.styles.scss";

export const ThoughtStudy = () => {
  const { id } = useParams();
  const filteredThoughts = thoughts.filter((thought: IThought) => thought.id === (id ? parseInt(id) : 0));
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
          <div className="header-content">
            <h1 className="header-title">{thought.title}</h1>
            <div className="socials">
              {thought.socials.map((social: IThoughtSocial, index: number) => (
                <a href={social.link} className="social" key={index}>
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="study-details">
            <span className="date">{date}</span>
            <span className="dot">·</span>
            <span className="duration">{thought.duration} read</span>
          </div>
          <img src={thought.image} alt="" />
        </div>
        <div className="study-content" data-aos="fade-up" data-aos-once="false">
          <div className="content-summary">
            <h2>
              <LineBreakerSelector typedLines={thought.details.subtitle} />
            </h2>
            <h6>
              <LineBreakerSelector typedLines={thought.details.author} />
            </h6>
            <div className="socials">
              {thought.details.socials.map((social: IThoughtSocial, index: number) => (
                <a href={social.link} className="social" key={index}>
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="content-body">
            <ReactMarkdown>{thought.body}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};
