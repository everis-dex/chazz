import React from "react";

import { LineBreakerSelector } from "../../../../../../shared/index";
import { SectionImage } from "./SectionImage";

type Props = {
  title?: string;
  text?: string;
  empty?: boolean;
  position: string;
  src?: string;
  caption?: string;
};

export const SectionColumn = ({ title, text, empty = false, position, src, caption }: Props) => {
  const columnPosition = empty ? `section-${position}-column-empty` : `section-${position}-column`;

  return (
    <>
      {!empty ? (
        src ? (
          <div className={columnPosition}>
            <SectionImage src={src} alt="img-column" text={caption} halfColumn />
          </div>
        ) : (
          <div className={columnPosition} data-aos="fade-up" data-aos-once="false">
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
