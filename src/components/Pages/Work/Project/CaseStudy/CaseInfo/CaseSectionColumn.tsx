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
  id?: string;
};

export const CaseSectionColumn = ({ title, text, empty = false, position, image, id }: Props) => {
  const columnPosition = empty ? `section-${position}-column-empty` : `section-${position}-column`;

  return (
    <>
      {!empty ? (
        image ? (
          <div className={columnPosition} id={id}>
            <CaseImg src={image} alt="img-column" text={text} halfColumn />
          </div>
        ) : (
          <div className={columnPosition}>
            {title && <h3>{title}</h3>}
            <LineBreakerSelector typedLines={text} />
          </div>
        )
      ) : (
        <div className={columnPosition}></div>
      )}
    </>
  );
};