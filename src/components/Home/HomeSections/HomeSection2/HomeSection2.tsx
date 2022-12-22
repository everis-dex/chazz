import React from "react";

import { Link } from "react-router-dom";

import { Carrousel } from "./Carrousel/Carrousel";

import { Container } from "react-bootstrap";
import "./HomeSection2.scss";

export const HomeSection2 = () => {
  return (
    <Container fluid={true} className="p-0" id="HomeSection2">
      <Carrousel />
      <Link to={"/work"} className="more-projects">
        More projects →
      </Link>
    </Container>
  );
};
