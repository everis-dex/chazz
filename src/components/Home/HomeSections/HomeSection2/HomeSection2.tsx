import React from "react";

import { Link } from "react-router-dom";

import { ChazzCarousel } from "./ChazzCarousel/ChazzCarousel";

import { Container } from "react-bootstrap";

// import { Project } from "../../../../interfaces/interfaces";

export const HomeSection2 = () => {
  return (
    <Container id="HomeSection2">
      <ChazzCarousel />
      <Link to={"/work"}>More projects</Link>
    </Container>
  );
};
