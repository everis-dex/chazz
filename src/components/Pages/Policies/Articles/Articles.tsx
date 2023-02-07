import React, { useState } from "react";

import { IPolicy, IPolicyArticle } from "../../../../interfaces/cms";

import "./Articles.scss";

export const Articles = (policy: IPolicy) => {
  // Se respeta el selected article para ambos policies
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
            <div className="article-title" key={index} id={`article${index}`}>
              {article.title}
            </div>
            <div className="article-body" key={index}>
              {article.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
