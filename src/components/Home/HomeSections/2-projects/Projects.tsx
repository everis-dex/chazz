import React from "react";
import { Link } from "react-router-dom";

import { Carrousel } from "./Carrousel/Carrousel";

import { Container } from "react-bootstrap";
import "./Projects.styles.scss";

export const Projects = () => {
  return (
    <Container fluid={true} className="p-0" id="Projects">
      <Carrousel />
      <Link to={"/work"} className="more-projects">
        More projects →
      </Link>
    </Container>
  );
};
