import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { IPolicy, IPolicyArticle, IAcordionArticle } from "../../../../interfaces/cms";
import "./Articles.scss";

export const Articles = (policy: IPolicy) => {
  // Se respeta el selected article para ambos policies
  const [articleIndex, setArticleIndex] = useState<number>(0);

  //Creamos un estado con el valor del ancho de la pantalla (windowWidth):
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //Creamos una función que nos re calcula el ancho de la pantalla:
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  //Creamos un efecto para lanzar la función cada vez que detecte un cambio en el ancho del contenido
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

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
          {policy.articles.map((article: IAcordionArticle, index: number) => (
            <div key={index}>
              <Accordion title="hola" content="adios"></Accordion> 
              <h1>{article.body}</h1> <h1>🟣</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
