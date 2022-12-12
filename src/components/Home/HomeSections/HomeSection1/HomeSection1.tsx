import React from "react";
import "./Section1.scss";

import { Col, Row, Container } from "react-bootstrap";
import categories from "../../../../content/categories.json";

import { Category } from "../../../../interfaces/interfaces";

const HomeSection1 = () => {
  return (
    <>
      <Container id="HomeSection1">
        <Row className="section1">
          <Col className="section1-title" xs={12} sm={6}>
            <h2>
              <strong>We humanize complexity. </strong> <br></br>
              Strategy, technology and creativity are our core. Building bridges to link with brands in a society
              centric focused way.
            </h2>
          </Col>

          <Col className="section1-sections" xs={12} sm={6}>
            {categories.map((category: Category, index) => (
              <div key={index}>
                <h2>{category.title}</h2>
                <p>{category.section}</p>
                <p>{category.body}</p>

                <hr></hr>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeSection1;
