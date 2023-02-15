import React from "react";

import { LineBreakerSelector } from "../../../../../shared/index";

import "../CaseStudy.styles.scss";

type Props = { text: string; margin?: boolean };

export const CaseClaim = ({ text, margin }: Props) => {
  const style = margin ? { width: "85%", margin: "auto" } : {};

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
