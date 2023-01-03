import React, { Fragment } from "react";

import "./LineBreaker.scss";

type Props = {
  brokenLines: string[];
  uselessLineBreakSymbol: string;
};

export const BrokenLines = ({ brokenLines, uselessLineBreakSymbol }: Props) => {
  return (
    <>
      {brokenLines && (
        <h1>
          {brokenLines &&
            brokenLines.map((titleLine: string, index) => (
              <Fragment key={index}>
                {titleLine.replace(uselessLineBreakSymbol, "")}
                <br />
              </Fragment>
            ))}
        </h1>
      )}
    </>
  );
};
