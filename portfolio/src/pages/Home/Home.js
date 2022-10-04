import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Form, Button} from 'react-bootstrap';
import 'animate.css';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import Navigationbar from '../../component/Navigationbar';
import Projcards from '../../component/Projcards';

export default function Home(){
    return(
        <>
            <Container>
                <Navigationbar/>
            </Container>

            
            <Container id="intro" className="py-2">
                <Row className="d-flex justify-content-center py-3">
                    <Col 
                        xs={10} md={6} lg={6} xl={6} xxl={6} 
                        className="py-3 pb-4" 
                    >
                        <Row>
                            <h1 className="pl-1 pt-3 animate__animated animate__fadeInDown">
                                Hello. I am <b style={{color: "#00ADB5"}}>Austin</b>! 
                                <br/><b style={{color: "#00ADB5"}}>Developer</b>  based in Singapore.<br/>
                            </h1>

                            <span className="p-0 animate__animated animate__fadeInDown">
                                <b style={{fontSize: "0.8em", opacity: "0.3"}}>Year 3 Computer Science undergraduate at University of London</b><br/><br/>
                            </span>
                        </Row>

                        <Row>
                            <span 
                                className="p-0 animate__animated animate__fadeInDown"
                                style={{width: "96%"}}
                            >
                                Over the past <b style={{color: "#00ADB5"}}>3 years</b>, 
                                I have worked on projects to <b style={{color: "#00ADB5"}}>elevate my skills</b> as a developer.
                                I have also worked on dashboards to help my current employer <b style={{color: "#00ADB5"}}>onboard clients</b> during sales.
                                I believe that I am able to help companies reach their <b style={{color: "#00ADB5"}}>fullest potential and attract new customers</b>.
                            </span>
                        </Row>

                        <Row>
                            <span 
                                className="p-0 pb-3 animate__animated animate__fadeInDown"
                            >
                                <br/><Link style={{color: "#00ADB5"}} to={"/projects"}>View My Projects</Link> 
                                &nbsp; &nbsp; or &nbsp; &nbsp;
                                <Link style={{color: "#00ADB5"}} to={"/aboutme"}>Read About Me</Link>
                            </span>
                        </Row>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center pt-5">
                    <a href="#works" className="d-flex justify-content-center">
                        <FiIcons.FiChevronsDown 
                            className="animate__animated animate__bounce" 
                            style= {{opacity: "0.5", fontSize: "20px"}}
                        />
                    </a>
                </Row>
            </Container>

            <Container id="works" className="py-4">
                <Row>
                    <Col 
                        xs={12} md={12} lg={6} xl={6} xxl={6} 
                        className="d-flex justify-content-center pt-5 animate__animated animate__fadeInDown"
                    >
                        <h1>Selected Projects</h1>
                    </Col>
                </Row>
                
                <Row>
                    <Projcards/>
                </Row>

                <Row>
                    <Col 
                        xs={12} md={12} lg={6} xl={6} xxl={6} 
                        className="d-flex justify-content-center animate__animated animate__fadeInUp"
                    >
                    <h5><Link style={{color: "#00ADB5"}} to={"/projects"}>View My Projects</Link></h5>
                    </Col>
                </Row>
                
                <Row className="pt-3">
                    <a href="#contact" className="d-flex justify-content-center">
                        <FiIcons.FiChevronsDown 
                            className="animate__animated animate__bounce" 
                            style= {{opacity: "0.5", fontSize: "20px"}}
                        />
                    </a>
                </Row>
            </Container>

            <Container id="contact" className="py-4" style={{minHeight: "36rem"}}>
                <Row>
                    <Col 
                        xs={12} md={12} lg={6} xl={6} xxl={6} 
                        className="d-flex justify-content-center pt-5 animate__animated animate__fadeInDown"
                    >
                        <h1>Lets work together</h1>
                    </Col>
                </Row>

                <Row>
                    <Col 
                        xs={12} md={6} lg={6} xl={6} xxl={6} 
                        className="d-flex justify-content-center pt-2 animate__animated animate__fadeInDown"
                    >
                        <Form id="contactForm">
                            <Row>
                                <Col 
                                    xs={12} md={12} lg={6} xl={6} xxl={6}
                                    className="mb-3"
                                >
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label><u>Name</u></Form.Label>
                                            <Form.Control type="name" placeholder="Enter your name" />
                                    </Form.Group>
                                </Col>
                                
                                <Col 
                                    xs={12} md={12} lg={6} xl={6} xxl={6}
                                    className="mb-3"
                                >
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label><u>Email address</u></Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group controlId="formBasicMessage">
                                    <Form.Label><u>Message</u></Form.Label>
                                        <Form.Control as="textarea" placeholder="Enter your message" rows={3}/>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Text className="text-muted d-flex justify-content-center">
                                    I'll never share your email with anyone else.
                                </Form.Text>
                            </Row>

                            <Row>
                                <Col 
                                    xs={12} md={12} lg={12} xl={12} xxl={12}
                                    className="d-flex justify-content-center py-2"
                                >
                                    <Button variant="info" type="submit">
                                        Submit
                                    </Button> &nbsp; &nbsp;
                                    <Button variant="info" onClick={() => (document.getElementById("contactForm").reset())}>
                                        Clear
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                    <Col 
                        xs={12} md={6} lg={6} xl={6} xxl={6} 
                        className="d-flex justify-content-center align-items-center animate__animated animate__fadeInDown"
                        style={{fontSize: "18px"}}
                    >
                        <Row>
                            <Row className="d-flex justify-content-center">
                                <span className="d-flex justify-content-center"><u>Email</u></span>
                                <span className="d-flex justify-content-center pt-2">austinliannn@gmail.com</span>
                            </Row>

                            <Row className="d-flex justify-content-center">
                                <span className="d-flex justify-content-center pt-4"><u>Social Media</u></span>
                                <span className="d-flex justify-content-center pt-2">
                                    {<BsIcons.BsFacebook/>} &nbsp; &nbsp; &nbsp; 
                                    {<BsIcons.BsInstagram/>} &nbsp; &nbsp; &nbsp; 
                                    {<BsIcons.BsLinkedin/>} &nbsp; &nbsp; &nbsp; 
                                    {<BsIcons.BsGithub/>}
                                </span>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}