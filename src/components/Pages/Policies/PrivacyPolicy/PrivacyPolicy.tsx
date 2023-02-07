import React from "react";

import { IPolicy, IPolicyArticle } from "../../../../interfaces/cms";

import "./PrivacyPolicy.scss";

export const PrivacyPolicy = (policy: IPolicy) => {
  return (
    <>
      <div className="policy-container">
        <div className="sidebar">
          {policy.articles.map((article: IPolicyArticle, index: number) => (
            <a href={`#article${index}`} className="article-title" key={index}>
              {article.title}
            </a>
          ))}
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
    </>
  );
};
