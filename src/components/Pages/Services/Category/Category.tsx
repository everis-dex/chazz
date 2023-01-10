import React from "react";
import { useEffect } from "react";
import { ICategory } from "../../../../interfaces/cms";

import "./Category.styles.scss";

export const Category = (category: ICategory) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <div className="cateogry-container">
        <div className="category-header">
          <h1 className="title">{category.title}</h1>
          <h3 className="section">{category.section}</h3>
        </div>
        <div className="cateogry-container--content"></div>
      </div>
    </>
  );
};
