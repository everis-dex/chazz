import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";

import { IPolicy, IPolicyArticle } from "../../../../interfaces/cms";
import { Accordion, Dropdown } from "../../../shared/index";
import { BodyContent } from "./BodyContent/BodyContent";

import "./Articles.styles.scss";

export const Articles = (policy: IPolicy) => {
  // TODO: Se respeta el selected article para ambos policies
  const [articleIndex, setArticleIndex] = useState<number>(0);

  // Creamos un estado con el valor del ancho de la pantalla (windowWidth):
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Creamos una función que nos re calcula el ancho de la pantalla:
  window.onresize = () => {
    setWindowWidth(window.innerWidth);
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
                  <div className="article-body">
                    <BodyContent body={article.body} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="policy-container">
          <div className="content-mobile">
            <Dropdown content={policy.articles.map(article => article.title)} />
            {/* {policy.articles.map((article: IPolicyArticle, index: number) => {
              const html = ReactDOMServer.renderToString(<BodyContent body={article.body} />);
              return (
                <div key={index}>
                  <Accordion title={article.title} ourWork={false} html={html} />
                </div>
              );
            })} */}
            <div className="global-content">
              <div className="content">
                {policy.articles.map((article: IPolicyArticle, index: number) => (
                  <div className="article" key={index}>
                    <div className="article-title" id={`article${index}`}>
                      {article.title}
                    </div>
                    <div className="article-body">
                      <BodyContent body={article.body} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
