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
  const [mediaStyle, setMediaStyle] = useState<MediaStyle>();
  const screenWidth: number = window.innerWidth;

  useEffect(() => {
    const commonProps = {
      objectFit: "cover",
      cursor: "url(http://localhost:3000/static/media/drag-pointer.d634b53df533d800a44b.svg), auto"
    };

    const resizeSlides = () => {
      const smallScreen = { width: "290px", height: "288px" };
      const largeScreen = { width: "100%", height: "666px" };

      const selectedStyles = screenWidth < 768 ? smallScreen : largeScreen;
      setMediaStyle({ ...commonProps, ...selectedStyles });
    };
    resizeSlides();
    window.addEventListener("resize", resizeSlides);

    return () => {
      window.removeEventListener("resize", resizeSlides);
    };
  }, [setMediaStyle, screenWidth]);

  return (
    <>
      <div>
        <Link to="/work">
          <Media src={props.media.carrousel} style={mediaStyle || { width: "0px", height: "auto" }} alt={props.title} />
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
