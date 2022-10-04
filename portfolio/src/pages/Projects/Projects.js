import React from 'react';
import { Row, Col, Container, Form, Button} from 'react-bootstrap';
import Navigationbar from '../../component/Navigationbar';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export default function Projects(){
    return(
        <>
            <Container>
                <Navigationbar/>
            </Container>

            <Container id="webdev" className="d-flex justify-content-center py-2">
                <Col xs={12} md={12} lg={10} xl={10} xxl={10}>
                    <Row className="d-flex justify-content-center">
                        <Row>
                            <h1 className="d-flex justify-content-end animate__animated animate__fadeInRight">
                                <u>Past Projects</u>
                            </h1>
                        </Row>

                        <Row>
                            <h3 className="animate__animated animate__fadeInLeft">
                                Programming with JS, HTML, CSS...
                            </h3>
                            
                        </Row>
                    </Row>
                </Col>
            </Container>
        </>
    );
}