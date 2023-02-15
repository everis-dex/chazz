import React from "react";

import { LineBreakerSelector } from "../../../../../shared/index";
import { CaseImg } from "./CaseImg";

import "../CaseStudy.styles.scss";

type Props = {
  title?: string;
  text?: string;
  empty?: boolean;
  position: string;
  src?: string;
  caption?: string;
};

export const CaseSectionColumn = ({ title, text, empty = false, position, src, caption }: Props) => {
  const columnPosition = empty ? `section-${position}-column-empty` : `section-${position}-column`;
  const style = position === "left" ? { marginRight: "5%" } : {};

  return (
    <>
      {!empty ? (
        src ? (
          <div className={columnPosition} style={style}>
            <CaseImg src={src} alt="img-column" text={caption} halfColumn />
          </div>
        ) : (
          <div className={columnPosition}>
            {title && (
              <h3>
                <LineBreakerSelector typedLines={title} />
              </h3>
            )}
            {text && <LineBreakerSelector typedLines={text} />}
          </div>
        )
      ) : (
        <div className={columnPosition}></div>
      )}
    </>
  );
};
