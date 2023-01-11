import React, { useEffect, Fragment } from "react";
import { ICategory, ICategoryAccordion } from "../../../../interfaces/cms";
import { Option } from "./Option";

import "./Category.styles.scss";

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
            {category.accordions.map((accordion: ICategoryAccordion, index: number) => (
              <Fragment key={index}>
                <Option title={accordion.title} content={accordion.content} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
