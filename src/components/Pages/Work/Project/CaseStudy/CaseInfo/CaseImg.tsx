import React from "react";

import { LineBreakerSelector } from "../../../../../shared";

import "../CaseStudy.styles.scss";

type Props = { src: string; text?: string; alt?: string };

export const CaseImg = ({ src, alt, text }: Props) => {
  return (
    <>
      <div className="fw-image">
        <img src={src} alt={alt} />
      </div>
      {text && (
        <div className="image-footer-text">
          <LineBreakerSelector typedLines={text}></LineBreakerSelector>
        </div>
      )}
    </>
  );
};

export const CaseImgWithOverlappedText = ({ src, alt, text }: Props) => {
  return (
    <>
      <div className="fw-image-text">
        <img src={src} alt={alt} />
        {text && (
          <div className="img-text-container">
            <span>
              <LineBreakerSelector typedLines={text}></LineBreakerSelector>
            </span>
          </div>
        )}
      </div>
    </>
  );
};
