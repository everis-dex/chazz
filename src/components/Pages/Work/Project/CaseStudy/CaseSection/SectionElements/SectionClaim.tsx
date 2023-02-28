import React from "react";

import { LineBreakerSelector } from "../../../../../../shared/index";

type Props = { text: string; margin?: boolean };

export const SectionClaim = ({ text, margin = false }: Props) => {
  const style = margin ? { width: "85%", margin: "auto" } : {};

  return (
    <>
      {text && (
        <div className="fw-claim" style={style} data-aos="fade-up" data-aos-once="false">
          <h1>
            <LineBreakerSelector typedLines={text} />
          </h1>
        </div>
      )}
    </>
  );
};
