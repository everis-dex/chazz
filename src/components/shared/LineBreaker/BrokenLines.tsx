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
        <>
          {brokenLines.map((titleLine: string, index: number) => (
            <Fragment key={index}>
              {titleLine.replace(new RegExp(`\\${lineBreakSymbol}`, "g"), "")}
              <br />
            </Fragment>
          ))}
        </>
      )}
    </>
  );
};
