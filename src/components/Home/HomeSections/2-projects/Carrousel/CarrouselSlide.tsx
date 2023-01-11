import React, { useState, useEffect } from "react";

import { IProject } from "../../../../../interfaces/cms";
import { Media } from "../../../../shared/Media/Media";

interface MediaStyle {
  width: string,
  height: string;
  objectFit: string;
}

export const CarrouselSlide = (props: IProject) => {

  const [mediaStyle, setMediaStyle] = useState<MediaStyle>({ width: "0%", height: "0px", objectFit: "cover" });
  const screenWidth: number = window.innerWidth;

  const chooseAndSetMediaStyle = () => {
    setMediaStyle(
      screenWidth >= 1280
        // ? { width: "100%", height: "744px", objectFit: "cover" }
        ? { width: "100%", height: "90vh", objectFit: "cover" }
        :
        { width: "100%", height: "544px", objectFit: "cover" }
    )
  }

  useEffect(() => {
    chooseAndSetMediaStyle();

    const resizeSlides = () => {
      chooseAndSetMediaStyle();
    };

    window.addEventListener('resize', resizeSlides);

    return () => {
      window.removeEventListener('resize', resizeSlides);
    };
  },);



  return (
    <>
      <div>
        <Media src={props.image} style={mediaStyle} alt={props.title} />
        <br />
      </div>
      <p className="title">
        <strong>{props.title}</strong> — {props.description}
      </p>
      <p className="properties">{props.subtitle}</p>
    </>
  );
};
