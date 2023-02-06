import React from "react";

import { privacyPolicy } from "../../../../content";
import { IPolicy, IPolicyArticle } from "../../../../interfaces/cms";
import "./PrivacyPolicy.scss";

export const PrivacyPolicy = () => {
  const privacy: IPolicy = privacyPolicy;
  console.log("🚀 ~ file: PrivacyPolicy.tsx:9 ~ PrivacyPolicy ~ privacy", privacy.articles);

  return (
    <>
      <div className="policy-container">
        <div className="sidebar">
          {privacy.articles.map((article: IPolicyArticle, index: number) => (
            <a href={`#article${index}`} className="article-title" key={index}>
              {article.title}
            </a>
          ))}
        </div>
        <div className="content">
          {privacy.articles.map((article: IPolicyArticle, index: number) => (
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
