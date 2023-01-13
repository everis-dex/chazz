import React, { useEffect, useState } from "react";

import { IProject } from "../../../../../interfaces/cms";
import { Media } from "../../../../shared/Media/Media";

import { Link } from "react-router-dom";

interface MediaStyle {
  width: string;
  height: string;
  objectFit: string;
}

export const CarrouselSlide = (props: IProject) => {
  const [mediaStyle, setMediaStyle] = useState<MediaStyle>({ width: "0%", height: "0px", objectFit: "cover" });
  const screenWidth: number = window.innerWidth;

  useEffect(() => {
    if (screenWidth < 768) {
      setMediaStyle({ width: "290px", height: "288px", objectFit: "cover" });
    } else {
      setMediaStyle({ width: "100%", height: "666px", objectFit: "cover" });
    }

    const resizeSlides = () => {
      if (screenWidth < 768) {
        setMediaStyle({ width: "290px", height: "288px", objectFit: "cover" });
      } else {
        setMediaStyle({ width: "100%", height: "666px", objectFit: "cover" });
      }
    };

    window.addEventListener("resize", resizeSlides);

    return () => {
      window.removeEventListener("resize", resizeSlides);
    };
  }, [setMediaStyle, screenWidth]);

  return (
    <>
      <div>
        <Link to="/work">
          <Media src={props.image} style={mediaStyle} alt={props.title} />
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
