import React from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { Row, Col, Container, Card } from 'react-bootstrap';
import 'animate.css';
import header_pic from '../assets/head_shot.png';
import * as FiIcons from 'react-icons/fi';
import Navigationbar from '../component/Navigationbar';
import CScards from '../component/CScards';


export default function Home(){
    return(
        <Container>
            <Navigationbar/>

            <Container className={(isMobile) ? "pb-0" : "pb-5"}>
                <Row className="d-flex justify-content-center py-2">
                    <Col 
                        xs={12} md={5} lg={5} xl={5} xxl={5} 
                        className="d-flex justify-content-center"
                    >
                        <img 
                            className="animate__animated animate__fadeInDown"
                            src={header_pic}
                            style= {(isMobile) ? {width: "62%", borderRadius: "30px"} : {width: "76%", borderRadius: "40px"}}
                        />
                    </Col>

                    <Col 
                        xs={10} md={6} lg={6} xl={6} xxl={6} 
                        className={(isMobile) ? "py-0" : "py-5"} 
                    >
                        <Row>
                            <h1 className="pl-1 animate__animated animate__fadeInDown">
                                <br/>I'm a <b style={{color: "#00ADB5"}}>Software Developer</b>.<br/>
                            </h1>

                            <span className="p-0 animate__animated animate__fadeInDown">
                                <b style={{fontSize: "0.8em", opacity: "0.3"}}>Austin Lian Jia Le</b><br/>
                                <b style={{fontSize: "0.8em", opacity: "0.3"}}>Year 3 Computer Science undergraduate at University of London</b><br/><br/>
                            </span>
                        </Row>

                        <Row>
                            <span 
                                className="p-0 animate__animated animate__fadeInDown"
                                style={{width: "96%"}}
                            >
                                Over the past <b style={{color: "#00ADB5"}}>3 years</b>, 
                                I have worked on <b style={{color: "#00ADB5"}}>numerous projects</b> to <b style={{color: "#00ADB5"}}>elevate my skills</b> as a developer.
                                I have also <b style={{color: "#00ADB5"}}>worked on dashboards</b> to help my current employer <b style={{color: "#00ADB5"}}>onboard clients</b> during sales.
                                I believe that I am able to help companies reach their <b style={{color: "#00ADB5"}}>fullest potential and attract new customers</b>.
                            </span>
                        </Row>

                        <Row>
                            <span 
                            className="p-0 animate__animated animate__fadeInDown"
                            >
                                <br/><Link style={{color: "#00ADB5"}} to={"/projects"}>View My Projects</Link> 
                                &nbsp; &nbsp; or &nbsp; &nbsp;
                                <Link style={{color: "#00ADB5"}} to={"/aboutme"}>Read About Me</Link>
                            </span>
                        </Row>
                    </Col>
                </Row>

                <Row className={(isMobile) ? "d-flex justify-content-center py-3" : "d-flex justify-content-center py-4"}>
                    <FiIcons.FiChevronsDown 
                        className="animate__animated animate__bounce" 
                        style= {{opacity: "0.5", fontSize: "20px"}}
                    />
                </Row>
            </Container>

            <Container>
                <Row className="pt-3">
                    <Col 
                        xs={12} md={4} lg={5} xl={5} xxl={5} 
                        className="d-flex justify-content-center"
                    >
                        <h2><u>Case Studies</u></h2>
                    </Col>
                </Row>
                

                <CScards/>
                <CScards/>
                <CScards/>



            </Container>
        </Container>
    );
}