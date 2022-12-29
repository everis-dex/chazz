import React from "react";
import { Link } from "react-router-dom";

import { Carrousel } from "./Carrousel/Carrousel";

import { IHomeProjects } from "../../../../interfaces/interfaces";

import { Container } from "react-bootstrap";
import "./Projects.styles.scss";

export const Projects = (projectData: IHomeProjects) => {
  return (
    <Container fluid={true} className="p-0" id="Projects">
      <Carrousel title={projectData.title} />
      <Link to={"/work"} className="more-projects">
        {projectData.more} →
      </Link>
    </Container>
  );
};
