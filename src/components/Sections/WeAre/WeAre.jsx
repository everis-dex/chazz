import React from "react";
import './WeAre.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const WeAre = () => {

    return (
        <>
            <Container>
                <Row className="weare">
                    <Col className="weare-title" xs={12} sm={6}> 
                        <h2>
                            <strong>We humanize complexity. </strong> <br></br>
                            Strategy, technology and creativity are our core. 
                            Building bridges to link with brands in a society centric focused way.
                        </h2>
                    </Col>

                    <Col className="weare-sections" xs={12} sm={6}>
                        <h2>Create</h2>
                        <p>Strategy & Design</p>
                        <p>
                            Deep exploring to design and rethink brands, 
                            services and business models, 
                            inspired by people and environment needs.
                        </p>

                        <hr></hr>

                        <h2>Growth</h2>
                        <p>Digital Marketing & Sales</p>
                        <p>
                            Connecting with audiences at the right moment, 
                            with the right message, 
                            merging strategy and technology driving sales organically.
                        </p>

                        <hr></hr>

                        <h2>Engage</h2>
                        <p>Customer Experience & Loyalty</p>
                        <p>
                            Opening debates with users and audiences in order to be 
                            an active and relevant part of society.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WeAre;