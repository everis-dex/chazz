import React from "react";

import home from "../../../../content/pages/home.json";

import categories from "../../../../content/categories.json";
import { ICategory, IHomeSection } from "../../../../interfaces/interfaces";
import { LineBreakerSelector } from "../../../shared/LineBreaker/LineBreakerSelector";

import { Col, Container, Row } from "react-bootstrap";
import "./Categories.styles.scss";

export const Categories = () => {
  const style = { fontSize: "40px" };
  const typedSection: IHomeSection = home.categories;

  return (
    <>
      <Container id="Categories">
        <Row className="section1">
          <Col className="section1-title" xs={12} sm={6}>
            <h2>
              <strong>{typedSection.title}</strong> <br></br>
              <LineBreakerSelector typedLines={typedSection.subtitle} />
            </h2>
          </Col>

          <Col className="section1-sections" xs={12} sm={6}>
            {categories.map((category: ICategory, index) => (
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
