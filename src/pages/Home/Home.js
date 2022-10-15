import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import 'animate.css';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';
import SelectedCards from '../../component/SelectedCards';
import Contact from '../../component/Contact';

export default function Home(){

    const [onHover, setOnHover] = useState(false);

    return(
        <>           
            <Container id="intro" className="pb-2">
                <Row className="d-flex justify-content-center py-3">
                    <Col xs={10} md={6} lg={6} xl={6} xxl={6} className="py-3 pb-4">
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
                            <span className="p-0 animate__animated animate__fadeInDown" style={{width: "96%"}}>
                                Over the past <b style={{color: "#00ADB5"}}>3 years</b>, 
                                I have worked on projects to <b style={{color: "#00ADB5"}}>elevate my skills</b> as a developer.
                                I have also worked on dashboards to help my current employer <b style={{color: "#00ADB5"}}>onboard clients</b> during sales.
                                I believe that I am able to help companies reach their <b style={{color: "#00ADB5"}}>fullest potential and attract new customers</b>.
                            </span>
                        </Row>

                        <Row>
                            <span className="p-0 pb-3 animate__animated animate__fadeInDown">
                                <br/><Link style={{color: "#00ADB5"}} to={"/projects"}>View My Projects</Link> 
                                &nbsp; &nbsp; or &nbsp; &nbsp;
                                <Link style={{color: "#00ADB5"}} to={"/aboutme"}>Read About Me</Link>
                            </span>
                        </Row>
                    </Col>
                </Row>

                <a href="#works" className="d-flex justify-content-center pt-5">
                    <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                </a>
            </Container>

            <Container id="works" className="py-4">
                <Row>
                    <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="d-flex justify-content-center pt-5 animate__animated animate__fadeInDown">
                        <h1>Selected Projects</h1>
                    </Col>
                </Row>
                
                <Row>
                    <SelectedCards/>

                    <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="d-flex justify-content-center animate__animated animate__fadeInUp">
                        <h5><Link style={{color: "#00ADB5"}} to={"/projects"}>View My Projects</Link></h5>
                    </Col>
                </Row>
                
                <a href="#contact" className="d-flex justify-content-center pt-4">
                    <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                </a>
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