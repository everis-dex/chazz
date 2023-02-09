import React from "react";

import { IPolicyBody } from "../../../../../interfaces/cms";

type Props = { body: IPolicyBody[] };

export const BodyContent = ({ body }: Props) => {
  // Return structure based on body content type

  function bodyType(b: IPolicyBody, index: number) {
    switch (b.type) {
      case "text":
        if (b.content) {
          const paragraphs = b.content.split(/\n/);
          return <>{paragraphs.map((p: string, index: number) => (p !== "" ? <div key={index}>{p}</div> : <br />))}</>;
        }
        break;

      case "table":
        break;

      default:
        return <></>;
    }
  }

  return <>{body.map((body: IPolicyBody, index: number) => bodyType(body, index))}</>;
};
