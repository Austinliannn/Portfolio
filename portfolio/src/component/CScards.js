import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function CScards(){
    return(
        <>
            <Row className="py-2">
                <Col className="d-flex justify-content-center"> 
                    <Card style={{width: "78%"}}>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={5} lg={5} xl={5} xxl={5}>
                                    This is another text from something else
                                </Col>

                                <Col xs={12} md={5} lg={5} xl={5} xxl={5}>
                                    This is some text within a card body
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}