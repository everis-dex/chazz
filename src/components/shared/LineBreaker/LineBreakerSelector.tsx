import React from "react";

import { desktopLineBreakSymbol, mobileLineBreakSymbol, paragraphSymbol } from '../../../constants';
import { BrokenLines } from "./BrokenLines";

import "./LineBreaker.scss";

type Props = { typedLines?: string };

export const LineBreakerSelector = ({ typedLines }: Props) => {
  var desktopBrokenLines: string[] = [];
  var mobileBrokenLines: string[] = [];

  if (typedLines) {
    desktopBrokenLines = typedLines.split(desktopLineBreakSymbol);
    mobileBrokenLines = typedLines.split(mobileLineBreakSymbol);
  }

  const finalMobileBrokenLines: string[] = [];
  const finalDesktopBrokenLines: string[] = [];

  mobileBrokenLines.map((line) => {
    if (line.includes("#")) {
      const stringToArray = line.split(paragraphSymbol);
      stringToArray.map(element => {
        finalMobileBrokenLines.push(element);
        finalMobileBrokenLines.push("");
      })
    } else {
      finalMobileBrokenLines.push(line);
    }
  });
  desktopBrokenLines.map((line) => {
    if (line.includes("#")) {
      const stringToArray = line.split(paragraphSymbol);
      stringToArray.map(element => {
        finalDesktopBrokenLines.push(element);
        finalDesktopBrokenLines.push("");
      })
    } else {
      finalDesktopBrokenLines.push(line);
    }
  });


  return (
    <>
      <div className="mobile-brokenlines">
        <BrokenLines brokenLines={finalMobileBrokenLines} lineBreakSymbol={desktopLineBreakSymbol} />
      </div>
      <div className="desktop-brokenlines">
        <BrokenLines brokenLines={finalDesktopBrokenLines} lineBreakSymbol={mobileLineBreakSymbol} />
      </div>
    </>
  );
};
