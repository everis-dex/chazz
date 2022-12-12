import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import ChazzCarousel from "../../../shared/ChazzCarousel/ChazzCarousel";

// import { Project } from "../../../../interfaces/interfaces";

const HomeSection2 = () => {
  return (
    <Container id="HomeSection2">
      <ChazzCarousel />
      <Link to={"/work"}>More projects</Link>
    </Container>
  );
};

export default HomeSection2;
