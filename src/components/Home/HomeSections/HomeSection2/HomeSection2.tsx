import React from "react";

import { Link } from "react-router-dom";
import { ChazzCarousel } from "./ChazzCarousel/ChazzCarousel";
import { Container } from "react-bootstrap";
import "./HomeSection2.scss";
import { Carrousel } from "./Carrousel/Carrousel";


// import { Project } from "../../../../interfaces/interfaces";

export const HomeSection2 = () => {
  return (
    <Container id="HomeSection2">
      <Carrousel />
      <Link to={"/work"} className="more-projects">More projects</Link>
    </Container>
  );
};
