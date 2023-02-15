import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IProject } from "../../../../../interfaces/cms";
import { Media } from "../../../../shared/index";

interface MediaStyle {
  width: string;
  height: string;
  objectFit: string;
  cursor: string;
}

export const CarouselSlide = (project: IProject) => {
  const [mediaStyle, setMediaStyle] = useState<MediaStyle>();
  const screenWidth: number = window.innerWidth;

  useEffect(() => {
    const pointerURL = window.location.origin + "/uploads/drag-pointer.svg";
    const commonProps = {
      objectFit: "cover",
      cursor: `url(${pointerURL}), auto`
    };

    function resizeSlides(): void {
      const smallScreen = { width: "100%", height: "288px" };
      const largeScreen = { width: "100%", height: "666px" };

      const selectedStyles = screenWidth < 768 ? smallScreen : largeScreen;
      setMediaStyle({ ...commonProps, ...selectedStyles });
    }
    resizeSlides();
    window.addEventListener("resize", resizeSlides);

    return () => {
      window.removeEventListener("resize", resizeSlides);
    };
  }, [setMediaStyle, screenWidth]);

  return (
    <>
      <Link to="/work">
        <Media
          src={project.details.media.carousel}
          style={mediaStyle || { width: "0px", height: "auto" }}
          alt={project.title}
        />
      </Link>
      <p className="title">
        <strong>{project.title}</strong> — {project.details.description}
      </p>
      <p className="properties">{project.details.subtitle}</p>
    </>
  );
};
