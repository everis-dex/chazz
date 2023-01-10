import React, { useEffect, Fragment } from "react";
import { ICategory } from "../../../../interfaces/cms";
import { Option } from "./Option";

import "./Category.styles.scss";

const options = [
  {
    title: "Research and Behavioural",
    content:
      "Exploring human behavior to understand needs and motivations converted into insights to feed the Ideation and Conceptualization phases. Qualitative, and Quantitative, Human and Business. We combine methodologies and perspectives to provide the right direction."
  },
  { title: "Strategic Design", content: "" },
  { title: "Branding", content: "" },
  { title: "Digital Products, UX & UI", content: "" },
  { title: "Start-up as a service", content: "" },
  { title: "Trends & Foresight", content: "" }
];

export const Category = (category: ICategory) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <div className="category-container">
        {/* Header */}
        <div className="category-header">
          {category.title && (
            <h1 className="title">
              {category.title} <span>•</span>
            </h1>
          )}
          {category.section && <h3 className="section">{category.section}</h3>}
        </div>
        {/* Content */}
        <div className="category-content">
          <div className="body">{category.body}</div>
          <div className="category-options">
            {options.map((option, index: number) => (
              <Fragment key={index}>
                <Option title={option.title} content={options[0].content} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
