import React from "react";
import "./LineBreaker.scss";

type Props = {
  brokenLines: string[];
  lineBreakSymbol: string;
  paragraphs: string[];
};

export const BrokenLines = ({ brokenLines, lineBreakSymbol, paragraphs }: Props) => {
  return (
    <>
      {/* {paragraphs.length > 0 && (
        <>
          {paragraphs.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph.replace(LineParagraphSymbol, "")}</p>
          ))}
        </>
      )} */}
      {brokenLines.length > 0 && (
        <h1>
          {brokenLines.map((titleLine: string, index: number) => (
            <React.Fragment key={index}>
              {titleLine.replace(lineBreakSymbol, "")}
              <br />
            </React.Fragment>
          ))}
        </h1>
      )}
    </>
  );
};
