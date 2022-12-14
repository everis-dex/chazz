import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './AppFooter.scss'

export const AppFooter = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="section1-title" xs={12} sm={4} lg={4}>
            <h6>an NTT Data Company</h6>
            </Col>
            <Col>
              <Row>
                <Col xs={12} sm={6} lg={3}>
                  <a>©Chazz 2022</a>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                  <a>Privacy Policy</a>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                  <a>Cookie Policy</a>
                </Col>

                <Col xs={12} sm={6} lg={3}>
                  <a>Cookie Settings</a> 
                </Col>
              </Row>
              
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
