import React from "react";

import { ICategory, ICategoryAccordion } from "../../../../interfaces/cms";
import { Accordion } from "../../../shared";

import "./Category.styles.scss";

export const Category = (category: ICategory) => {
  return (
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
        <div className="summary">{category.summary}</div>
        <div className="category-options">
          {category.accordions.map((accordion: ICategoryAccordion, index: number) => {
            const duration: number = 100 * index + 400;
            return (
              <div key={index} data-aos="fade-up" data-aos-offset="-200" data-aos-duration={duration.toString()}>
                <Accordion title={accordion.title} content={accordion.content} ourWork={false} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
