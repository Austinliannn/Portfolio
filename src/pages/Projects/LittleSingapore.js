import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as BiIcons from 'react-icons/bi';
import Contact from '../../component/Contact';

export default function LittleSingapore() {

    const [onHover, setOnHover] = useState(false);

    return (
        <>
            <Container id="intro" className="pb-2">
                <Row className="d-flex justify-content-center">
                    <Row>
                        <h1 className="d-flex justify-content-end animate__animated animate__fadeInRight">
                            <u>LittleSingapore</u>
                        </h1>
                    </Row>
                </Row>
            </Container>

            <Container id="contact" className="d-flex justify-content-center align-items-center pt-4" style={{minHeight: "32rem"}}>
                <Contact/>
            </Container>

            <Container className="py-4">
                <a href="#" className="d-flex justify-content-end">
                    <BiIcons.BiArrowToTop 
                        className={(onHover) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                        style={{fontSize: "1.6em", color: "white", backgroundColor: "#393E46", borderRadius: "15px"}}
                        onMouseOver={()=>(setOnHover(true))}
                        onMouseOut={()=>(setOnHover(false))}
                    />
                </a>
            </Container>
        </>
    );
}