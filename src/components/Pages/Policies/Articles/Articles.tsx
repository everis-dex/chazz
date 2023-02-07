import React, { useState } from "react";

import { IPolicy, IPolicyArticle } from "../../../../interfaces/cms";

import "./Articles.scss";

export const Articles = (policy: IPolicy) => {
  const [articleIndex, setArticleIndex] = useState<number>(0);

  return (
    <div className="policy-container">
      <div className="sidebar">
        {policy.articles.map((article: IPolicyArticle, index: number) => {
          const setSelected: string = articleIndex === index ? "selected" : "";
          return (
            <a
              href={`#article${index}`}
              className={`article-title ${setSelected}`}
              key={index}
              onClick={() => setArticleIndex(index)}
            >
              {article.title}
            </a>
          );
        })}
      </div>
      <div className="content">
        {policy.articles.map((article: IPolicyArticle, index: number) => (
          <div className="article">
            <div className="title" key={index} id={`article${index}`}>
              {article.title}
            </div>
            <div className="body" key={index}>
              {article.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
