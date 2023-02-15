import React from "react";

import { LineBreakerSelector } from "../../../../../shared/index";
import { CaseImg } from "./CaseImg";

import "../CaseStudy.styles.scss";

type Props = {
  title?: string;
  text?: string;
  empty?: boolean;
  position: string;
  image?: string;
};

export const CaseSectionColumn = ({ title, text, empty = false, position, image }: Props) => {
  const columnPosition = empty ? `section-${position}-column-empty` : `section-${position}-column`;
  const style = position === "left" ? { paddingRight: "5%" } : {};

  return (
    <>
      {!empty ? (
        image ? (
          <div className={columnPosition}>
            <CaseImg src={image} alt="img-column" text={text} halfColumn />
          </div>
        ) : (
          <div className={columnPosition} style={style}>
            {title && <h3>{title}</h3>}
            {text && <LineBreakerSelector typedLines={text} />}
          </div>
        )
      ) : (
        <div className={columnPosition}></div>
      )}
    </>
  );
};
