import React from "react";

import { desktopLineBreakSymbol, mobileLineBreakSymbol } from "../../../constants";
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

  return (
    <>
      <div className="mobile-brokenlines">
        <BrokenLines brokenLines={mobileBrokenLines} lineBreakSymbol={desktopLineBreakSymbol} />
      </div>
      <div className="desktop-brokenlines">
        <BrokenLines brokenLines={desktopBrokenLines} lineBreakSymbol={mobileLineBreakSymbol} />
      </div>
    </>
  );
};
