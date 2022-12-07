import React from "react";
import "./Section1.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import categories from "./../../../../content/categories.json";

const HomeSection1 = () => {
  return (
    <>
      <Container id="HomeSection1">
        <Row className="weare">
          <Col className="weare-title" xs={12} sm={6}>
            <h2>
              <strong>We humanize complexity. </strong> <br></br>
              Strategy, technology and creativity are our core. Building bridges
              to link with brands in a society centric focused way.
            </h2>
          </Col>

          <Col className="weare-sections" xs={12} sm={6}>
            {categories.map((category, index) => (
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