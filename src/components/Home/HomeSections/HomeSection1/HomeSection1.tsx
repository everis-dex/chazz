import React from "react";

import homeIntro from "../../../../content/homeintro.json";

import categories from "../../../../content/categories.json";
import { Category, HomeIntro } from "../../../../interfaces/interfaces";

import { Col, Container, Row } from "react-bootstrap";
import "./Section1.scss";

export const HomeSection1 = () => {
  const style = { fontSize: "40px" };
  const typedHomeIntro: HomeIntro = homeIntro[0];

  return (
    <>
      <Container id="HomeSection1">
        <Row className="section1">
          <Col className="section1-title" xs={12} sm={6}>
            <h2>
              <strong>{typedHomeIntro.title}</strong> <br></br>
              {typedHomeIntro.subtitle}
            </h2>
          </Col>

          <Col className="section1-sections" xs={12} sm={6}>
            {categories.map((category: Category, index) => (
              <div key={index}>
                {category.title && <h2 style={style}>{category.title}</h2>}
                {category.section && <p>{category.section}</p>}
                {category.body && <p>{category.body}</p>}
                <hr></hr>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};