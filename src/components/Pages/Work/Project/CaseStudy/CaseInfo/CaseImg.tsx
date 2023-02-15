import React from "react";

import { LineBreakerSelector } from "../../../../../shared";

import "../CaseStudy.styles.scss";

type Props = { src: string; text?: string; alt?: string; halfColumn?: boolean; margin?: boolean };

export const CaseImg = ({ src, alt = "", text, halfColumn = false, margin = false }: Props) => {
  const style = margin ? { margin: "0 5%" } : {};
  return (
    <>
      {src && (
        <div className="case-img" style={style}>
          <div className="fw-image">
            <img src={src} alt={alt} />
          </div>
          {text && (
            <div className={halfColumn ? "image-half-footer-text" : "image-footer-text"} style={!margin ? style : {}}>
              <LineBreakerSelector typedLines={text} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export const CaseImgWithOverlappedText = ({ src, text }: Props) => {
  return (
    <>
      <div className="fw-image-text" style={{ backgroundImage: `url(${src})` }}>
        {text && (
          <span>
            <LineBreakerSelector typedLines={text} />
          </span>
        )}
      </div>
    </>
  );
};
