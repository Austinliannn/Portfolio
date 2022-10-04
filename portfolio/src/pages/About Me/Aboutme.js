import React, { useState } from 'react';
import { Row, Col, Container, Form, Button} from 'react-bootstrap';
import Navigationbar from '../../component/Navigationbar';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import header_pic from '../../assets/head_shot.png';
import css_logo from '../../assets/css.png';
import html_logo from '../../assets/html.png';
import js_logo from '../../assets/js.png';
import react_logo from '../../assets/react.png';
import tailwind_css_logo from '../../assets/tailwind-css.png';
import mongodb_logo from '../../assets/mongodb.png';
import express_logo from '../../assets/express.png';
import nodejs_logo from '../../assets/nodejs.png';

export default function Aboutme(){

    const [mouseHoverJS, setMouseHoverJS] = useState(false);
    const [mouseHoverHTML, setMouseHoverHTML] = useState(false);
    const [mouseHoverCSS, setMouseHoverCSS] = useState(false);
    const [mouseHoverTWCSS, setMouseHoverTWCSS] = useState(false);
    const [mouseHoverMGDB, setMouseHoverMGDB] = useState(false);
    const [mouseHoverEX, setMouseHoverEX] = useState(false);
    const [mouseHoverRE, setMouseHoverRE] = useState(false);
    const [mouseHoverNJS, setMouseHoverNJS] = useState(false);

    return(
        <>
            <Container>
                <Navigationbar/>
            </Container>

            <Container id="intro" className="py-2">
                <Row className="animate__animated animate__fadeInRight">
                    <Col xs={12} md={12} lg={10} xl={10} xxl={10}>
                        <h1 className="d-flex justify-content-end"><u>About Me</u></h1>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col 
                        xs={11} md={11} lg={5} xl={5} xxl={5} 
                        className="d-flex justify-content-center align-items-center pt-3 pb-4"
                    >
                        <img 
                            className="animate__animated animate__fadeIn"
                            src={header_pic}
                            style= {{borderRadius: "40px", width: "58%"}}
                        />
                    </Col>

                    <Col 
                        xs={10} md={10} lg={5} xl={5} xxl={5} 
                        className="d-flex justify-content-center align-items-center py-4" 
                    >
                        <Row className="d-flex justify-content-center animate__animated animate__fadeInRight">
                            <span className="p-0">
                                At the <b style={{color: "#00ADB5"}}>age of 16</b>, I was exposed to my first programming langauge which was C++.  
                                At that time, I was introduced to robotics which sparked my <b style={{color: "#00ADB5"}}>interest for coding and solving problems</b>.
                                In the next few years, I have been <b style={{color: "#00ADB5"}}>exploring and learning</b> about different langauges such as JavaScript, HTML, CSS, Python, etc.
                            </span> <br/>

                            <span className="p-0">
                                <b style={{color: "#00ADB5"}}>10 years</b> later, I'm a <b style={{color: "#00ADB5"}}>developer</b> who is
                                <b style={{color: "#00ADB5"}}> passionate</b> about <b style={{color: "#00ADB5"}}>developing & building</b> amazing web applications with 
                                <b style={{color: "#00ADB5"}}> modern libraries and frameworks</b>.
                            </span>
                        </Row>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center py-5">
                    <a href="#skills" className="d-flex justify-content-center">
                        <FiIcons.FiChevronsDown 
                            className="animate__animated animate__bounce" 
                            style= {{opacity: "0.5", fontSize: "20px"}}
                        />
                    </a>
                </Row>
            </Container>

            <Container id="skills" className="d-flex justify-content-center align-items-center py-4">
                <Col 
                    className="pt-5"
                    xs={12} md={12} lg={8} xl={8} xxl={8}
                >   
                    <Row>
                        <Row>
                            <h1 className="d-flex justify-content-center animate__animated animate__fadeInDown">
                                <u>Professional Skills</u>  
                            </h1>
                        </Row>

                        <Row className="pb-3 pt-4 animate__animated animate__fadeIn">
                            <Col 
                                xs={4} md={4} lg={4} xl={4} xxl={4} 
                                className="d-flex justify-content-center align-items-center"  
                            >
                                <img 
                                    className={(mouseHoverJS) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={js_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverJS(!mouseHoverJS))}
                                    onMouseOut={()=>(setMouseHoverJS(!mouseHoverJS))}
                                />
                            </Col>

                            <Col 
                                xs={4} md={4} lg={4} xl={4} xxl={4} 
                                className="d-flex justify-content-center align-items-center"  
                            >
                                <img 
                                    className={(mouseHoverHTML) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={html_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverHTML(!mouseHoverHTML))}
                                    onMouseOut={()=>(setMouseHoverHTML(!mouseHoverHTML))}
                                />
                            </Col>

                            <Col 
                                xs={4} md={4} lg={4} xl={4} xxl={4} 
                                className="d-flex justify-content-center align-items-center "  
                            >
                                <img 
                                    className={(mouseHoverCSS) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={css_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverCSS(!mouseHoverCSS))}
                                    onMouseOut={()=>(setMouseHoverCSS(!mouseHoverCSS))}
                                />
                            </Col>
                        </Row>

                        <Row className="py-3 animate__animated animate__fadeIn">
                            <Col 
                                xs={4} md={4} lg={4} xl={4} xxl={4} 
                                className="d-flex justify-content-center align-items-center"  
                            >
                                <img 
                                    className={(mouseHoverTWCSS) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={tailwind_css_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverTWCSS(!mouseHoverTWCSS))}
                                    onMouseOut={()=>(setMouseHoverTWCSS(!mouseHoverTWCSS))}
                                />
                            </Col>
                        
                            <Col 
                                xs={4} md={4} lg={4} xl={4} xxl={4}  
                                className="d-flex justify-content-center align-items-center"  
                            >
                                <img 
                                    className={(mouseHoverMGDB) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={mongodb_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverMGDB(!mouseHoverMGDB))}
                                    onMouseOut={()=>(setMouseHoverMGDB(!mouseHoverMGDB))}
                                />
                            </Col>

                            <Col 
                                xs={4} md={4} lg={4} xl={4} xxl={4} 
                                className="d-flex justify-content-center align-items-center"  
                            >
                                <img 
                                    className={(mouseHoverEX) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={express_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverEX(!mouseHoverEX))}
                                    onMouseOut={()=>(setMouseHoverEX(!mouseHoverEX))}
                                />
                            </Col>
                        </Row>

                        <Row className="pb-4 pt-3 animate__animated animate__fadeIn">
                            <Col 
                                xs={4} md={4} lg={4} xl={4} xxl={4}  
                                className="d-flex justify-content-center align-items-center"  
                            >
                                <img 
                                    className={(mouseHoverRE) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={react_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverRE(!mouseHoverRE))}
                                    onMouseOut={()=>(setMouseHoverRE(!mouseHoverRE))}
                                />
                            </Col>

                            <Col 
                                xs={4} md={4} lg={4} xl={4} xxl={4} 
                                className="d-flex justify-content-center align-items-center"  
                            >
                                <img 
                                    className={(mouseHoverNJS) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={nodejs_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverNJS(!mouseHoverNJS))}
                                    onMouseOut={()=>(setMouseHoverNJS(!mouseHoverNJS))}
                                />
                            </Col>
                        </Row>
                    </Row>

                    <Row className="d-flex justify-content-center py-1">
                        <a href="#contact" className="d-flex justify-content-center">
                            <FiIcons.FiChevronsDown 
                                className="animate__animated animate__bounce" 
                                style= {{opacity: "0.5", fontSize: "20px"}}
                            />
                        </a>
                    </Row>
                </Col>
            </Container>

            <Container id="contact" className="pt-4 pb-4" style={{minHeight: "36rem"}}>
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