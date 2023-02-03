import React from "react";

import { LineBreakerSelector } from "../../../../../shared";

import "../CaseStudy.styles.scss";

type Props = { src: string; text?: string; alt?: string; halfColumn?: boolean };

export const CaseImg = ({ src, alt, text, halfColumn = false }: Props) => {
  return (
    <>
      <div className="fw-image">
        <img src={src} alt={alt} />
      </div>
      {text && (
        <div className={halfColumn ? "image-half-footer-text" : "image-footer-text"}>
          <LineBreakerSelector typedLines={text}></LineBreakerSelector>
        </div>
      )}
    </>
  );
};

export const CaseImgWithOverlappedText = ({ src, alt, text }: Props) => {
  return (
    <>
      <div className="fw-image-text" style={{ backgroundImage: `url(${src})` }}>
        {/* <img src={src} alt={alt} /> */}
        {text && (
          <span>
            <LineBreakerSelector typedLines={text}></LineBreakerSelector>
          </span>
        )}
      </div>
    </>
  );
};
