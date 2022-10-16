import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as FiIcons from 'react-icons/fi';
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

                    <Row className="pt-3">
                        {/* <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="animate__animated animate__fadeInLeft">
                            <Row>
                                <span style={{width: "90%"}}>
                                    The project aims to create a <b style={{color: "#00ADB5"}}>quicker and more efficient</b> process when it comes to finding
                                    remote workspaces for working adults, bridging the gap of manually going through various online
                                    articles and blogs to a few simple steps. 

                                    <br/><br/> 

                                    “WorkGoWhere” specifically narrow down remote work spaces 
                                    that meet the needs of users, it can <b style={{color: "#00ADB5"}}>significantly improve the ease and efficiency</b> of finding such 
                                    places at different places and times.
                                </span>
                            </Row>

                            <span className="d-flex justify-content-left pt-3" style={{fontSize: "0.8em", color: "#393E46"}}>
                                Skills: JavaScript, HTML, CSS, Tailwind CSS, MongoDB, ExpressJS, ReactJS, NodeJS <br/> <br/> 
                                Tools: Visual Studios Code, Figma, Jira, Discord, Github <br/> <br/> 
                                Framework & Library: MVC, MERN, Bootstrap, NPM  <br/> <br/> 
                            </span>

                            <span className="d-flex justify-content-end" style={{fontSize: "1.4em", color: "#393E46"}}>
                                <a href={ReportPDF} target="_blank" rel="noreferrer" className="d-flex justify-content-end" style={{color: "#222831"}}>
                                    <BsIcons.BsFillFileEarmarkPdfFill/> 
                                </a> 
                                &nbsp; &nbsp;
                                <a href="https://github.com/AgileProjectY2" target= "_blank" rel="noreferrer" className="d-flex justify-content-end" style={{color: "#222831"}}>
                                    <BsIcons.BsGithub/> 
                                </a>
                            </span>
                        </Col> */}

                        {/* <Col xs={12} md={12} lg={6} xl={6} xxl={6} className="animate__animated animate__fadeInRight pt-2">
                            <video width="100%" controls style={{borderRadius: "12px", border: "solid 2px grey"}}>
                                <source src={WgwVidDemo} type="video/mp4"/>
                                Your browser does not support HTML mp4 video.
                            </video>
                        </Col> */}

                        <a href="#workflow" className="d-flex justify-content-center pt-5">
                            <FiIcons.FiChevronsDown className="animate__animated animate__bounce" style= {{opacity: "0.5", fontSize: "20px", color: "#222831"}}/>
                        </a>
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