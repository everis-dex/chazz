import React, { Fragment } from "react";

import "./LineBreaker.scss";

type Props = {
  brokenLines: string[];
  lineBreakSymbol: string;
};

export const BrokenLines = ({ brokenLines, lineBreakSymbol }: Props) => {
  return (
    <>
      {brokenLines.length > 0 && (
        <h1>
          {brokenLines.map((titleLine: string, index) => (
            <Fragment key={index}>
              {titleLine.replace(lineBreakSymbol, "")}
              <br />
            </Fragment>
          ))}
        </h1>
      )}
    </>
  );
};
