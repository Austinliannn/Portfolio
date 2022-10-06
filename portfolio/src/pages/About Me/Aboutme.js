import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import header_pic from '../../assets/head_shot.png';
import css_logo from '../../assets/css.png';
import html_logo from '../../assets/html.png';
import js_logo from '../../assets/js.png';
import react_logo from '../../assets/react.png';
import tailwind_css_logo from '../../assets/tailwind-css.png';
import mongodb_logo from '../../assets/mongodb.png';
import express_logo from '../../assets/express.png';
import nodejs_logo from '../../assets/nodejs.png';
import Contact from '../../component/Contact';

export default function Aboutme(){

    const [mouseHoverJS, setMouseHoverJS] = useState(false);
    const [mouseHoverHTML, setMouseHoverHTML] = useState(false);
    const [mouseHoverCSS, setMouseHoverCSS] = useState(false);
    const [mouseHoverTWCSS, setMouseHoverTWCSS] = useState(false);
    const [mouseHoverMGDB, setMouseHoverMGDB] = useState(false);
    const [mouseHoverEX, setMouseHoverEX] = useState(false);
    const [mouseHoverRE, setMouseHoverRE] = useState(false);
    const [mouseHoverNJS, setMouseHoverNJS] = useState(false);
    const [onHover, setOnHover] = useState(false);

    return(
        <>
            <Container id="intro" className="pb-2">
                <Row className="animate__animated animate__fadeInRight">
                    <Col xs={12} md={12} lg={10} xl={10} xxl={10}>
                        <h1 className="d-flex justify-content-end"><u>About Me</u></h1>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col xs={11} md={11} lg={5} xl={5} xxl={5} className="d-flex justify-content-center align-items-center pt-3 pb-4">
                        <img 
                            className="animate__animated animate__fadeIn"
                            src={header_pic}
                            style= {{borderRadius: "40px", width: "58%"}}
                        />
                    </Col>

                    <Col xs={10} md={10} lg={5} xl={5} xxl={5} className="d-flex justify-content-center align-items-center py-4">
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
                        <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                    </a>
                </Row>
            </Container>

            <Container id="skills" className="d-flex justify-content-center align-items-center py-4">
                <Col xs={12} md={12} lg={8} xl={8} xxl={8} className="pt-5">   
                    <Row>
                        <Row>
                            <h1 className="d-flex justify-content-center animate__animated animate__fadeInDown">
                                <u>Professional Skills</u>  
                            </h1>
                        </Row>

                        <Row className="pb-3 pt-4 animate__animated animate__fadeIn">
                            <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
                                <img 
                                    className={(mouseHoverJS) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={js_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverJS(!mouseHoverJS))}
                                    onMouseOut={()=>(setMouseHoverJS(!mouseHoverJS))}
                                />
                            </Col>

                            <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
                                <img 
                                    className={(mouseHoverHTML) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={html_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverHTML(!mouseHoverHTML))}
                                    onMouseOut={()=>(setMouseHoverHTML(!mouseHoverHTML))}
                                />
                            </Col>

                            <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
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
                            <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
                                <img 
                                    className={(mouseHoverTWCSS) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={tailwind_css_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverTWCSS(!mouseHoverTWCSS))}
                                    onMouseOut={()=>(setMouseHoverTWCSS(!mouseHoverTWCSS))}
                                />
                            </Col>
                        
                            <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
                                <img 
                                    className={(mouseHoverMGDB) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={mongodb_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverMGDB(!mouseHoverMGDB))}
                                    onMouseOut={()=>(setMouseHoverMGDB(!mouseHoverMGDB))}
                                />
                            </Col>

                            <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
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
                            <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
                                <img 
                                    className={(mouseHoverRE) ? "animate__animated animate__heartBeat" : "animate__animated animate__pulse"}
                                    src={react_logo}
                                    style= {{width: "42%"}}
                                    onMouseOver={()=>(setMouseHoverRE(!mouseHoverRE))}
                                    onMouseOut={()=>(setMouseHoverRE(!mouseHoverRE))}
                                />
                            </Col>

                            <Col xs={4} md={4} lg={4} xl={4} xxl={4} className="d-flex justify-content-center align-items-center">
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
                            <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                        </a>
                    </Row>
                </Col>
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