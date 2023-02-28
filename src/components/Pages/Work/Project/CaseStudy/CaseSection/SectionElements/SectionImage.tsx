import React from "react";

import { LineBreakerSelector } from "../../../../../../shared";

type Props = { src: string; text?: string; alt?: string; halfColumn?: boolean; margin?: boolean };

export const SectionImage = ({ src, alt = "", text, halfColumn = false, margin = false }: Props) => {
  const style = margin ? { margin: "0 5%" } : {};
  return (
    <>
      {src && (
        <div className="case-img" style={style}>
          <div className="fw-image" data-aos="fade-up" data-aos-once="false">
            <img src={src} alt={alt} />
          </div>
          {text && (
            <div
              className={halfColumn ? "image-half-footer-text" : "image-footer-text"}
              style={!margin ? style : {}}
              data-aos="fade-up"
              data-aos-once="false"
            >
              <LineBreakerSelector typedLines={text} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export const SectionImageWithOverlappedText = ({ src, text }: Props) => {
  return (
    <>
      <div
        className="fw-image-text"
        style={{ backgroundImage: `url(${src})` }}
        data-aos="fade-up"
        data-aos-once="false"
      >
        {text && (
          <span>
            <LineBreakerSelector typedLines={text} />
          </span>
        )}
      </div>
    </>
  );
};
