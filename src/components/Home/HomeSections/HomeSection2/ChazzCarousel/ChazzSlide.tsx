import React from "react";

import { Project } from "../../../../../interfaces/interfaces";

export const ChazzSlide = (props: Project) => {
  return (
    <>
      <div>
        <img src={props.image} width={300} height={500} alt={props.title} />
        <br />
      </div>
      <h2>{props.title}</h2>
      <h4>{props.subtitle}</h4>
    </>
  );
};
