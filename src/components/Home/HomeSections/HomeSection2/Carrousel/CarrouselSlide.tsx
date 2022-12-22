import React from "react";

import { Project } from "../../../../../interfaces/interfaces";
import { Media } from "../../../../shared/Media/Media";

export const CarrouselSlide = (props: Project) => {
  const style = { width: "100%", height: "auto", "max-height": "744px" };

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
