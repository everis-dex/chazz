import React, { useState } from "react";
import { useEffect } from "react";
import { ICategory } from "../../../../interfaces/cms";

import "./Category.styles.scss";

const options = [
  {
    title: "Research and Behavioural",
    content:
      "Exploring human behavior to understand needs and motivations converted into insights to feed the Ideation and Conceptualization phases. Qualitative, and Quantitative, Human and Business. We combine methodologies and perspectives to provide the right direction."
  },
  {
    title: "Strategic Design",
    content:
      "Exploring human behavior to understand needs and motivations converted into insights to feed the Ideation and Conceptualization phases. Qualitative, and Quantitative, Human and Business. We combine methodologies and perspectives to provide the right direction."
  },
  {
    title: "Branding",
    content:
      "Exploring human behavior to understand needs and motivations converted into insights to feed the Ideation and Conceptualization phases. Qualitative, and Quantitative, Human and Business. We combine methodologies and perspectives to provide the right direction."
  },
  {
    title: "Digital Products, UX & UI",
    content:
      "Exploring human behavior to understand needs and motivations converted into insights to feed the Ideation and Conceptualization phases. Qualitative, and Quantitative, Human and Business. We combine methodologies and perspectives to provide the right direction."
  },
  {
    title: "Start-up as a service",
    content:
      "Exploring human behavior to understand needs and motivations converted into insights to feed the Ideation and Conceptualization phases. Qualitative, and Quantitative, Human and Business. We combine methodologies and perspectives to provide the right direction."
  },
  {
    title: "Trends & Foresight",
    content:
      "Exploring human behavior to understand needs and motivations converted into insights to feed the Ideation and Conceptualization phases. Qualitative, and Quantitative, Human and Business. We combine methodologies and perspectives to provide the right direction."
  }
];

export const Category = (category: ICategory) => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  const accordionSymbol: string = openAccordion ? "-" : "+";

  function handleDropdown() {
    setOpenAccordion(!openAccordion);
  }

  return (
    <>
      <div className="category-container">
        <div className="category-header">
          {category.title && (
            <h1 className="title">
              {category.title} <span>•</span>
            </h1>
          )}
          {category.section && <h3 className="section">{category.section}</h3>}
        </div>
        <div className="category-content">
          <div className="body">{category.body}</div>
          <div className="category-options">
            {options.map((option, index: number) => (
              <div className="option" key={index} onClick={() => handleDropdown()}>
                <div className="accordion">
                  {option.title}
                  <span>{accordionSymbol}</span>
                </div>
                <div className="panel">{option.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
