import React from "react";

import { Project } from "../../../../../interfaces/interfaces";
import { Media } from "../../../../shared/Media/Media";

export const CarrouselSlide = (props: Project) => {
  const style = { width: 300, height: 500 };
  return (
    <>
      <div>
        <Media src={props.image} style={style} alt={props.title} />
        <br />
      </div>
      <h2>{props.title}</h2>
      <h4>{props.subtitle}</h4>
    </>
  );
};
