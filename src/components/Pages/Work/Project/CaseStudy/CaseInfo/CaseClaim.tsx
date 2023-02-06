import React from "react";

import { LineBreakerSelector } from "../../../../../shared/index";

import "../CaseStudy.styles.scss";

type Props = { text: string | undefined; style?: object };

export const CaseClaim = ({ text, style }: Props) => {
  return (
    <>
      {text && (
        <div className="fw-claim" style={style}>
          <h1>
            <LineBreakerSelector typedLines={text} />
          </h1>
        </div>
      )}
    </>
  );
};
