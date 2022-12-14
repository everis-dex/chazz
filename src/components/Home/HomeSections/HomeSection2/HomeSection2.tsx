import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Carrousel } from "./Carrousel/Carrousel";

// import { Project } from "../../../../interfaces/interfaces";

export const HomeSection2 = () => {
  return (
    <Container id="HomeSection2">
      <Carrousel />
      <Link to={"/work"}>More projects</Link>
    </Container>
  );
};
