import React from "react";

import { Project } from "../../../../../interfaces/interfaces";
import { Media } from "../../../../shared/Media/Media";

export const CarrouselSlide = (props: Project) => {
  const style = { width: "331px", height: "428px" };

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
