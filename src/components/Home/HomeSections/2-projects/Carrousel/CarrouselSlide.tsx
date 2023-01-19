import React, { useEffect, useState } from "react";

import { IProject } from "../../../../../interfaces/cms";
import { Media } from "../../../../shared/index";

import { Link } from "react-router-dom";

interface MediaStyle {
  width: string;
  height: string;
  objectFit: string;
  cursor: string;
}

export const CarrouselSlide = (props: IProject) => {
  const [mediaStyle, setMediaStyle] = useState<MediaStyle>({
    width: "0%",
    height: "0px",
    objectFit: "cover",
    cursor: "url(http://localhost:3000/static/media/drag-pointer.d634b53df533d800a44b.svg), auto"
  });
  const screenWidth: number = window.innerWidth;

  useEffect(() => {
    const resizeSlides = () => {
      if (screenWidth < 768) {
        setMediaStyle({ ...mediaStyle, ...{ width: "290px", height: "288px" } });
      } else {
        setMediaStyle({ ...mediaStyle, ...{ width: "100%", height: "666px" } });
      }
    };
    resizeSlides();

    window.addEventListener("resize", resizeSlides);

    return () => window.removeEventListener("resize", resizeSlides);
  }, [setMediaStyle, screenWidth, mediaStyle]);

  return (
    <>
      <div>
        <Link to="/work">
          <Media src={props.media.carrousel} style={mediaStyle} alt={props.title} />
        </Link>
        <br />
      </div>
      <p className="title">
        <strong>{props.title}</strong> — {props.description}
      </p>
      <p className="properties">{props.subtitle}</p>
    </>
  );
};
