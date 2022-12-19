import React from "react";

import { Project } from "../../../../../interfaces/interfaces";
import { Media } from "../../../../shared/Media/Media";

export const CarrouselSlide = (props: Project) => {
  const style = { width: "300px", height: "500px" };
  // const maxTextLength: number = 10;

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
      <h6>
        {/* {props.keywords.substring(0, maxTextLength)} */}
        {/* {props.keywords.substring(maxTextLength).length > 0 ? "..." : ""} */}
      </h6>
    </>
  );
};
