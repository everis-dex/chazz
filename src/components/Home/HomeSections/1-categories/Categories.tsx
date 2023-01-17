import React from "react";

import { categories } from "../../../../content/index";
import { ICategory, IHomeSection } from "../../../../interfaces/cms";
import { LineBreakerSelector } from "../../../shared/index";

import "./Categories.styles.scss";

export const Categories = (categoriesData: IHomeSection) => {
  return (
    <div className="background">
      <div id="Categories">
        <div className="section1">
          <div className="section1-title">
            <h2>
              <strong>{categoriesData.title}</strong> <br></br>
              <LineBreakerSelector typedLines={categoriesData.subtitle} />
            </h2>
          </div>

          <div className="section1-sections">
            {categories.map((category: ICategory, index: number) => (
              <div key={index}>
                {category.title && <h2>{category.title}</h2>}
                {category.section && <p>{category.section}</p>}
                {category.body && <p>{category.body}</p>}
                {index < categories.length - 1 && <hr></hr>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
