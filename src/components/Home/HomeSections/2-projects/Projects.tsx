import React from "react";
import { Link } from "react-router-dom";

import { Carrousel } from "./Carrousel/Carrousel";

import home from "../../../../content/pages/pages--home.json";
import { IHomeProjects } from "../../../../interfaces/interfaces";

import { Container } from "react-bootstrap";
import "./Projects.styles.scss";

export const Projects = () => {
  const typedProjects: IHomeProjects = home.projects;

  return (
    <Container fluid={true} className="p-0" id="Projects">
      <Carrousel title={typedProjects.title} />
      <Link to={"/work"} className="more-projects">
        {typedProjects.more} →
      </Link>
    </Container>
  );
};
