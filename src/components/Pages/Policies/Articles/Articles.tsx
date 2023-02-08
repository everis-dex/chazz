import React, { useState } from "react";

import { IPolicy, IPolicyArticle } from "../../../../interfaces/cms";
import { Accordion } from "../../../shared/Accordion/Accordion";
import "./Articles.scss";

export const Articles = (policy: IPolicy) => {
  // Se respeta el selected article para ambos policies
  const [articleIndex, setArticleIndex] = useState<number>(0);

  //Creamos un estado con el valor del ancho de la pantalla (windowWidth):
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  //Creamos una función que nos re calcula el ancho de la pantalla:
  window.onresize = () => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  };

  return (
    <>
      {windowWidth >= 720 ? (
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
          <div className="global-content">
            <div className="content">
              {policy.articles.map((article: IPolicyArticle, index: number) => (
                <div className="article" key={index}>
                  <div className="article-title" id={`article${index}`}>
                    {article.title}
                  </div>
                  <div className="article-body">{article.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="content-mobile">
          {policy.articles.map((article: IPolicyArticle, index: number) => (
            <div key={index}>
              <Accordion title={article.title} content={article.body} ourWork={false} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
