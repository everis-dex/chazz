import React from "react";

import { IProject } from "../../../../../interfaces/cms";
import { Media } from "../../../../shared/Media/Media";

export const CarrouselSlide = (props: IProject) => {
  const style = { width: "100%", height: "auto", maxHeight: "744px", objectFit: "cover" };

  return (
    <>
      <div>
        <Media src={props.image} style={style} alt={props.title} />
        <br />
      </div>
      <p className="title">
        <strong>{props.title}</strong> — {props.description}
      </p>
      <p className="properties">{props.subtitle}</p>
    </>
  );
};
